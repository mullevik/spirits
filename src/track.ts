import { headingDistanceTo, moveTo, type LatLon } from 'geolocation-utils'

export type Seconds = number
export type Milliseconds = number
export type Meters = number

export const MAX_CHARGE: number = 100
export const MIN_CHARGE: number = 0

export const DEFAULT_BEGIN_DATE = new Date(1739612690546)

export interface TrackPoint {
  position: LatLon
  timeToReachNext: Seconds
}

export class Track {
  private pts: TrackPoint[]
  private beginAt: Date
  private captureDuration: Seconds
  private maxAllowedDistance: Meters
  public isActive: (dt: Date) => boolean

  constructor(
    pts: TrackPoint[],
    {
      beginAt = DEFAULT_BEGIN_DATE,
      captureDuration = 60,
      maxAllowedDistance = 30,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      isActive = (dt: Date): boolean => true,
    }: {
      beginAt?: Date
      captureDuration?: Seconds
      maxAllowedDistance?: Meters
      isActive?: (dt: Date) => boolean
    },
  ) {
    if (pts.length < 1) {
      throw Error('Track must have at least 1 TrackPoint')
    }
    this.pts = pts
    this.beginAt = beginAt
    this.captureDuration = captureDuration
    this.maxAllowedDistance = maxAllowedDistance
    this.isActive = isActive
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

const landmarks = [50, 100, 250, 500, 1000, 2000, 5000, 10000]

export function approximateDistance(d: Meters): Meters {
  if (d < landmarks[0]) {
    return d
  } else {
    for (let i = landmarks.length - 1; i >= 0; i--) {
      if (landmarks[i] > d) {
        return landmarks[i]
      }
    }
    return landmarks[landmarks.length - 1]
  }
}
