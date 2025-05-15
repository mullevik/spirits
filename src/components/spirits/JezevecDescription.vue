<template>
  <div v-if="isCaptured">
    <p>todo:</p>
  </div>
  <div v-else>
    <p>todo:</p>
    <br />

    <Message severity="warn">todo: noise</Message>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Message from 'primevue/message'
defineProps({
  isCaptured: Boolean,
})
</script>
