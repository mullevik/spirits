<template>
  <Panel class="m-1 device">
    <SpiritTarget
      :spiritId="spirit.id"
      :spiritName="displayName(spirit, isCaptured)"
      :index="captureIndex"
      :max="spirit.tracks.length"
    />

    <Divider />

    <SignalStrengthBar :signalStrength="signalStrength" :distance="distance" />

    <Divider />

    <CompassWheel
      :bearing="bearing"
      :rotation="rotation"
      :message="compassMessage"
      :severity="compassSeverity"
    />
    <Divider />

    <ChargeBar :charge="charge" />
  </Panel>

  <CapturedDialog :spirit="spirit" :index="captureIndex" :max="spirit.tracks.length" />

  <Dialog v-model:visible="trackConfirmMessageVisible" :closable="false" modal>
    <p class="text-lg">{{ trackConfirmMessage }}</p>
    <br />
    <div class="flex justify-center gap-2">
      <RouterLink :to="{ name: 'spirit', params: { spiritId: spirit.id } }">
        <Button type="button" label="Ne" icon="pi pi-times" severity="secondary"></Button>
      </RouterLink>
      <Button type="button" icon="pi pi-check" label="Ano" @click="giveTrackConfirmation"></Button>
    </div>
  </Dialog>
</template>

<script lang="ts" setup>
import Panel from 'primevue/panel'
import SignalStrengthBar from './SignalStrengthBar.vue'
import CompassWheel from './CompassWheel.vue'
import SpiritTarget from './SpiritTarget.vue'
import ChargeBar from './ChargeBar.vue'
import Divider from 'primevue/divider'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

import CapturedDialog from './CapturedDialog.vue'
import { ref, computed, watch, type Ref, onMounted, onBeforeUnmount } from 'vue'
import { headingDistanceTo, type LatLon } from 'geolocation-utils'
import { setupOrientation, setupLocation } from '@/sensors'
import { useCapturedSpirits } from '@/stores/capturedSpirits'
import { getSignalStrength, MAX_CHARGE, MIN_CHARGE, type Track } from '@/track'
import { displayName, type Spirit } from '@/spirit'
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

const compassMessage = ref('Vyhledávání bytosti')
const compassSeverity = ref('info')

const spirit: Spirit = SPIRITS[props.spiritId]

const signalStrength = ref(0)
const distance: Ref<number | null> = ref(null)
const charge = ref(MIN_CHARGE)
const bearing: Ref<number | null> = ref(null)
const rotation: Ref<number> = ref(0)
const lastPosition: Ref<LatLon | null> = ref(null)
const _captureOnce = ref(false)
watch(_captureOnce, (newValue) => {
  if (newValue) {
    _captureOnce.value = false
    captureSpiritOnce()
  }
})

const getTrack = (index: number): Track | null => {
  return index < spirit.tracks.length ? spirit.tracks[index] : null
}

const getConfirmMessage = (index: number): string | null => {
  const track = getTrack(index)
  return track ? track.confirmMessage : null
}

const capturedStore = useCapturedSpirits()

const captureIndex = ref(capturedStore.getCaptureIndex(props.spiritId))
const trackConfirmedByUser = ref(false)
const trackConfirmMessageVisible = ref(false)

const giveTrackConfirmation = () => {
  trackConfirmedByUser.value = true
  trackConfirmMessageVisible.value = false
}

watch(capturedStore.spiritCaptureIndices, () => {
  captureIndex.value = capturedStore.getCaptureIndex(props.spiritId)
})
const isCaptured = ref(capturedStore.isCaptured(props.spiritId))
watch(capturedStore.spiritCaptureIndices, () => {
  isCaptured.value = capturedStore.isCaptured(props.spiritId)
})

const trackConfirmMessage = computed(() => getConfirmMessage(captureIndex.value))

const increaseCharge = () => {
  const track = getTrack(captureIndex.value)
  if (!track) return
  charge.value = Math.min(MAX_CHARGE, charge.value + track.getChargePerSecond())
  if (charge.value >= MAX_CHARGE) {
    captureSpiritOnce()
  }
}

const decreaseCharge = () => {
  const track = getTrack(captureIndex.value)
  if (!track) return
  charge.value = Math.max(MIN_CHARGE, charge.value - 2 * track.getChargePerSecond())
}

const captureSpiritOnce = () => {
  console.log('Spirit captured!')
  charge.value = MIN_CHARGE
  signalStrength.value = 0
  trackConfirmedByUser.value = false
  captureIndex.value += 1
  capturedStore.captureSpirit(props.spiritId)
  showCaptureMessage()
}

const onGameTick = () => {
  if (signalStrength.value >= REQUIRED_SIGNAL_STRENGTH) {
    if (trackConfirmedByUser.value || trackConfirmMessage.value == null) {
      increaseCharge()
    } else {
      trackConfirmMessageVisible.value = true
    }
  } else {
    decreaseCharge()
  }

  let newSignalStrength = 0
  let newDistance = null
  const track = getTrack(captureIndex.value)
  const now = new Date()

  if (!track) {
    compassMessage.value = 'Bytost se již zjevila'
    compassSeverity.value = 'info'
  } else if (!track.isActive(now)) {
    compassMessage.value = 'Bytost v tuto chvíli nevykazuje žádné známky přítomnosti'
    compassSeverity.value = 'warn'
  }

  if (track && track.isActive(now) && lastPosition.value) {
    const goal = track.targetAt(now)
    const headingDistance = headingDistanceTo(lastPosition.value, goal)
    newSignalStrength = getSignalStrength(headingDistance.distance, track.getMaxAllowedDistance())
    newDistance = headingDistance.distance
    bearing.value = headingDistance.heading
  } else {
    bearing.value = null
  }

  signalStrength.value = newSignalStrength
  distance.value = newDistance
}

const showCaptureMessage = () => {
  confirmCapture.require({
    group: 'captured',
    message: 'Spirit captured',
    header: 'Captured!',
    icon: 'pi pi-check-circle',
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
      compassMessage.value = ''
      compassSeverity.value = ''
    },
    (e: GeolocationPositionError) => {
      console.error('Failed to get location', e)
      compassMessage.value = 'Nelze získat pozici nositele'
      compassSeverity.value = 'error'
    },
    () => {
      console.error('Failed to setup location')
      compassMessage.value = 'Nepodařilo se požádat o pozici nositele'
      compassSeverity.value = 'error'
    },
  )
})

onBeforeUnmount(() => {
  if (_timer) {
    clearInterval(_timer)
  }
})
</script>

<style>
.device {
  background-image: radial-gradient(circle at left top, var(--p-surface-800), var(--p-surface-950));
}
</style>
