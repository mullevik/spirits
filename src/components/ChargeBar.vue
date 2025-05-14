<template>
  <div class="flex flex-col gap-2">
    <div class="flex">
      <span class="w-1/2 justify-self-start">
        <i class="pi pi-bolt" :class="isCharging ? 'charging' : 'discharging'"></i> Náboj
      </span>
      <span class="w-1/2 justify-self-end text-right">{{ `${charge.toFixed(1)}` }} %</span>
      <span class="justify-self-end"></span>
    </div>
    <ProgressBar
      :value="charge"
      :showValue="false"
      :class="`${isDischarging ? 'warn' : ''}`"
      max="100"
    >
    </ProgressBar>
  </div>
  <Dialog v-model:visible="helpVisible" modal header="Náboj" :style="{ width: '25rem' }">
    <p>
      Zařízení se nabíjí, pokud je síla signálu vyšší než 50 %. V opačném případě se zařízení s
      postupem času vybíjí.
    </p>
    <br />
    <p>Zařízení potřebuje být plně nabito aby dokázalo odhalit sledovanou bytost.</p>
    <br />
    <p>Pokud je zařízení plně nabito tak je sledovaná bytost odhalena automaticky.</p>
  </Dialog>
</template>

<script lang="ts" setup>
import { defineProps, toRefs, watch, ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import Dialog from 'primevue/dialog'

const props = defineProps({
  charge: {
    type: Number,
    default: 0,
  },
})
const { charge } = toRefs(props)
const isCharging = ref(false)
const isDischarging = ref(false)
const helpVisible = ref(false) // todo: move dialog to tutorial

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
i.charging {
  color: var(--p-primary-500);
}
i.discharging {
  color: var(--p-text-muted-color);
}
</style>
