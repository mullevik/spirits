import type { Track } from './track'

export type SpiritId = string
export interface Spirit {
  id: SpiritId
  name: string
  description: string
  tracks: Track[]
}
