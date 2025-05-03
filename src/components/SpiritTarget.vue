<template>
  <div class="flex justify-center gap-2">
    <div class="w-14">
      <Avatar :image="`${base}spirits/${spiritId}.png`" class="mr-2" size="large" shape="circle" />
    </div>
    <div>
      <p>Tracking:</p>
      <RouterLink :to="{ name: 'spirit', params: { spiritId: spiritId } }">
        <p class="font-bold">{{ spiritName }}</p>
      </RouterLink>
      <div v-if="max > 1" class="flex gap-1">
        <Badge
          v-for="i in max"
          :key="i"
          :value="i"
          :severity="index >= i ? 'success' : 'secondary'"
        ></Badge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'

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
