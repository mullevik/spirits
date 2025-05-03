import { headingDistanceTo, moveTo, type LatLon } from 'geolocation-utils'

export type Seconds = number
export type Milliseconds = number
export type Meters = number

export const MAX_CHARGE: number = 100
export const MIN_CHARGE: number = 0

export interface TrackPoint {
  position: LatLon
  timeToReachNext: Seconds
}

export class Track {
  private pts: TrackPoint[]
  private beginAt: Date
  private captureDuration: Seconds
  private maxAllowedDistance: Meters

  constructor(
    pts: TrackPoint[],
    beginAt: Date,
    captureDuration: Seconds,
    maxAllowedDistance: Meters,
  ) {
    if (pts.length < 1) {
      throw Error('Track must have at least 1 TrackPoint')
    }
    this.pts = pts
    this.beginAt = beginAt
    this.captureDuration = captureDuration
    this.maxAllowedDistance = maxAllowedDistance
  }

  public getMaxAllowedDistance(): Meters {
    return this.maxAllowedDistance
  }

  public getChargePerSecond(): number {
    return MAX_CHARGE / this.captureDuration
  }

  public getBeginDate(): Date {
    return this.beginAt
  }

  public duration(): Seconds {
    return this.pts.reduce((prev, curr) => prev + curr.timeToReachNext, 0)
  }

  public targetAt(date: Date): LatLon {
    const timeDiff: Milliseconds = Math.abs(this.beginAt.getTime() - date.getTime())

    const remainder: Milliseconds = timeDiff % Math.round(this.duration() * 1000)

    let currentIdx = 0
    let accTime = 0
    while (true) {
      const prev = this.pts[currentIdx % this.pts.length]
      const next = this.pts[(currentIdx + 1) % this.pts.length]
      const timeFromPrevToNext: Milliseconds = prev.timeToReachNext * 1000
      accTime += timeFromPrevToNext
      if (accTime > remainder) {
        const timeWithinPrevAndNext = remainder - (accTime - timeFromPrevToNext)

        const ratioFromPrevToNext = timeWithinPrevAndNext / timeFromPrevToNext
        return interpolate(prev.position, next.position, ratioFromPrevToNext)
      }
      currentIdx += 1
    }
  }
}

const SIGNAL_STRENGTH_M: number = 100
export const REQUIRED_SIGNAL_STRENGTH: number = 50

// Computes signal-strength based on distance to target
//
// Signal strength is a Non-linear function: [ m / (x/t + 1) ]
//  where:
//  - `m` is the maximum signal strength at distance 0
//  - `t` is the distance at which the function reaches half of `m`
//
// This function converges to 0 at positive infinity. The further the distance, the lower the value.
export function getSignalStrength(distance: Meters, t: number): number {
  return SIGNAL_STRENGTH_M / (distance / t + 1)
}

export function interpolate(a: LatLon, b: LatLon, percentFromAToB: number) {
  const dstHeading = headingDistanceTo(a, b)
  return moveTo(a, { distance: dstHeading.distance * percentFromAToB, heading: dstHeading.heading })
}
