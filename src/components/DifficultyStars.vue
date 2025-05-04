<template>
  <div class="flex flex-row gap-2">
    <i v-for="i in difficulty" :key="i" class="pi pi-star-fill"></i>
    <i v-for="i in inverseDifficulty" :key="i" class="pi pi-star"></i>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps({
  difficulty: {
    type: Number,
    required: true,
  },
})

const inverseDifficulty = computed(() => Math.max(0, 3 - props.difficulty))
</script>
