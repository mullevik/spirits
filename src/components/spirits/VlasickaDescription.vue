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
