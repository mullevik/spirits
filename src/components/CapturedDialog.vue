<template>
  <ConfirmDialog group="captured">
    <template #container="{ acceptCallback }">
      <div class="flex flex-col gap-6 m-8">
        <div class="flex justify-center">
          <Avatar
            :image="`${base}avatars/${spirit.id}.png`"
            class="mr-2"
            :class="isCaptured ? '' : 'blur-md'"
            size="large"
            shape="circle"
          />
        </div>
        <h3 v-if="isCaptured">
          Je to <span class="font-bold">{{ spirit.name }}</span
          >&excl;
        </h3>
        <h3 v-else>O krok blíže k vystopování: {{ spirit.kind }}</h3>
        <SpiritCheckpoints :index="index" :max="max" :showCurrent="false" />
        <Button v-if="isCaptured" label="Hotovo" @click="acceptCallback"></Button>
        <Button v-else label="Další část" @click="acceptCallback"></Button>
      </div>
    </template>
  </ConfirmDialog>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import SpiritCheckpoints from './SpiritCheckpoints.vue'
import Button from 'primevue/button'
import ConfirmDialog from 'primevue/confirmdialog'
import { type Spirit } from '@/spirit'
import Avatar from 'primevue/avatar'

const base = import.meta.env.BASE_URL
const props = defineProps({
  spirit: {
    type: Object as () => Spirit,
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
