import type { Spirit, SpiritId } from './spirit'
import {
  CONTAINER_0,
  CONTAINER_1,
  KRYSAL_0,
  KRYSAL_1,
  KRYSAL_2,
  PRASOCKA_0,
  PRASOCKA_1,
  PRASOCKA_2,
  ROOSTRIDER_TRACK,
} from './track_definition'

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
  krysal: {
    id: 'krysal',
    name: 'Krysal',
    kind: 'Vesnické strašidlo',
    difficulty: 1,
    tracks: [KRYSAL_0, KRYSAL_1, KRYSAL_2],
    area: [
      { lat: 49.136718, lon: 13.685837 },
      { lat: 49.140088, lon: 13.685408 },
      { lat: 49.142053, lon: 13.689914 },
      { lat: 49.141197, lon: 13.692361 },
      { lat: 49.136746, lon: 13.689292 },
    ],
  },
  prasocka: {
    id: 'prasocka',
    name: 'Prasočka',
    kind: 'Neznámý mazel',
    difficulty: 2,
    tracks: [PRASOCKA_0, PRASOCKA_1, PRASOCKA_2],
    area: [
      { lat: 49.022398, lon: 13.493681 },
      { lat: 49.012491, lon: 13.586378 },
      { lat: 49.05357, lon: 13.582087 },
      { lat: 49.063694, lon: 13.507586 },
    ],
  },
}
