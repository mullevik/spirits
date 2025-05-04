<template>
  <ConfirmDialog group="captured">
    <template #container="{ acceptCallback }">
      <div class="flex flex-col gap-6 m-8">
        <i class="pi pi-check-circle text-green-500 text-center !text-6xl"></i>
        <h3 v-if="isCaptured">{{ spiritName }} <span class="font-bold">captured</span>!</h3>
        <h3 v-else>One step closer to capture {{ spiritName }}</h3>
        <SpiritCheckpoints :index="index" :max="max" :showCurrent="false" />
        <Button v-if="isCaptured" label="Return" @click="acceptCallback"></Button>
        <Button v-else label="Continue" @click="acceptCallback"></Button>
      </div>
    </template>
  </ConfirmDialog>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import SpiritCheckpoints from './SpiritCheckpoints.vue'
import Button from 'primevue/button'
import ConfirmDialog from 'primevue/confirmdialog'

const props = defineProps({
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

const isCaptured = computed(() => props.index >= props.max)
</script>
