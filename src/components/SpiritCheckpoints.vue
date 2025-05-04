<template>
  <div v-if="max > 1" class="flex gap-1 justify-center">
    <Badge v-for="pos in max" :key="pos" :value="pos" :severity="getSeverity(pos, index)"></Badge>
  </div>
</template>

<script setup lang="ts">
import Badge from 'primevue/badge'

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
  showCurrent: {
    type: Boolean,
    required: true,
  },
})

const getSeverity = (position: number, capturedIndex: number): string => {
  if (capturedIndex >= position) {
    return 'success'
  } else if (capturedIndex === position - 1 && props.showCurrent) {
    return 'primary'
  }
  return 'secondary'
}
</script>
