<template>
  <div class="flex flex-col gap-2">
    <div class="flex">
      <span class="w-1/2 justify-self-start"><i class="pi pi-wifi"></i> Signál</span>
      <span class="w-1/2 justify-self-end text-right">{{
        formatApproximateDistance(distance)
      }}</span>
    </div>
    <ProgressBar
      :value="signalStrength"
      max="100"
      :showValue="false"
      :class="signalStrength >= REQUIRED_SIGNAL_STRENGTH ? 'enough' : 'not-enough'"
    >
    </ProgressBar>
  </div>
  <div class="measure-wrapper">
    <div class="measure" :style="`width: ${REQUIRED_SIGNAL_STRENGTH}%`"></div>
  </div>

  <Dialog v-model:visible="helpVisible" modal header="Síla signálu" :style="{ width: '25rem' }">
    <p>Ukazuje jak blízko se nachází sledovaná bytost.</p>
    <br />

    <p>
      Čím blíže je zařízení ke sledované bytosti, tím vyšší je síla signálu. Kvůli převodu
      vzdálenosti mezi světem duchů a světem lidí se nejedná o lineární funkci.
    </p>
    <br />

    <p>
      Sledovaná bytost je v bezprostřední blízkosti pouze pokud je síla signálu
      <strong>vyšší než 50 %</strong>.
    </p>
  </Dialog>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import { REQUIRED_SIGNAL_STRENGTH } from '../track'
import ProgressBar from 'primevue/progressbar'
import Dialog from 'primevue/dialog'
import { type Meters } from '../track'

const helpVisible = ref(false) // todo: move dialog to tutorial

const { signalStrength = 0, distance = null } = defineProps<{
  signalStrength: number
  distance: number | null
}>()

const landmarks = [50, 100, 250, 500, 1000, 2000, 5000, 10000]

const formatApproximateDistance = (d: Meters | null) => {
  if (!d) {
    return '∞'
  }
  const approxDist = approximateDistance(d)
  const units = approxDist >= 1000 ? 'km' : 'm'
  if (approxDist === d || d < landmarks[0]) {
    return `~ ${limitDistance(approxDist)} ${units}`
  }
  return `> ${limitDistance(approxDist)} ${units}`
}

const limitDistance = (d: Meters) => (d >= 1000 ? Math.round(d / 1000) : Math.round(d))

const approximateDistance = (d: Meters) => {
  if (d < landmarks[0]) {
    return d
  } else {
    for (let i = landmarks.length - 1; i >= 0; i--) {
      if (d > landmarks[i]) {
        return landmarks[i]
      }
    }
    return landmarks[landmarks.length - 1]
  }
}
</script>

<style>
.measure-wrapper {
  position: relative;
}

.measure {
  height: 20px;
  border-right: 2px rgb(82, 82, 82) solid;
  position: absolute;
  top: -20px;
}
div.enough div.p-progressbar-value {
  background: var(--p-green-500);
}
</style>
