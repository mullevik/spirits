<template>
  <div v-if="isCaptured">
    <p>Roostrider!</p>
  </div>
  <div v-else>
    <p>Not much is known about the spirit of Kavci Hory.</p>
    <p>Some say it runs around in circles.</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  isCaptured: Boolean,
})
</script>
