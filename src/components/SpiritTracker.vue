<template>
  <Panel>
    <SpiritTarget
      :spiritId="spirit.id"
      :spiritName="spirit.name"
      :index="captureIndex"
      :max="spirit.tracks.length"
    />

    <Divider />

    <SignalStrengthBar :signalStrength="signalStrength" />

    <Divider />

    <CompassWheel :bearing="bearing" :rotation="rotation" />

    <Divider />

    <ChargeBar :charge="charge" />
  </Panel>

  <ConfirmDialog>
    <template #container="{ message, acceptCallback }">
      <p>Spirit captured</p>
      <p>{{ message.message }}</p>
      <Button label="Return" @click="acceptCallback" class="w-32"></Button>
    </template>
  </ConfirmDialog>
</template>

<script lang="ts" setup>
import Panel from 'primevue/panel'
import ConfirmDialog from 'primevue/confirmdialog'
import SignalStrengthBar from './SignalStrengthBar.vue'
import CompassWheel from './CompassWheel.vue'
import SpiritTarget from './SpiritTarget.vue'
import ChargeBar from './ChargeBar.vue'
import Divider from 'primevue/divider'
import Button from 'primevue/button'
import { ref, watch, type Ref, onMounted, onBeforeUnmount } from 'vue'
import { headingDistanceTo, type LatLon } from 'geolocation-utils'
import { setupOrientation, setupLocation } from '@/sensors'
import { useCapturedSpirits } from '@/stores/capturedSpirits'
import { getSignalStrength, MAX_CHARGE, MIN_CHARGE } from '@/track'
import type { Spirit } from '@/spirit'
import { SPIRITS } from '@/spirit_definition'

import { useConfirm } from 'primevue/useconfirm'
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

let _timer: NodeJS.Timeout | null = null

const UPDATE_INTERVAL = 1000
const REQUIRED_SIGNAL_STRENGTH = 50

const confirmCapture = useConfirm()

const router = useRouter()
const props = defineProps({
  spiritId: {
    type: String,
    required: true,
  },
})

const spirit: Spirit = SPIRITS[props.spiritId]

const signalStrength = ref(0)
const disableSignalStrengthUpdate = ref(false)
const charge = ref(MIN_CHARGE)
const bearing: Ref<number | null> = ref(null)
const rotation: Ref<number> = ref(0)
const lastPosition: Ref<LatLon | null> = ref(null)

const capturedStore = useCapturedSpirits()

const getLimitedCaptureIndex = () => {
  return Math.min(capturedStore.getCaptureIndex(props.spiritId), spirit.tracks.length - 1)
}
const captureIndex = ref(getLimitedCaptureIndex())
watch(capturedStore.spiritCaptureIndices, () => {
  captureIndex.value = getLimitedCaptureIndex()
})

const increaseCharge = () => {
  charge.value = Math.min(
    MAX_CHARGE,
    charge.value + spirit.tracks[captureIndex.value].getChargePerSecond(),
  )
  if (charge.value >= MAX_CHARGE) {
    console.log('Spirit captured!')
    capturedStore.captureSpirit(props.spiritId)
    charge.value = MIN_CHARGE
    showCaptureMessage()
  }
}

const decreaseCharge = () => {
  charge.value = Math.max(
    MIN_CHARGE,
    charge.value - 2 * spirit.tracks[captureIndex.value].getChargePerSecond(),
  )
}

const onGameTick = () => {
  if (signalStrength.value >= REQUIRED_SIGNAL_STRENGTH) {
    increaseCharge()
  } else {
    decreaseCharge()
  }

  let newSignalStrength = 0
  if (lastPosition.value) {
    const goal = spirit.tracks[captureIndex.value].targetAt(new Date())
    const headingDistance = headingDistanceTo(lastPosition.value, goal)
    newSignalStrength = getSignalStrength(
      headingDistance.distance,
      spirit.tracks[captureIndex.value].getMaxAllowedDistance(),
    )
    bearing.value = headingDistance.heading
  } else {
    bearing.value = null
  }

  if (!disableSignalStrengthUpdate.value) {
    signalStrength.value = newSignalStrength
  }
}

const showCaptureMessage = () => {
  confirmCapture.require({
    message: 'Spirit captured',
    header: 'Captured!',
    icon: 'pi pi-check-circle',
    position: 'bottom',
    accept: () => {
      if (capturedStore.isCaptured(props.spiritId)) {
        router.back()
      }
    },
  })
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
      console.log('got location', e)
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
