<template>
  <div v-if="isCaptured">
    <p>todo: desc</p>
    <br />
    <p></p>
  </div>
  <div v-else>
    <p></p>
    <br />

    <p></p>
    <br />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  isCaptured: Boolean,
})
</script>
