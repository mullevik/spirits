import type { Spirit, SpiritId } from './spirit'
import { CONTAINER_0, CONTAINER_1, ROOSTRIDER_TRACK } from './track_definition'

export const SPIRITS: { [key: SpiritId]: Spirit } = {
  roostrider: {
    id: 'roostrider',
    name: 'Roostrider',
    kind: 'Easter bird',
    difficulty: 2,
    tracks: [ROOSTRIDER_TRACK],
  },
  ecobunny: {
    id: 'ecobunny',
    name: 'Eco-Bunny',
    kind: 'Bunny',
    difficulty: 1,
    tracks: [CONTAINER_0, CONTAINER_1],
  },
}
