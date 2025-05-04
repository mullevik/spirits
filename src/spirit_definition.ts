import type { Spirit, SpiritId } from './spirit'
import { CONTAINER_0, CONTAINER_1, ROOSTRIDER_TRACK } from './track_definition'

export const SPIRITS: { [key: SpiritId]: Spirit } = {
  roostrider: {
    id: 'roostrider',
    name: 'Roostrider',
    kind: 'Easter bird',
    difficulty: 2,
    tracks: [ROOSTRIDER_TRACK],
    area: [
      { lat: 50.0466272, lon: 14.4164581 },
      { lat: 50.0478261, lon: 14.4283883 },
      { lat: 50.0529378, lon: 14.4176597 },
    ],
  },
  ecobunny: {
    id: 'ecobunny',
    name: 'Eco-Bunny',
    kind: 'Bunny',
    difficulty: 1,
    tracks: [CONTAINER_0, CONTAINER_1],
    area: [
      { lat: 50.0591303, lon: 14.4259531 },
      { lat: 50.0614239, lon: 14.4287961 },
      { lat: 50.0591028, lon: 14.43371 },
      { lat: 50.0576014, lon: 14.4300836 },
    ],
  },
}
