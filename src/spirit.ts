import { type LatLon } from 'geolocation-utils'
import { Track } from './track'

export type SpiritId = string
export interface Spirit {
  id: SpiritId
  name: string
  kind: string
  difficulty: number
  tracks: Track[]
  area: LatLon[]
  region: string
}

export function displayName(s: Spirit, isCaptured: boolean): string {
  return isCaptured ? s.name : s.kind
}
