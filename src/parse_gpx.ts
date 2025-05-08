import * as fs from 'fs'

import { type LatLon } from 'geolocation-utils'

const parseGpx = (filePath: string) => {
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

  // Log or return the extracted coordinates
  for (const x of coordinates) {
    console.log(`{lat: ${x.lat}, lon: ${x.lon}},`)
  }
}

const filePath = process.argv[2]

if (!filePath) {
  console.error('Please provide a file path as an argument')
  process.exit(1)
}

parseGpx(filePath)
