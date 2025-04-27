<script setup lang="ts">
import { defineProps } from 'vue'
import { SPIRITS } from '@/definition'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'
import Image from 'primevue/image'
import type { Spirit } from '@/spirit'

import { useCapturedSpirits } from '@/stores/capturedSpirits'

const props = defineProps({
  spiritId: {
    type: String,
    required: true,
  },
})

const spirit: Spirit = SPIRITS[props.spiritId]

const capturedStore = useCapturedSpirits()

const captureSpirit = () => {
  capturedStore.captureSpirit(props.spiritId)
}
const base = import.meta.env.BASE_URL
</script>

<template>
  <main>
    <Toolbar style="padding: 0.5rem 1rem 0.5rem 1rem">
      <template #start>
        <RouterLink :to="{ name: 'spirit-list' }">
          <Button icon="pi pi-arrow-left" class="mr-2" severity="secondary" />
        </RouterLink>
      </template>

      <template #center>
        <h3>{{ spirit.name }}</h3>
      </template>

      <template #end>
        <Button icon="pi pi-play-circle" @click="captureSpirit" />
      </template>
    </Toolbar>
    <div class="flex justify-center flex-row">
      <div class="w-24">
        <Image
          :src="`${base}spirits/${spirit.id}.png`"
          :alt="spirit.name"
          width="250"
          class="rounded"
        />
      </div>
    </div>

    <div class="flex">
      <Card>
        <template #content>
          <p class="m-0">
            {{ spirit.description }}
          </p>
        </template>
      </Card>
    </div>
  </main>
</template>
