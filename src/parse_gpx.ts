import * as fs from 'fs'

import { type LatLon, distanceTo } from 'geolocation-utils'

const parseGpx = (filePath: string, paceMinutesPerKm: number | null, reverse: boolean) => {
  // Read the GPX file
  const data = fs.readFileSync(filePath, 'utf8')

  // Split the file into lines
  const lines = data.split('\n')

  // Extract latitude and longitude values
  const coordinates: LatLon[] = []
  lines.forEach((line: string) => {
    const latMatch = line.match(/lat="([^"]+)"/)
    const lonMatch = line.match(/lon="([^"]+)"/)
    if (latMatch && lonMatch) {
      const lat = parseFloat(latMatch[1])
      const lon = parseFloat(lonMatch[1])
      coordinates.push({ lat: lat, lon: lon })
    }
  })

  if (reverse) {
    coordinates.reverse()
  }

  if (paceMinutesPerKm) {
    coordinates.push(coordinates[0])
    const durations: number[] = []
    const distances: number[] = []
    for (let i = 0; i < coordinates.length - 1; i++) {
      const speedSecondsPerMeter = (paceMinutesPerKm * 60) / 1000
      const current = coordinates[i]
      const next = coordinates[i + 1]
      const dist = distanceTo(current, next)
      distances.push(dist)
      const duration = dist * speedSecondsPerMeter
      durations.push(duration)
      console.log(
        `{position: {lat: ${current.lat}, lon: ${current.lon}}, timeToReachNext: ${duration.toFixed(2)}},`,
      )
    }
    const sm = durations.reduce((p, c) => p + c, 0)
    console.log(`sum: ${sm} seconds (${sm / 60} minutes)`)
    console.log(`dist: ${distances.reduce((p, c) => p + c, 0)}m`)
  } else {
    for (const x of coordinates) {
      console.log(`{lat: ${x.lat}, lon: ${x.lon}},`)
    }
  }
}

const filePath = process.argv[2]
const paceMinutesPerKm: number | null = process.argv[3] ? parseFloat(process.argv[3]) : null
const reverse: boolean = process.argv[4] ? process.argv[4] === 'rev' : false

if (!filePath) {
  console.error('Please provide a file path as an argument')
  process.exit(1)
}

parseGpx(filePath, paceMinutesPerKm, reverse)
