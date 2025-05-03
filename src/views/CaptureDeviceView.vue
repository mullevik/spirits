<script setup lang="ts">
import { defineProps } from 'vue'

import SpiritTracker from '@/components/SpiritTracker.vue'

defineProps({
  spiritId: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <main>
    <SpiritTracker :spiritId="spiritId" />
  </main>
</template>
