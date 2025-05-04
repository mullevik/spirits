<template>
  <div class="flex flex-col gap-2">
    <div class="grid grid-cols-3 items-center">
      <span class="justify-self-start">
        <i class="pi pi-bolt"></i> Charge
        <!-- <span v-if="isCharging"><i class="pi pi-bolt"></i></span> -->
        <!-- <span v-else-if="isDischarging">▼</span> -->
      </span>
      <span class="justify-self-center">{{ `${charge.toFixed(1)}` }} %</span>
      <span class="justify-self-end"
        ><Button
          icon="pi pi-question"
          size="small"
          rounded
          severity="secondary"
          @click="helpVisible = true"
      /></span>
    </div>
    <ProgressBar
      :value="charge"
      :showValue="false"
      :class="`${isDischarging ? 'warn' : ''}`"
      max="100"
    >
    </ProgressBar>
  </div>
  <Dialog v-model:visible="helpVisible" modal header="Charge" :style="{ width: '25rem' }">
    <p>When the signal strength is above 50 %, the device starts charging.</p>
    <p>The device must be fully charged to capture a spirit.</p>
    <p>When the device is fully charged, it automatically captures the spirit.</p>
  </Dialog>
</template>

<script lang="ts" setup>
import { defineProps, toRefs, watch, ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

const props = defineProps({
  charge: {
    type: Number,
    default: 0,
  },
})
const { charge } = toRefs(props)
const isCharging = ref(false)
const isDischarging = ref(false)
const helpVisible = ref(false)

watch(charge, (newVal, oldVal) => {
  isCharging.value = newVal > oldVal && newVal < 100
  isDischarging.value = newVal < oldVal && newVal > 0
})
</script>

<style>
div.warn div.p-progressbar-value {
  background: var(--p-red-500);
}

progress.discharge::-webkit-progress-value {
  background-color: rgb(240, 96, 72);
}
</style>
