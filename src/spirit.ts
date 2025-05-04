import type { Track } from './track'

export type SpiritId = string
export interface Spirit {
  id: SpiritId
  name: string
  kind: string
  tracks: Track[]
}
