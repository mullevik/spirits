<template>
  <div class="flex flex-col">
    <div class="flex flex-row justify-center gap-2">
      <div>
        <span class="font-bold">{{ spiritName }}</span>
      </div>
    </div>
    <SpiritCheckpoints :index="index" :max="max" :showCurrent="true" />
    <br />
  </div>
</template>

<script setup lang="ts">
import SpiritCheckpoints from './SpiritCheckpoints.vue'

defineProps({
  spiritId: {
    type: String,
    required: true,
  },
  spiritName: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
})
</script>
