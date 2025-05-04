<template>
  <div class="flex flex-col">
    <div class="flex flex-row justify-center gap-2">
      <div class="w-14">
        <Avatar
          :image="`${base}spirits/${spiritId}.png`"
          class="mr-2"
          size="large"
          shape="circle"
        />
      </div>
      <div>
        <p>Tracking:</p>
        <p class="font-bold">{{ spiritName }}</p>
      </div>
    </div>
    <SpiritCheckpoints :index="index" :max="max" :showCurrent="true" />
  </div>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
import SpiritCheckpoints from './SpiritCheckpoints.vue'

const base = import.meta.env.BASE_URL
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
