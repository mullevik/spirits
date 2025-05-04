import { type LatLon } from 'geolocation-utils'
import type { Track } from './track'

export type SpiritId = string
export interface Spirit {
  id: SpiritId
  name: string
  kind: string
  difficulty: number
  tracks: Track[]
  area: LatLon[]
}
