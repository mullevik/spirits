<template>
  <div class="flex flex-col gap-2">
    <div class="grid grid-cols-3 items-center">
      <span class="justify-self-start"></span>
      <span class="justify-self-center">
        <Message v-if="message" :severity="severity" variant="outlined" size="small">
          <template #icon>
            <i v-if="severity === 'info'" class="pi pi-info-circle"></i>
            <i v-else-if="severity === 'error'" class="pi pi-exclamation-triangle"></i>
            <i v-else-if="severity === 'warn'" class="pi pi-exclamation-triangle"></i>
          </template>
          {{ message }}
        </Message>
      </span>
      <span class="justify-self-end"
        ><Button
          icon="pi pi-question"
          size="small"
          rounded
          severity="secondary"
          @click="helpVisible = true"
      /></span>
    </div>
    <svg width="100%" height="200" viewBox="0 0 200 200">
      <g id="compass" :transform="`translate(100, 100) rotate(${rotation})`">
        <!-- Circle stroke -->
        <circle
          id="compass-circle"
          cx="0"
          cy="0"
          r="90"
          fill-opacity="0"
          stroke="white"
          stroke-width="2"
          stroke-opacity="1"
        />
        <!-- "N" character -->
        <text id="north-text" x="0" y="-65" text-anchor="middle" font-family="Arial" font-size="24">
          N
        </text>
        <g v-if="bearing !== null" id="needle" :transform="`rotate(${bearing})`">
          <!-- Compass needle -->
          <polygon points="0,15 -10,5 0,-80 10,5" />
        </g>
        <g v-else id="needle" class="rotate-animation">
          <!-- Compass needle spinning because of unknown bearing -->
          <polygon points="0,15 -10,5 0,-80 10,5" />
        </g>
      </g>
    </svg>
  </div>

  <Dialog v-model:visible="helpVisible" modal header="Kompas" :style="{ width: '25rem' }">
    <p>Střelka kompasu ukazuje směrem ke sledované bytosti.</p>
    <br />
    <p>
      Pokud se střelka kompasu začne zmateně točit kolem své osy, může to být z následujících
      přícin:
    </p>
    <br />

    <ul>
      <li>- zařízení nemá přístup k poloze nositele,</li>
      <li>- duch nevykazuje žádné stopy a tedy nemůže být sledován.</li>
    </ul>
    <br />
    <p>
      Sever (naznačený písmenkem <i>N</i>) musí ukazovat na skutečný sever. Pokud tomu tak není,
      musí nositel otáčet zařízení manualně tak, aby <i>N</i> ukazovalo na skutečný sever. Teprve
      poté ukazuje střelka kompasu směrem ke sledované bytosti.
    </p>
  </Dialog>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import Message from 'primevue/message'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

defineProps({
  bearing: {
    type: [Number, null],
    default: null,
  },
  rotation: {
    type: Number,
    default: 0,
  },
  message: {
    type: String,
    default: '',
  },
  severity: {
    type: String,
    default: '',
  },
})
const helpVisible = ref(false)
</script>

<style>
#needle {
  transition: transform 250ms;
  fill: var(--p-primary-color);
}

.rotate-animation {
  animation: rotate 500ms linear infinite;
}

#compass-circle {
  stroke: var(--p-text-color);
}

#north-text {
  fill: var(--p-text-color);
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
