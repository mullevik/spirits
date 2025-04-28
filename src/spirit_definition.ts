import type { Spirit, SpiritId } from './spirit'
import { ECOBUNNY_TRACK, ROOSTRIDER_TRACK } from './track_definition'

export const SPIRITS: { [key: SpiritId]: Spirit } = {
  roostrider: {
    id: 'roostrider',
    name: 'Roostrider',
    description: 'Todo: description',
    track: ROOSTRIDER_TRACK,
  },
  ecobunny: {
    id: 'ecobunny',
    name: 'Eco-Bunny',
    description: 'Todo: description',
    track: ECOBUNNY_TRACK,
  },
}
