<template>
  <div class="flex flex-col gap-2">
    <div class="grid grid-cols-3 items-center">
      <span class="justify-self-start grow"><i class="pi pi-wifi"></i> Signal</span>
      <span class="justify-self-center">{{ signalStrength.toFixed(1) }} %</span>
      <span class="justify-self-end"
        ><Button
          icon="pi pi-question"
          size="small"
          rounded
          severity="secondary"
          @click="helpVisible = true"
      /></span>
    </div>
    <ProgressBar :value="signalStrength" max="100" :showValue="false"> </ProgressBar>
  </div>
  <div class="measure-wrapper">
    <div class="measure" :style="`width: ${REQUIRED_SIGNAL_STRENGTH}%`"></div>
  </div>

  <Dialog v-model:visible="helpVisible" modal header="Signal Strength" :style="{ width: '25rem' }">
    <p>Detects how close you are to the spirit.</p>
    <p>
      Note that the signal strength function converts the distance from the spirit world to our
      reality. The conversion is not always linear - however you can be sure that the higher the
      value, the closer you are to the spirit.
    </p>
    <p>The signal strength must be <strong>above 50 %</strong> for the device to start charging.</p>
  </Dialog>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import { REQUIRED_SIGNAL_STRENGTH } from '../track'
import ProgressBar from 'primevue/progressbar'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const helpVisible = ref(false)
defineProps({
  signalStrength: {
    type: Number,
    default: 0,
  },
})
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
</style>
