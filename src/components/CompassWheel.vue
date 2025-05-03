<template>
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
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  bearing: {
    type: [Number, null],
    default: null,
  },
  rotation: {
    type: Number,
    default: 0,
  },
})
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
