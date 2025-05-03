<template>
  <div class="container">
    <p>
      <i class="pi pi-bolt"></i> Charge: {{ `${charge.toFixed(1)}` }} %
      <!-- <span v-if="isCharging"><i class="pi pi-bolt"></i></span> -->
      <!-- <span v-else-if="isDischarging">▼</span> -->
    </p>
    <ProgressBar
      :value="charge"
      :showValue="false"
      :class="`${isDischarging ? 'warn' : ''}`"
      max="100"
    >
    </ProgressBar>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, toRefs, watch, ref } from 'vue'
import ProgressBar from 'primevue/progressbar'

const props = defineProps({
  charge: {
    type: Number,
    default: 0,
  },
})
const { charge } = toRefs(props)
const isCharging = ref(false)
const isDischarging = ref(false)

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
