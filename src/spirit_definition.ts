import type { Spirit, SpiritId } from './spirit'
import { CONTAINER_0, CONTAINER_1, ROOSTRIDER_TRACK } from './track_definition'

export const SPIRITS: { [key: SpiritId]: Spirit } = {
  roostrider: {
    id: 'roostrider',
    name: 'Roostrider',
    description: 'Todo: description',
    tracks: [ROOSTRIDER_TRACK],
  },
  ecobunny: {
    id: 'ecobunny',
    name: 'Eco-Bunny',
    description: 'Todo: description',
    tracks: [CONTAINER_0, CONTAINER_1],
  },
}
