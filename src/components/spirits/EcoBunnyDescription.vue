<template>
  <div v-if="isCaptured">
    <p>Eco bunny!</p>
  </div>
  <div v-else>
    <p>Not much is known about the spirit of Kavci Hory.</p>
    <p>Some say it spends time near trash cans.</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  isCaptured: Boolean,
})
</script>
