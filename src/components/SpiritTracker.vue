<template>
  <Panel>
    <p>{{ spirit.name }}</p>

    <Divider />

    <SignalStrengthBar :signalStrength="signalStrength" />
    <Divider />

    <Compass :brearing="bearing" :rotation="rotation" />

    <Divider />

    <ChargeBar :charge="charge" />
  </Panel>
</template>

<script lang="ts" setup>
import Panel from 'primevue/panel'
import SignalStrengthBar from './SignalStrengthBar.vue'
import Compass from './Compass.vue'
import ChargeBar from './ChargeBar.vue'
import { ref, type Ref, onMounted, onBeforeUnmount } from 'vue'
import { headingDistanceTo, type LatLon } from 'geolocation-utils'
import { setupOrientation, setupLocation } from '@/sensors'
import { getSignalStrength } from '@/track'
import type { Spirit } from '@/spirit'
import { SPIRITS } from '@/spirit_definition'

let _timer: NodeJS.Timeout | null = null

const UPDATE_INTERVAL = 1000
const REQUIRED_SIGNAL_STRENGTH = 50

const props = defineProps({
  spiritId: {
    type: String,
    required: true,
  },
})

const spirit: Spirit = SPIRITS[props.spiritId]

const signalStrength = ref(0)
const charge = ref(0)
const bearing: Ref<number | null> = ref(null)
const rotation: Ref<number> = ref(0)
const lastPosition: Ref<LatLon | null> = ref(null)

const increaseCharge = () => {
  charge.value += 1 // todo: implement logic to increase charge
}

const decreaseCharge = () => {
  charge.value -= 1 // todo: implement logic to decrease charge
}

const onGameTick = () => {
  if (signalStrength.value >= REQUIRED_SIGNAL_STRENGTH) {
    increaseCharge()
  } else {
    decreaseCharge()
  }

  if (lastPosition.value) {
    const goal = spirit.track.targetAt(new Date())
    const headingDistance = headingDistanceTo(lastPosition.value, goal)
    signalStrength.value = getSignalStrength(headingDistance.distance)
    bearing.value = headingDistance.heading
  } else {
    bearing.value = null
    signalStrength.value = 0
  }
}

onMounted(() => {
  _timer = setInterval(onGameTick, UPDATE_INTERVAL)
  setupOrientation(
    (event: DeviceOrientationEvent) => {
      const alpha: number = event.alpha || 0
      // cast to any because DeviceOrientationEvent has .webkitCompassHeading only on iOS
      /* eslint-disable  @typescript-eslint/no-explicit-any */
      const webkitHeading: number | null = (event as any).webkitCompassHeading
      const rot = -(webkitHeading || Math.abs(alpha - 360))
      rotation.value = rot
    },
    () => {
      console.error('Failed to setup orientation')
    },
  ) // Initialize the spirit tracker
  setupLocation(
    (e: GeolocationPosition) => {
      lastPosition.value = {
        lat: e.coords.latitude,
        lon: e.coords.longitude,
      }
    },
    (e: GeolocationPositionError) => {
      console.error('Failed to get location', e)
      // todo: handle error
    },
    () => {
      console.error('Failed to setup location')
    },
  )
})

onBeforeUnmount(() => {
  if (_timer) {
    clearInterval(_timer)
  }
})
</script>
