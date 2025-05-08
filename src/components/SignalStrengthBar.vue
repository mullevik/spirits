<template>
  <div class="flex flex-col gap-2">
    <div class="grid grid-cols-3 items-center">
      <span class="justify-self-start grow"><i class="pi pi-wifi"></i> Signál</span>
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
