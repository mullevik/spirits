import { Track } from './track'

const activeInTheMorning = (dt: Date) => dt.getHours() >= 5 && dt.getHours() < 7
const activeAtNight = (dt: Date) => dt.getHours() > 21 || dt.getHours() < 5
const activeAtMidnight = (dt: Date) => dt.getHours() >= 0 && dt.getHours() < 3
const activeAtSunset = (dt: Date) => {
  if (dt.getHours() == 19 && dt.getMinutes() > 30) {
    return true
  } else if (dt.getHours() >= 20 && dt.getHours() < 21) {
    return true
  } else if (dt.getHours() == 21 && dt.getMinutes() < 30) {
    return true
  } else {
    return false
  }
}

export const CONTAINER_0 = new Track(
  [{ position: { lat: 50.0589978, lon: 14.432535 }, timeToReachNext: 10 }],
  {
    maxAllowedDistance: 10,
    captureDuration: 5,
    confirmMessage:
      'Some super long confirm message. Some super long confirm message. Some super long confirm message.',
  },
)

export const CONTAINER_1 = new Track(
  [{ position: { lat: 50.0586344, lon: 14.42933 }, timeToReachNext: 10 }],
  {
    maxAllowedDistance: 10,
    captureDuration: 5,
    confirmMessage: 'Near second container?',
  },
)
export const CONTAINER_2 = new Track(
  [{ position: { lat: 50.0586344, lon: 14.42933 }, timeToReachNext: 10 }],
  {
    maxAllowedDistance: 10,
    captureDuration: 5,
    confirmMessage: 'Near second container again?',
  },
)

export const ROOSTRIDER_TRACK = new Track(
  [
    { position: { lat: 50.050351, lon: 14.420486 }, timeToReachNext: 5 },
    { position: { lat: 50.050164, lon: 14.420603 }, timeToReachNext: 4 },
    { position: { lat: 50.049995, lon: 14.420733 }, timeToReachNext: 5 },
    { position: { lat: 50.049821, lon: 14.420828 }, timeToReachNext: 8 },
    { position: { lat: 50.049637, lon: 14.420882 }, timeToReachNext: 7 },
    { position: { lat: 50.049492, lon: 14.421067 }, timeToReachNext: 9 },
    { position: { lat: 50.04928, lon: 14.421166 }, timeToReachNext: 2 },
    { position: { lat: 50.049133, lon: 14.421351 }, timeToReachNext: 7 },
    { position: { lat: 50.048953, lon: 14.421445 }, timeToReachNext: 7 },
    { position: { lat: 50.048816, lon: 14.421642 }, timeToReachNext: 8 },
    { position: { lat: 50.048648, lon: 14.421814 }, timeToReachNext: 7 },
    { position: { lat: 50.048534, lon: 14.422049 }, timeToReachNext: 5 },
    { position: { lat: 50.048456, lon: 14.422337 }, timeToReachNext: 6 },
    { position: { lat: 50.048469, lon: 14.422621 }, timeToReachNext: 5 },
    { position: { lat: 50.04856, lon: 14.422878 }, timeToReachNext: 5 },
    { position: { lat: 50.04864, lon: 14.423134 }, timeToReachNext: 3 },
    { position: { lat: 50.048788, lon: 14.423382 }, timeToReachNext: 6 },
    { position: { lat: 50.04885, lon: 14.42365 }, timeToReachNext: 7 },
    { position: { lat: 50.048912, lon: 14.423953 }, timeToReachNext: 5 },
    { position: { lat: 50.048961, lon: 14.424232 }, timeToReachNext: 6 },
    { position: { lat: 50.048989, lon: 14.424531 }, timeToReachNext: 7 },
    { position: { lat: 50.049018, lon: 14.424809 }, timeToReachNext: 7 },
    { position: { lat: 50.049061, lon: 14.425109 }, timeToReachNext: 6 },
    { position: { lat: 50.049078, lon: 14.425399 }, timeToReachNext: 6 },
    { position: { lat: 50.049074, lon: 14.42568 }, timeToReachNext: 7 },
    { position: { lat: 50.049073, lon: 14.425978 }, timeToReachNext: 6 },
    { position: { lat: 50.049112, lon: 14.42628 }, timeToReachNext: 6 },
    { position: { lat: 50.049151, lon: 14.426563 }, timeToReachNext: 6 },
    { position: { lat: 50.049176, lon: 14.426873 }, timeToReachNext: 6 },
    { position: { lat: 50.049197, lon: 14.427168 }, timeToReachNext: 6 },
    { position: { lat: 50.049212, lon: 14.427448 }, timeToReachNext: 5 },
    { position: { lat: 50.049258, lon: 14.427757 }, timeToReachNext: 5 },
    { position: { lat: 50.049279, lon: 14.428066 }, timeToReachNext: 6 },
    { position: { lat: 50.049287, lon: 14.428349 }, timeToReachNext: 6 },
    { position: { lat: 50.049192, lon: 14.428587 }, timeToReachNext: 7 },
    { position: { lat: 50.049006, lon: 14.428683 }, timeToReachNext: 6 },
    { position: { lat: 50.048811, lon: 14.428713 }, timeToReachNext: 7 },
    { position: { lat: 50.048627, lon: 14.428722 }, timeToReachNext: 5 },
    { position: { lat: 50.048435, lon: 14.428713 }, timeToReachNext: 6 },
    { position: { lat: 50.04823, lon: 14.428671 }, timeToReachNext: 7 },
    { position: { lat: 50.048037, lon: 14.428631 }, timeToReachNext: 6 },
    { position: { lat: 50.047858, lon: 14.428561 }, timeToReachNext: 6 },
    { position: { lat: 50.047675, lon: 14.428494 }, timeToReachNext: 4 },
    { position: { lat: 50.047498, lon: 14.428394 }, timeToReachNext: 6 },
    { position: { lat: 50.04744, lon: 14.428125 }, timeToReachNext: 7 },
    { position: { lat: 50.047549, lon: 14.427862 }, timeToReachNext: 6 },
    { position: { lat: 50.047686, lon: 14.427608 }, timeToReachNext: 5 },
    { position: { lat: 50.047795, lon: 14.427368 }, timeToReachNext: 5 },
    { position: { lat: 50.047905, lon: 14.42714 }, timeToReachNext: 6 },
    { position: { lat: 50.04801, lon: 14.426904 }, timeToReachNext: 6 },
    { position: { lat: 50.048106, lon: 14.426642 }, timeToReachNext: 6 },
    { position: { lat: 50.04816, lon: 14.426375 }, timeToReachNext: 5 },
    { position: { lat: 50.048178, lon: 14.426083 }, timeToReachNext: 6 },
    { position: { lat: 50.048163, lon: 14.425804 }, timeToReachNext: 6 },
    { position: { lat: 50.048135, lon: 14.425518 }, timeToReachNext: 5 },
    { position: { lat: 50.048076, lon: 14.425211 }, timeToReachNext: 5 },
    { position: { lat: 50.047997, lon: 14.424939 }, timeToReachNext: 6 },
    { position: { lat: 50.047891, lon: 14.424685 }, timeToReachNext: 6 },
    { position: { lat: 50.047799, lon: 14.424425 }, timeToReachNext: 7 },
    { position: { lat: 50.047669, lon: 14.424225 }, timeToReachNext: 6 },
    { position: { lat: 50.047539, lon: 14.423997 }, timeToReachNext: 5 },
    { position: { lat: 50.047376, lon: 14.423814 }, timeToReachNext: 6 },
    { position: { lat: 50.047226, lon: 14.423614 }, timeToReachNext: 6 },
    { position: { lat: 50.047064, lon: 14.423448 }, timeToReachNext: 6 },
    { position: { lat: 50.04693, lon: 14.423252 }, timeToReachNext: 5 },
    { position: { lat: 50.046784, lon: 14.423069 }, timeToReachNext: 6 },
    { position: { lat: 50.046643, lon: 14.422891 }, timeToReachNext: 7 },
    { position: { lat: 50.046576, lon: 14.422603 }, timeToReachNext: 6 },
    { position: { lat: 50.046551, lon: 14.422289 }, timeToReachNext: 8 },
    { position: { lat: 50.04652, lon: 14.421994 }, timeToReachNext: 6 },
    { position: { lat: 50.046462, lon: 14.421723 }, timeToReachNext: 5 },
    { position: { lat: 50.046446, lon: 14.421443 }, timeToReachNext: 7 },
    { position: { lat: 50.04647, lon: 14.421141 }, timeToReachNext: 6 },
    { position: { lat: 50.046486, lon: 14.420857 }, timeToReachNext: 6 },
    { position: { lat: 50.046503, lon: 14.420563 }, timeToReachNext: 6 },
    { position: { lat: 50.046541, lon: 14.420288 }, timeToReachNext: 7 },
    { position: { lat: 50.046584, lon: 14.419987 }, timeToReachNext: 7 },
    { position: { lat: 50.046611, lon: 14.419698 }, timeToReachNext: 6 },
    { position: { lat: 50.046667, lon: 14.419412 }, timeToReachNext: 6 },
    { position: { lat: 50.046717, lon: 14.419135 }, timeToReachNext: 6 },
    { position: { lat: 50.046779, lon: 14.418868 }, timeToReachNext: 6 },
    { position: { lat: 50.046871, lon: 14.418614 }, timeToReachNext: 7 },
    { position: { lat: 50.04702, lon: 14.41842 }, timeToReachNext: 7 },
    { position: { lat: 50.047196, lon: 14.418323 }, timeToReachNext: 8 },
    { position: { lat: 50.047386, lon: 14.418283 }, timeToReachNext: 7 },
    { position: { lat: 50.047537, lon: 14.418126 }, timeToReachNext: 7 },
    { position: { lat: 50.047671, lon: 14.417898 }, timeToReachNext: 8 },
    { position: { lat: 50.047828, lon: 14.417721 }, timeToReachNext: 8 },
    { position: { lat: 50.048011, lon: 14.417759 }, timeToReachNext: 7 },
    { position: { lat: 50.04821, lon: 14.417797 }, timeToReachNext: 7 },
    { position: { lat: 50.048409, lon: 14.417811 }, timeToReachNext: 5 },
    { position: { lat: 50.048595, lon: 14.417797 }, timeToReachNext: 5 },
    { position: { lat: 50.04878, lon: 14.41781 }, timeToReachNext: 5 },
    { position: { lat: 50.048963, lon: 14.417836 }, timeToReachNext: 6 },
    { position: { lat: 50.049147, lon: 14.417835 }, timeToReachNext: 9 },
    { position: { lat: 50.049337, lon: 14.417799 }, timeToReachNext: 6 },
    { position: { lat: 50.049494, lon: 14.418 }, timeToReachNext: 7 },
    { position: { lat: 50.049631, lon: 14.418205 }, timeToReachNext: 8 },
    { position: { lat: 50.04972, lon: 14.418459 }, timeToReachNext: 7 },
    { position: { lat: 50.049789, lon: 14.418739 }, timeToReachNext: 6 },
    { position: { lat: 50.049865, lon: 14.419018 }, timeToReachNext: 7 },
    { position: { lat: 50.049952, lon: 14.419271 }, timeToReachNext: 3 },
    { position: { lat: 50.05011, lon: 14.419577 }, timeToReachNext: 4 },
    { position: { lat: 50.050224, lon: 14.419798 }, timeToReachNext: 6 },
    { position: { lat: 50.05033, lon: 14.420025 }, timeToReachNext: 5 },
  ],
  { maxAllowedDistance: 30, captureDuration: 60 * 6 },
)

export const KRYSAL_0 = new Track(
  [{ position: { lat: 49.1402592, lon: 13.6906803 }, timeToReachNext: 1 }],
  {
    maxAllowedDistance: 15,
    captureDuration: 10,
    isActive: activeAtNight,
  },
)

export const KRYSAL_1 = new Track(
  [{ position: { lat: 49.1396647, lon: 13.6889428 }, timeToReachNext: 1 }],
  {
    maxAllowedDistance: 15,
    captureDuration: 10,
    isActive: activeAtNight,
  },
)

export const KRYSAL_2 = new Track(
  [{ position: { lat: 49.1387967, lon: 13.6881389 }, timeToReachNext: 1 }],
  {
    maxAllowedDistance: 15,
    captureDuration: 10,
    isActive: activeAtNight,
  },
)

export const PRASOCKA_0 = new Track( // kvilda
  [{ position: { lat: 49.0206414, lon: 13.5802333 }, timeToReachNext: 1 }],
  { maxAllowedDistance: 30, captureDuration: 5 * 60 },
)

export const PRASOCKA_1 = new Track( // dasa
  [{ position: { lat: 49.0264636, lon: 13.5149828 }, timeToReachNext: 1 }],
  { maxAllowedDistance: 30, captureDuration: 7 * 60 },
)

export const PRASOCKA_2 = new Track( // modrava
  [{ position: { lat: 49.0249594, lon: 13.4988722 }, timeToReachNext: 1 }],
  { maxAllowedDistance: 30, captureDuration: 5 * 60 },
)

export const KOZOREL_0 = new Track(
  [{ position: { lat: 49.0739069, lon: 13.63197 }, timeToReachNext: 1 }],
  { maxAllowedDistance: 15, captureDuration: 5 },
)

export const KOZOREL_1 = new Track(
  [
    { position: { lat: 49.07384, lon: 13.631981 }, timeToReachNext: 54.06 },
    { position: { lat: 49.073215, lon: 13.630994 }, timeToReachNext: 13.34 },
    { position: { lat: 49.073229, lon: 13.630656 }, timeToReachNext: 21.85 },
    { position: { lat: 49.072909, lon: 13.630393 }, timeToReachNext: 36.16 },
    { position: { lat: 49.072422, lon: 13.629854 }, timeToReachNext: 17.11 },
    { position: { lat: 49.072257, lon: 13.6295 }, timeToReachNext: 10.95 },
    { position: { lat: 49.07215, lon: 13.629275 }, timeToReachNext: 10.07 },
    { position: { lat: 49.072163, lon: 13.62902 }, timeToReachNext: 21.61 },
    { position: { lat: 49.072486, lon: 13.628779 }, timeToReachNext: 36.9 },
    { position: { lat: 49.072932, lon: 13.628135 }, timeToReachNext: 9.76 },
    { position: { lat: 49.073, lon: 13.62791 }, timeToReachNext: 10.87 },
    { position: { lat: 49.072889, lon: 13.627692 }, timeToReachNext: 19.17 },
    { position: { lat: 49.072612, lon: 13.627451 }, timeToReachNext: 13.55 },
    { position: { lat: 49.072422, lon: 13.627266 }, timeToReachNext: 12.42 },
    { position: { lat: 49.072257, lon: 13.627076 }, timeToReachNext: 10.02 },
    { position: { lat: 49.07212, lon: 13.626931 }, timeToReachNext: 8.34 },
    { position: { lat: 49.072098, lon: 13.626722 }, timeToReachNext: 15.04 },
    { position: { lat: 49.072334, lon: 13.626595 }, timeToReachNext: 17.17 },
    { position: { lat: 49.072609, lon: 13.626477 }, timeToReachNext: 13.76 },
    { position: { lat: 49.072565, lon: 13.626134 }, timeToReachNext: 15.29 },
    { position: { lat: 49.072507, lon: 13.625756 }, timeToReachNext: 13.16 },
    { position: { lat: 49.072472, lon: 13.625426 }, timeToReachNext: 13.83 },
    { position: { lat: 49.072433, lon: 13.62508 }, timeToReachNext: 12.43 },
    { position: { lat: 49.072468, lon: 13.624769 }, timeToReachNext: 13.11 },
    { position: { lat: 49.072387, lon: 13.62446 }, timeToReachNext: 17.2 },
    { position: { lat: 49.072229, lon: 13.624096 }, timeToReachNext: 18.26 },
    { position: { lat: 49.072167, lon: 13.623642 }, timeToReachNext: 9.04 },
    { position: { lat: 49.072098, lon: 13.623438 }, timeToReachNext: 27.93 },
    { position: { lat: 49.071996, lon: 13.622746 }, timeToReachNext: 18.38 },
    { position: { lat: 49.071904, lon: 13.622301 }, timeToReachNext: 13.8 },
    { position: { lat: 49.071792, lon: 13.621995 }, timeToReachNext: 20.55 },
    { position: { lat: 49.071574, lon: 13.621593 }, timeToReachNext: 19.07 },
    { position: { lat: 49.071317, lon: 13.621309 }, timeToReachNext: 11.98 },
    { position: { lat: 49.071155, lon: 13.621132 }, timeToReachNext: 10.19 },
    { position: { lat: 49.070994, lon: 13.621051 }, timeToReachNext: 9.67 },
    { position: { lat: 49.070853, lon: 13.620933 }, timeToReachNext: 8.9 },
    { position: { lat: 49.070709, lon: 13.62088 }, timeToReachNext: 8.53 },
    { position: { lat: 49.070586, lon: 13.620772 }, timeToReachNext: 5.5 },

    // end of climb
    { position: { lat: 49.070454, lon: 13.620941 }, timeToReachNext: 5.56 },
    { position: { lat: 49.068353, lon: 13.623709 }, timeToReachNext: 5.79 },
    { position: { lat: 49.066118, lon: 13.626499 }, timeToReachNext: 5.56 },
    { position: { lat: 49.064711, lon: 13.630147 }, timeToReachNext: 10.3 },
    { position: { lat: 49.06973, lon: 13.628452 }, timeToReachNext: 7.05 },
    { position: { lat: 49.073118, lon: 13.627014 }, timeToReachNext: 5.03 },
    { position: { lat: 49.075578, lon: 13.626241 }, timeToReachNext: 3.89 },
    { position: { lat: 49.077518, lon: 13.626327 }, timeToReachNext: 3.72 },
    { position: { lat: 49.078164, lon: 13.628988 }, timeToReachNext: 2.73 },
    { position: { lat: 49.077883, lon: 13.631026 }, timeToReachNext: 4.55 },
    { position: { lat: 49.075704, lon: 13.631992 }, timeToReachNext: 2.09 },
    { position: { lat: 49.074664, lon: 13.631906 }, timeToReachNext: 1.51 },
    { position: { lat: 49.073912, lon: 13.632003 }, timeToReachNext: 1 },
  ],
  { maxAllowedDistance: 18, captureDuration: 9 * 60 },
)

export const HAFANG_SLOW = new Track(
  [
    { position: { lat: 49.067959, lon: 13.619297 }, timeToReachNext: 6.5 },
    { position: { lat: 49.068072, lon: 13.619539 }, timeToReachNext: 5.74 },
    { position: { lat: 49.068078, lon: 13.619801 }, timeToReachNext: 8.8 },
    { position: { lat: 49.067825, lon: 13.619914 }, timeToReachNext: 12.63 },
    { position: { lat: 49.067449, lon: 13.619978 }, timeToReachNext: 13.03 },
    { position: { lat: 49.067059, lon: 13.619957 }, timeToReachNext: 8.22 },
    { position: { lat: 49.066813, lon: 13.619957 }, timeToReachNext: 9.12 },
    { position: { lat: 49.066549, lon: 13.61985 }, timeToReachNext: 3.96 },
    { position: { lat: 49.066447, lon: 13.619758 }, timeToReachNext: 5.94 },
    { position: { lat: 49.066272, lon: 13.61971 }, timeToReachNext: 6.51 },
    { position: { lat: 49.066093, lon: 13.619592 }, timeToReachNext: 10.47 },
    { position: { lat: 49.065818, lon: 13.619362 }, timeToReachNext: 9.05 },
    { position: { lat: 49.065562, lon: 13.619227 }, timeToReachNext: 5.71 },
    { position: { lat: 49.065397, lon: 13.619158 }, timeToReachNext: 5.15 },
    { position: { lat: 49.06526, lon: 13.61905 }, timeToReachNext: 5.56 },
    { position: { lat: 49.065207, lon: 13.618809 }, timeToReachNext: 8.71 },
    { position: { lat: 49.065253, lon: 13.618417 }, timeToReachNext: 10.92 },
    { position: { lat: 49.065407, lon: 13.617977 }, timeToReachNext: 14.86 },
    { position: { lat: 49.065646, lon: 13.617404 }, timeToReachNext: 11.66 },
    { position: { lat: 49.065843, lon: 13.616964 }, timeToReachNext: 7.06 },
    { position: { lat: 49.065949, lon: 13.616685 }, timeToReachNext: 11.57 },
    { position: { lat: 49.066135, lon: 13.616239 }, timeToReachNext: 6.72 },
    { position: { lat: 49.06624, lon: 13.615977 }, timeToReachNext: 3.94 },
    { position: { lat: 49.066219, lon: 13.6158 }, timeToReachNext: 3.33 },
    { position: { lat: 49.066142, lon: 13.615703 }, timeToReachNext: 1.69 },
    { position: { lat: 49.066096, lon: 13.615735 }, timeToReachNext: 7.31 },
    { position: { lat: 49.065938, lon: 13.615966 }, timeToReachNext: 4.39 },
    { position: { lat: 49.065892, lon: 13.616154 }, timeToReachNext: 6.78 },
    { position: { lat: 49.065928, lon: 13.616459 }, timeToReachNext: 3.57 },
    { position: { lat: 49.065945, lon: 13.61662 }, timeToReachNext: 4.98 },
    { position: { lat: 49.065928, lon: 13.616846 }, timeToReachNext: 6.58 },
    { position: { lat: 49.065914, lon: 13.617146 }, timeToReachNext: 6.21 },
    { position: { lat: 49.065984, lon: 13.617409 }, timeToReachNext: 6.73 },
    { position: { lat: 49.066061, lon: 13.617693 }, timeToReachNext: 8.1 },
    { position: { lat: 49.066061, lon: 13.618063 }, timeToReachNext: 5.52 },
    { position: { lat: 49.066054, lon: 13.618315 }, timeToReachNext: 7.99 },
    { position: { lat: 49.06611, lon: 13.61867 }, timeToReachNext: 9.18 },
    { position: { lat: 49.066201, lon: 13.619066 }, timeToReachNext: 9.43 },
    { position: { lat: 49.066339, lon: 13.619442 }, timeToReachNext: 7.04 },
    { position: { lat: 49.066515, lon: 13.619619 }, timeToReachNext: 7.41 },
    { position: { lat: 49.066736, lon: 13.619651 }, timeToReachNext: 10.18 },
    { position: { lat: 49.067038, lon: 13.619587 }, timeToReachNext: 14.52 },
    { position: { lat: 49.067467, lon: 13.61948 }, timeToReachNext: 16.65 },
    { position: { lat: 49.067952, lon: 13.619303 }, timeToReachNext: 0.5 },
  ],
  {
    maxAllowedDistance: 25,
    captureDuration: 7 * 60,
  },
)
export const HAFANG_FAST = new Track(
  [
    { position: { lat: 49.067959, lon: 13.619297 }, timeToReachNext: 4.94 },
    { position: { lat: 49.068072, lon: 13.619539 }, timeToReachNext: 4.36 },
    { position: { lat: 49.068078, lon: 13.619801 }, timeToReachNext: 6.69 },
    { position: { lat: 49.067825, lon: 13.619914 }, timeToReachNext: 9.6 },
    { position: { lat: 49.067449, lon: 13.619978 }, timeToReachNext: 9.9 },
    { position: { lat: 49.067059, lon: 13.619957 }, timeToReachNext: 6.24 },
    { position: { lat: 49.066813, lon: 13.619957 }, timeToReachNext: 6.93 },
    { position: { lat: 49.066549, lon: 13.61985 }, timeToReachNext: 3.01 },
    { position: { lat: 49.066447, lon: 13.619758 }, timeToReachNext: 4.51 },
    { position: { lat: 49.066272, lon: 13.61971 }, timeToReachNext: 4.95 },
    { position: { lat: 49.066093, lon: 13.619592 }, timeToReachNext: 7.96 },
    { position: { lat: 49.065818, lon: 13.619362 }, timeToReachNext: 6.87 },
    { position: { lat: 49.065562, lon: 13.619227 }, timeToReachNext: 4.34 },
    { position: { lat: 49.065397, lon: 13.619158 }, timeToReachNext: 3.91 },
    { position: { lat: 49.06526, lon: 13.61905 }, timeToReachNext: 4.23 },
    { position: { lat: 49.065207, lon: 13.618809 }, timeToReachNext: 6.62 },
    { position: { lat: 49.065253, lon: 13.618417 }, timeToReachNext: 8.3 },
    { position: { lat: 49.065407, lon: 13.617977 }, timeToReachNext: 11.3 },
    { position: { lat: 49.065646, lon: 13.617404 }, timeToReachNext: 8.86 },
    { position: { lat: 49.065843, lon: 13.616964 }, timeToReachNext: 5.36 },
    { position: { lat: 49.065949, lon: 13.616685 }, timeToReachNext: 8.79 },
    { position: { lat: 49.066135, lon: 13.616239 }, timeToReachNext: 5.11 },
    { position: { lat: 49.06624, lon: 13.615977 }, timeToReachNext: 2.99 },
    { position: { lat: 49.066219, lon: 13.6158 }, timeToReachNext: 2.53 },
    { position: { lat: 49.066142, lon: 13.615703 }, timeToReachNext: 1.28 },
    { position: { lat: 49.066096, lon: 13.615735 }, timeToReachNext: 5.55 },
    { position: { lat: 49.065938, lon: 13.615966 }, timeToReachNext: 3.34 },
    { position: { lat: 49.065892, lon: 13.616154 }, timeToReachNext: 5.15 },
    { position: { lat: 49.065928, lon: 13.616459 }, timeToReachNext: 2.71 },
    { position: { lat: 49.065945, lon: 13.61662 }, timeToReachNext: 3.78 },
    { position: { lat: 49.065928, lon: 13.616846 }, timeToReachNext: 5.0 },
    { position: { lat: 49.065914, lon: 13.617146 }, timeToReachNext: 4.72 },
    { position: { lat: 49.065984, lon: 13.617409 }, timeToReachNext: 5.11 },
    { position: { lat: 49.066061, lon: 13.617693 }, timeToReachNext: 6.15 },
    { position: { lat: 49.066061, lon: 13.618063 }, timeToReachNext: 4.19 },
    { position: { lat: 49.066054, lon: 13.618315 }, timeToReachNext: 6.07 },
    { position: { lat: 49.06611, lon: 13.61867 }, timeToReachNext: 6.98 },
    { position: { lat: 49.066201, lon: 13.619066 }, timeToReachNext: 7.17 },
    { position: { lat: 49.066339, lon: 13.619442 }, timeToReachNext: 5.35 },
    { position: { lat: 49.066515, lon: 13.619619 }, timeToReachNext: 5.63 },
    { position: { lat: 49.066736, lon: 13.619651 }, timeToReachNext: 7.74 },
    { position: { lat: 49.067038, lon: 13.619587 }, timeToReachNext: 11.03 },
    { position: { lat: 49.067467, lon: 13.61948 }, timeToReachNext: 12.66 },
    { position: { lat: 49.067952, lon: 13.619303 }, timeToReachNext: 1 },
  ],
  {
    maxAllowedDistance: 25,
    captureDuration: 258, // 3:59/km
  },
)

export const HAFANG_FASTEST = new Track(
  [
    { position: { lat: 49.067959, lon: 13.619297 }, timeToReachNext: 4.55 },
    { position: { lat: 49.068072, lon: 13.619539 }, timeToReachNext: 4.02 },
    { position: { lat: 49.068078, lon: 13.619801 }, timeToReachNext: 6.16 },
    { position: { lat: 49.067825, lon: 13.619914 }, timeToReachNext: 8.84 },
    { position: { lat: 49.067449, lon: 13.619978 }, timeToReachNext: 9.12 },
    { position: { lat: 49.067059, lon: 13.619957 }, timeToReachNext: 5.75 },
    { position: { lat: 49.066813, lon: 13.619957 }, timeToReachNext: 6.39 },
    { position: { lat: 49.066549, lon: 13.61985 }, timeToReachNext: 2.77 },
    { position: { lat: 49.066447, lon: 13.619758 }, timeToReachNext: 4.16 },
    { position: { lat: 49.066272, lon: 13.61971 }, timeToReachNext: 4.56 },
    { position: { lat: 49.066093, lon: 13.619592 }, timeToReachNext: 7.33 },
    { position: { lat: 49.065818, lon: 13.619362 }, timeToReachNext: 6.33 },
    { position: { lat: 49.065562, lon: 13.619227 }, timeToReachNext: 4.0 },
    { position: { lat: 49.065397, lon: 13.619158 }, timeToReachNext: 3.6 },
    { position: { lat: 49.06526, lon: 13.61905 }, timeToReachNext: 3.89 },
    { position: { lat: 49.065207, lon: 13.618809 }, timeToReachNext: 6.1 },
    { position: { lat: 49.065253, lon: 13.618417 }, timeToReachNext: 7.64 },
    { position: { lat: 49.065407, lon: 13.617977 }, timeToReachNext: 10.4 },
    { position: { lat: 49.065646, lon: 13.617404 }, timeToReachNext: 8.16 },
    { position: { lat: 49.065843, lon: 13.616964 }, timeToReachNext: 4.94 },
    { position: { lat: 49.065949, lon: 13.616685 }, timeToReachNext: 8.1 },
    { position: { lat: 49.066135, lon: 13.616239 }, timeToReachNext: 4.7 },
    { position: { lat: 49.06624, lon: 13.615977 }, timeToReachNext: 2.76 },
    { position: { lat: 49.066219, lon: 13.6158 }, timeToReachNext: 2.33 },
    { position: { lat: 49.066142, lon: 13.615703 }, timeToReachNext: 1.18 },
    { position: { lat: 49.066096, lon: 13.615735 }, timeToReachNext: 5.11 },
    { position: { lat: 49.065938, lon: 13.615966 }, timeToReachNext: 3.07 },
    { position: { lat: 49.065892, lon: 13.616154 }, timeToReachNext: 4.75 },
    { position: { lat: 49.065928, lon: 13.616459 }, timeToReachNext: 2.5 },
    { position: { lat: 49.065945, lon: 13.61662 }, timeToReachNext: 3.48 },
    { position: { lat: 49.065928, lon: 13.616846 }, timeToReachNext: 4.61 },
    { position: { lat: 49.065914, lon: 13.617146 }, timeToReachNext: 4.35 },
    { position: { lat: 49.065984, lon: 13.617409 }, timeToReachNext: 4.71 },
    { position: { lat: 49.066061, lon: 13.617693 }, timeToReachNext: 5.67 },
    { position: { lat: 49.066061, lon: 13.618063 }, timeToReachNext: 3.86 },
    { position: { lat: 49.066054, lon: 13.618315 }, timeToReachNext: 5.59 },
    { position: { lat: 49.06611, lon: 13.61867 }, timeToReachNext: 6.43 },
    { position: { lat: 49.066201, lon: 13.619066 }, timeToReachNext: 6.6 },
    { position: { lat: 49.066339, lon: 13.619442 }, timeToReachNext: 4.93 },
    { position: { lat: 49.066515, lon: 13.619619 }, timeToReachNext: 5.19 },
    { position: { lat: 49.066736, lon: 13.619651 }, timeToReachNext: 7.13 },
    { position: { lat: 49.067038, lon: 13.619587 }, timeToReachNext: 10.16 },
    { position: { lat: 49.067467, lon: 13.61948 }, timeToReachNext: 11.66 },
    { position: { lat: 49.067952, lon: 13.619303 }, timeToReachNext: 1 },
  ],
  {
    maxAllowedDistance: 25,
    captureDuration: 237, // 3:30/km
  },
)

export const HAFANG_FASTEST_DOUBLE = new Track(
  [
    { position: { lat: 49.067959, lon: 13.619297 }, timeToReachNext: 4.55 },
    { position: { lat: 49.068072, lon: 13.619539 }, timeToReachNext: 4.02 },
    { position: { lat: 49.068078, lon: 13.619801 }, timeToReachNext: 6.16 },
    { position: { lat: 49.067825, lon: 13.619914 }, timeToReachNext: 8.84 },
    { position: { lat: 49.067449, lon: 13.619978 }, timeToReachNext: 9.12 },
    { position: { lat: 49.067059, lon: 13.619957 }, timeToReachNext: 5.75 },
    { position: { lat: 49.066813, lon: 13.619957 }, timeToReachNext: 6.39 },
    { position: { lat: 49.066549, lon: 13.61985 }, timeToReachNext: 2.77 },
    { position: { lat: 49.066447, lon: 13.619758 }, timeToReachNext: 4.16 },
    { position: { lat: 49.066272, lon: 13.61971 }, timeToReachNext: 4.56 },
    { position: { lat: 49.066093, lon: 13.619592 }, timeToReachNext: 7.33 },
    { position: { lat: 49.065818, lon: 13.619362 }, timeToReachNext: 6.33 },
    { position: { lat: 49.065562, lon: 13.619227 }, timeToReachNext: 4.0 },
    { position: { lat: 49.065397, lon: 13.619158 }, timeToReachNext: 3.6 },
    { position: { lat: 49.06526, lon: 13.61905 }, timeToReachNext: 3.89 },
    { position: { lat: 49.065207, lon: 13.618809 }, timeToReachNext: 6.1 },
    { position: { lat: 49.065253, lon: 13.618417 }, timeToReachNext: 7.64 },
    { position: { lat: 49.065407, lon: 13.617977 }, timeToReachNext: 10.4 },
    { position: { lat: 49.065646, lon: 13.617404 }, timeToReachNext: 8.16 },
    { position: { lat: 49.065843, lon: 13.616964 }, timeToReachNext: 4.94 },
    { position: { lat: 49.065949, lon: 13.616685 }, timeToReachNext: 8.1 },
    { position: { lat: 49.066135, lon: 13.616239 }, timeToReachNext: 4.7 },
    { position: { lat: 49.06624, lon: 13.615977 }, timeToReachNext: 2.76 },
    { position: { lat: 49.066219, lon: 13.6158 }, timeToReachNext: 2.33 },
    { position: { lat: 49.066142, lon: 13.615703 }, timeToReachNext: 1.18 },
    { position: { lat: 49.066096, lon: 13.615735 }, timeToReachNext: 5.11 },
    { position: { lat: 49.065938, lon: 13.615966 }, timeToReachNext: 3.07 },
    { position: { lat: 49.065892, lon: 13.616154 }, timeToReachNext: 4.75 },
    { position: { lat: 49.065928, lon: 13.616459 }, timeToReachNext: 2.5 },
    { position: { lat: 49.065945, lon: 13.61662 }, timeToReachNext: 3.48 },
    { position: { lat: 49.065928, lon: 13.616846 }, timeToReachNext: 4.61 },
    { position: { lat: 49.065914, lon: 13.617146 }, timeToReachNext: 4.35 },
    { position: { lat: 49.065984, lon: 13.617409 }, timeToReachNext: 4.71 },
    { position: { lat: 49.066061, lon: 13.617693 }, timeToReachNext: 5.67 },
    { position: { lat: 49.066061, lon: 13.618063 }, timeToReachNext: 3.86 },
    { position: { lat: 49.066054, lon: 13.618315 }, timeToReachNext: 5.59 },
    { position: { lat: 49.06611, lon: 13.61867 }, timeToReachNext: 6.43 },
    { position: { lat: 49.066201, lon: 13.619066 }, timeToReachNext: 6.6 },
    { position: { lat: 49.066339, lon: 13.619442 }, timeToReachNext: 4.93 },
    { position: { lat: 49.066515, lon: 13.619619 }, timeToReachNext: 5.19 },
    { position: { lat: 49.066736, lon: 13.619651 }, timeToReachNext: 7.13 },
    { position: { lat: 49.067038, lon: 13.619587 }, timeToReachNext: 10.16 },
    { position: { lat: 49.067467, lon: 13.61948 }, timeToReachNext: 11.66 },
    { position: { lat: 49.067952, lon: 13.619303 }, timeToReachNext: 1 },
  ],
  {
    maxAllowedDistance: 25,
    captureDuration: 237 * 2, // 3:30/km (two rounds)
  },
)

export const ZANKA = new Track(
  [
    { position: { lat: 49.145579, lon: 13.648822 }, timeToReachNext: 30.59 },
    { position: { lat: 49.145368, lon: 13.649497 }, timeToReachNext: 33.87 },
    { position: { lat: 49.145487, lon: 13.650345 }, timeToReachNext: 56.73 },
    { position: { lat: 49.145551, lon: 13.65204 }, timeToReachNext: 44.68 },
    { position: { lat: 49.146154, lon: 13.652899 }, timeToReachNext: 50.98 },
    { position: { lat: 49.147073, lon: 13.653392 }, timeToReachNext: 45.31 },
    { position: { lat: 49.147649, lon: 13.652459 }, timeToReachNext: 47.41 },
    { position: { lat: 49.14774, lon: 13.651107 }, timeToReachNext: 32.05 },
    { position: { lat: 49.14727, lon: 13.650753 }, timeToReachNext: 28.83 },
    { position: { lat: 49.146828, lon: 13.65086 }, timeToReachNext: 29.37 },
    { position: { lat: 49.146463, lon: 13.650431 }, timeToReachNext: 28.78 },
    { position: { lat: 49.146399, lon: 13.64939 }, timeToReachNext: 37.92 },
    { position: { lat: 49.146281, lon: 13.648392 }, timeToReachNext: 31.8 },
    { position: { lat: 49.146049, lon: 13.647684 }, timeToReachNext: 33.37 },
    { position: { lat: 49.146308, lon: 13.646933 }, timeToReachNext: 43.67 },
    { position: { lat: 49.147108, lon: 13.646901 }, timeToReachNext: 47.34 },
    { position: { lat: 49.147677, lon: 13.647942 }, timeToReachNext: 46.13 },
    { position: { lat: 49.14774, lon: 13.649251 }, timeToReachNext: 41.61 },
    { position: { lat: 49.147719, lon: 13.650399 }, timeToReachNext: 37.99 },
    { position: { lat: 49.147509, lon: 13.651364 }, timeToReachNext: 40.82 },
    { position: { lat: 49.147207, lon: 13.652384 }, timeToReachNext: 53.88 },
    { position: { lat: 49.146498, lon: 13.653553 }, timeToReachNext: 32.12 },
    { position: { lat: 49.145978, lon: 13.653671 }, timeToReachNext: 39.64 },
    { position: { lat: 49.145277, lon: 13.653564 }, timeToReachNext: 49.66 },
    { position: { lat: 49.144736, lon: 13.652384 }, timeToReachNext: 46.03 },
    { position: { lat: 49.144736, lon: 13.651075 }, timeToReachNext: 55.4 },
    { position: { lat: 49.144673, lon: 13.649465 }, timeToReachNext: 41.02 },
    { position: { lat: 49.144702, lon: 13.648339 }, timeToReachNext: 40.2 },
    { position: { lat: 49.145417, lon: 13.648435 }, timeToReachNext: 25 },
  ],
  {
    maxAllowedDistance: 25,
    captureDuration: 6 * 60,
  },
)

export const MLOKOHOUT = new Track(
  [
    { position: { lat: 49.146701, lon: 13.684645 }, timeToReachNext: 36.09 },
    { position: { lat: 49.146098, lon: 13.684109 }, timeToReachNext: 39.56 },
    { position: { lat: 49.145354, lon: 13.683701 }, timeToReachNext: 45.3 },
    { position: { lat: 49.144877, lon: 13.682456 }, timeToReachNext: 24.49 },
    { position: { lat: 49.14461, lon: 13.682027 }, timeToReachNext: 59.79 },
    { position: { lat: 49.143347, lon: 13.681384 }, timeToReachNext: 22.65 },
    { position: { lat: 49.143115, lon: 13.681008 }, timeToReachNext: 18.66 },
    { position: { lat: 49.143115, lon: 13.680654 }, timeToReachNext: 20.88 },
    { position: { lat: 49.143214, lon: 13.680236 }, timeToReachNext: 46.31 },
    { position: { lat: 49.14402, lon: 13.679409 }, timeToReachNext: 26.61 },
    { position: { lat: 49.144252, lon: 13.67883 }, timeToReachNext: 18.72 },
    { position: { lat: 49.144189, lon: 13.678487 }, timeToReachNext: 43.8 },
    { position: { lat: 49.143564, lon: 13.677489 }, timeToReachNext: 51.51 },
    { position: { lat: 49.142975, lon: 13.676051 }, timeToReachNext: 44.08 },
    { position: { lat: 49.14261, lon: 13.674775 }, timeToReachNext: 23.98 },
    { position: { lat: 49.142575, lon: 13.674206 }, timeToReachNext: 53.52 },
    { position: { lat: 49.142743, lon: 13.672446 }, timeToReachNext: 26.96 },
    { position: { lat: 49.142483, lon: 13.671878 }, timeToReachNext: 33.97 },
    { position: { lat: 49.141894, lon: 13.671492 }, timeToReachNext: 19.48 },
    { position: { lat: 49.141683, lon: 13.671277 }, timeToReachNext: 38.34 },
    { position: { lat: 49.141234, lon: 13.670344 }, timeToReachNext: 25.06 },
    { position: { lat: 49.140939, lon: 13.669925 }, timeToReachNext: 22.21 },
    { position: { lat: 49.140673, lon: 13.669636 }, timeToReachNext: 31.38 },
    { position: { lat: 49.140469, lon: 13.66882 }, timeToReachNext: 14.64 },
    { position: { lat: 49.140504, lon: 13.668638 }, timeToReachNext: 48.2 },
    { position: { lat: 49.140989, lon: 13.667264 }, timeToReachNext: 25.04 },
    { position: { lat: 49.141143, lon: 13.666696 }, timeToReachNext: 22.87 },
    { position: { lat: 49.141241, lon: 13.666192 }, timeToReachNext: 39.93 },
    { position: { lat: 49.141732, lon: 13.665226 }, timeToReachNext: 29.93 },
    { position: { lat: 49.141241, lon: 13.666192 }, timeToReachNext: 12.87 },
    { position: { lat: 49.141143, lon: 13.666696 }, timeToReachNext: 15.04 },
    { position: { lat: 49.140989, lon: 13.667264 }, timeToReachNext: 38.2 },
    { position: { lat: 49.140504, lon: 13.668638 }, timeToReachNext: 4.64 },
    { position: { lat: 49.140469, lon: 13.66882 }, timeToReachNext: 21.38 },
    { position: { lat: 49.140673, lon: 13.669636 }, timeToReachNext: 12.21 },
    { position: { lat: 49.140939, lon: 13.669925 }, timeToReachNext: 15.06 },
    { position: { lat: 49.141234, lon: 13.670344 }, timeToReachNext: 28.34 },
    { position: { lat: 49.141683, lon: 13.671277 }, timeToReachNext: 9.48 },
    { position: { lat: 49.141894, lon: 13.671492 }, timeToReachNext: 23.97 },
    { position: { lat: 49.142483, lon: 13.671878 }, timeToReachNext: 16.96 },
    { position: { lat: 49.142743, lon: 13.672446 }, timeToReachNext: 43.52 },
    { position: { lat: 49.142575, lon: 13.674206 }, timeToReachNext: 13.98 },
    { position: { lat: 49.14261, lon: 13.674775 }, timeToReachNext: 34.08 },
    { position: { lat: 49.142975, lon: 13.676051 }, timeToReachNext: 41.51 },
    { position: { lat: 49.143564, lon: 13.677489 }, timeToReachNext: 33.8 },
    { position: { lat: 49.144189, lon: 13.678487 }, timeToReachNext: 8.72 },
    { position: { lat: 49.144252, lon: 13.67883 }, timeToReachNext: 16.61 },
    { position: { lat: 49.14402, lon: 13.679409 }, timeToReachNext: 36.31 },
    { position: { lat: 49.143214, lon: 13.680236 }, timeToReachNext: 10.88 },
    { position: { lat: 49.143115, lon: 13.680654 }, timeToReachNext: 8.66 },
    { position: { lat: 49.143115, lon: 13.681008 }, timeToReachNext: 12.65 },
    { position: { lat: 49.143347, lon: 13.681384 }, timeToReachNext: 49.79 },
    { position: { lat: 49.14461, lon: 13.682027 }, timeToReachNext: 14.49 },
    { position: { lat: 49.144877, lon: 13.682456 }, timeToReachNext: 35.3 },
    { position: { lat: 49.145354, lon: 13.683701 }, timeToReachNext: 29.56 },
    { position: { lat: 49.146098, lon: 13.684109 }, timeToReachNext: 26.09 },
  ],
  {
    maxAllowedDistance: 25,
    captureDuration: 3 * 60,
    isActive: activeInTheMorning,
  },
)

export const JEZEVEC = new Track(
  [
    { position: { lat: 50.511191, lon: 15.220764 }, timeToReachNext: 11.24 },
    { position: { lat: 50.51105, lon: 15.220957 }, timeToReachNext: 18.64 },
    { position: { lat: 50.511349, lon: 15.221086 }, timeToReachNext: 9.49 },
    { position: { lat: 50.51123, lon: 15.221249 }, timeToReachNext: 18.69 },
  ],
  {
    maxAllowedDistance: 15,
    captureDuration: 2 * 60,
    isActive: activeAtNight,
    confirmMessage: 'Jsi skutečně o samotě?',
  },
)

export const VLASICKA = new Track(
  [
    // going up
    { position: { lat: 50.510396, lon: 15.229333 }, timeToReachNext: 90.22 },
    { position: { lat: 50.511876, lon: 15.227386 }, timeToReachNext: 3.97 },
    { position: { lat: 50.511949, lon: 15.227454 }, timeToReachNext: 36.72 },
    { position: { lat: 50.512033, lon: 15.228682 }, timeToReachNext: 5.84 },
    { position: { lat: 50.512131, lon: 15.228804 }, timeToReachNext: 56.92 },
    { position: { lat: 50.513348, lon: 15.228753 }, timeToReachNext: 11.0 },
    { position: { lat: 50.513571, lon: 15.228871 }, timeToReachNext: 1 },
    // going down
    { position: { lat: 50.513571, lon: 15.228871 }, timeToReachNext: 9.43 },
    { position: { lat: 50.513348, lon: 15.228753 }, timeToReachNext: 48.79 },
    { position: { lat: 50.512131, lon: 15.228804 }, timeToReachNext: 5.01 },
    { position: { lat: 50.512033, lon: 15.228682 }, timeToReachNext: 31.48 },
    { position: { lat: 50.511949, lon: 15.227454 }, timeToReachNext: 3.4 },
    { position: { lat: 50.511876, lon: 15.227386 }, timeToReachNext: 77.33 },
    { position: { lat: 50.510396, lon: 15.229333 }, timeToReachNext: 1 },
  ],
  {
    maxAllowedDistance: 20,
    captureDuration: 5 * 60,
    isActive: activeAtMidnight,
  },
)

export const HREBEN_SLOW = new Track(
  [
    // going south
    { position: { lat: 50.509332, lon: 15.23114 }, timeToReachNext: 13.68 },
    { position: { lat: 50.509103, lon: 15.231674 }, timeToReachNext: 9.65 },
    { position: { lat: 50.508898, lon: 15.231994 }, timeToReachNext: 8.63 },
    { position: { lat: 50.508654, lon: 15.232128 }, timeToReachNext: 8.78 },
    { position: { lat: 50.508392, lon: 15.232091 }, timeToReachNext: 16.85 },
    { position: { lat: 50.507899, lon: 15.231922 }, timeToReachNext: 14.36 },
    { position: { lat: 50.507469, lon: 15.231911 }, timeToReachNext: 17.21 },
    { position: { lat: 50.506964, lon: 15.232072 }, timeToReachNext: 17.26 },
    { position: { lat: 50.506488, lon: 15.232388 }, timeToReachNext: 14.55 },
    { position: { lat: 50.506186, lon: 15.232882 }, timeToReachNext: 1 },
    // going north
    { position: { lat: 50.506186, lon: 15.232882 }, timeToReachNext: 14.55 },
    { position: { lat: 50.506488, lon: 15.232388 }, timeToReachNext: 17.26 },
    { position: { lat: 50.506964, lon: 15.232072 }, timeToReachNext: 17.21 },
    { position: { lat: 50.507469, lon: 15.231911 }, timeToReachNext: 14.36 },
    { position: { lat: 50.507899, lon: 15.231922 }, timeToReachNext: 16.85 },
    { position: { lat: 50.508392, lon: 15.232091 }, timeToReachNext: 8.78 },
    { position: { lat: 50.508654, lon: 15.232128 }, timeToReachNext: 8.63 },
    { position: { lat: 50.508898, lon: 15.231994 }, timeToReachNext: 9.65 },
    { position: { lat: 50.509103, lon: 15.231674 }, timeToReachNext: 13.68 },
    { position: { lat: 50.509332, lon: 15.23114 }, timeToReachNext: 1 },
  ],
  {
    maxAllowedDistance: 25,
    captureDuration: 8 * 60,
  },
)

export const HREBEN_FAST = new Track(
  [
    // going south
    { position: { lat: 50.509332, lon: 15.23114 }, timeToReachNext: 11.49 },
    { position: { lat: 50.509103, lon: 15.231674 }, timeToReachNext: 8.1 },
    { position: { lat: 50.508898, lon: 15.231994 }, timeToReachNext: 7.25 },
    { position: { lat: 50.508654, lon: 15.232128 }, timeToReachNext: 7.38 },
    { position: { lat: 50.508392, lon: 15.232091 }, timeToReachNext: 14.15 },
    { position: { lat: 50.507899, lon: 15.231922 }, timeToReachNext: 12.06 },
    { position: { lat: 50.507469, lon: 15.231911 }, timeToReachNext: 14.45 },
    { position: { lat: 50.506964, lon: 15.232072 }, timeToReachNext: 14.49 },
    { position: { lat: 50.506488, lon: 15.232388 }, timeToReachNext: 12.23 },
    { position: { lat: 50.506186, lon: 15.232882 }, timeToReachNext: 1 },
    // going north
    { position: { lat: 50.506186, lon: 15.232882 }, timeToReachNext: 12.23 },
    { position: { lat: 50.506488, lon: 15.232388 }, timeToReachNext: 14.49 },
    { position: { lat: 50.506964, lon: 15.232072 }, timeToReachNext: 14.45 },
    { position: { lat: 50.507469, lon: 15.231911 }, timeToReachNext: 12.06 },
    { position: { lat: 50.507899, lon: 15.231922 }, timeToReachNext: 14.15 },
    { position: { lat: 50.508392, lon: 15.232091 }, timeToReachNext: 7.38 },
    { position: { lat: 50.508654, lon: 15.232128 }, timeToReachNext: 7.25 },
    { position: { lat: 50.508898, lon: 15.231994 }, timeToReachNext: 8.1 },
    { position: { lat: 50.509103, lon: 15.231674 }, timeToReachNext: 11.49 },
    { position: { lat: 50.509332, lon: 15.23114 }, timeToReachNext: 1 },
  ],
  {
    maxAllowedDistance: 25,
    captureDuration: 4 * 60,
  },
)

export const HREBEN_FASTEST = new Track(
  [
    // going south
    { position: { lat: 50.509332, lon: 15.23114 }, timeToReachNext: 10.67 },
    { position: { lat: 50.509103, lon: 15.231674 }, timeToReachNext: 7.52 },
    { position: { lat: 50.508898, lon: 15.231994 }, timeToReachNext: 6.73 },
    { position: { lat: 50.508654, lon: 15.232128 }, timeToReachNext: 6.85 },
    { position: { lat: 50.508392, lon: 15.232091 }, timeToReachNext: 13.14 },
    { position: { lat: 50.507899, lon: 15.231922 }, timeToReachNext: 11.2 },
    { position: { lat: 50.507469, lon: 15.231911 }, timeToReachNext: 13.42 },
    { position: { lat: 50.506964, lon: 15.232072 }, timeToReachNext: 13.46 },
    { position: { lat: 50.506488, lon: 15.232388 }, timeToReachNext: 11.35 },
    { position: { lat: 50.506186, lon: 15.232882 }, timeToReachNext: 1 },
    // going north
    { position: { lat: 50.506186, lon: 15.232882 }, timeToReachNext: 11.35 },
    { position: { lat: 50.506488, lon: 15.232388 }, timeToReachNext: 13.46 },
    { position: { lat: 50.506964, lon: 15.232072 }, timeToReachNext: 13.42 },
    { position: { lat: 50.507469, lon: 15.231911 }, timeToReachNext: 11.2 },
    { position: { lat: 50.507899, lon: 15.231922 }, timeToReachNext: 13.14 },
    { position: { lat: 50.508392, lon: 15.232091 }, timeToReachNext: 6.85 },
    { position: { lat: 50.508654, lon: 15.232128 }, timeToReachNext: 6.73 },
    { position: { lat: 50.508898, lon: 15.231994 }, timeToReachNext: 7.52 },
    { position: { lat: 50.509103, lon: 15.231674 }, timeToReachNext: 10.67 },
    { position: { lat: 50.509332, lon: 15.23114 }, timeToReachNext: 1 },
  ],
  {
    maxAllowedDistance: 25,
    captureDuration: 4 * 60,
  },
)

export const ZARDINKA_0 = new Track(
  [{ position: { lat: 50.5178347, lon: 15.2019625 }, timeToReachNext: 1 }],
  {
    maxAllowedDistance: 15,
    captureDuration: 15,
    confirmMessage: 'Máš chodidla ponořené ve vodě?',
  },
)

export const ZARDINKA_1 = new Track(
  [{ position: { lat: 50.5188644, lon: 15.2045906 }, timeToReachNext: 1 }],
  {
    maxAllowedDistance: 15,
    captureDuration: 15,
    confirmMessage: 'Máš chodidla ponořené ve vodě?',
  },
)

export const ZARDINKA_2 = new Track(
  [{ position: { lat: 50.5218611, lon: 15.2081667 }, timeToReachNext: 1 }],
  {
    maxAllowedDistance: 15,
    captureDuration: 15,
    confirmMessage: 'Máš chodidla ponořené ve vodě?',
  },
)
export const CHOBOTNICE_0 = new Track(
  [{ position: { lat: 50.5226744, lon: 15.2099819 }, timeToReachNext: 1 }],
  {
    maxAllowedDistance: 30,
    captureDuration: 32,
    confirmMessage:
      'Máš připravený půllitr bublinkového nápoje? Budeš ho muset vypít rychleji než nabiješ zařízení.',
  },
)

export const CHOBOTNICE_1 = new Track(
  [{ position: { lat: 50.5226744, lon: 15.2099819 }, timeToReachNext: 1 }],
  {
    maxAllowedDistance: 30,
    captureDuration: 1,
    confirmMessage: 'Zvládl/a jsi ho vypít během nabíjení?',
  },
)

export const CHROUSTRAB = new Track(
  [
    { position: { lat: 50.512579, lon: 15.22805 }, timeToReachNext: 30 }, // landing
    { position: { lat: 50.512556, lon: 15.228038 }, timeToReachNext: 8.69 },
    { position: { lat: 50.511253, lon: 15.229569 }, timeToReachNext: 8.34 },
    { position: { lat: 50.511014, lon: 15.227145 }, timeToReachNext: 9.51 },
    { position: { lat: 50.512792, lon: 15.227271 }, timeToReachNext: 30 }, // landing
    { position: { lat: 50.512845, lon: 15.227268 }, timeToReachNext: 10.41 },
    { position: { lat: 50.513157, lon: 15.224245 }, timeToReachNext: 7.64 },
    { position: { lat: 50.514582, lon: 15.224438 }, timeToReachNext: 10.96 },
    { position: { lat: 50.515101, lon: 15.22756 }, timeToReachNext: 10.77 },
    { position: { lat: 50.513095, lon: 15.227866 }, timeToReachNext: 30 }, // landing
    { position: { lat: 50.513057, lon: 15.227882 }, timeToReachNext: 9.13 },
    { position: { lat: 50.513979, lon: 15.230146 }, timeToReachNext: 9.04 },
    { position: { lat: 50.513187, lon: 15.232496 }, timeToReachNext: 10.31 },
    { position: { lat: 50.511413, lon: 15.231305 }, timeToReachNext: 14.08 },
    { position: { lat: 50.512324, lon: 15.227416 }, timeToReachNext: 30 }, // landing
    { position: { lat: 50.512369, lon: 15.227308 }, timeToReachNext: 9.2 },
    { position: { lat: 50.511785, lon: 15.22476 }, timeToReachNext: 10.22 },
    { position: { lat: 50.51023, lon: 15.226509 }, timeToReachNext: 9.35 },
    { position: { lat: 50.511068, lon: 15.228923 }, timeToReachNext: 8.6 },
  ],
  {
    maxAllowedDistance: 15,
    captureDuration: 22,
    isActive: activeAtSunset,
  },
)
