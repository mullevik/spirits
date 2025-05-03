<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { SPIRITS } from '@/spirit_definition'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'
import Divider from 'primevue/divider'
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

const capturedSpirits = useCapturedSpirits()
const isCaptured = ref(capturedSpirits.isCaptured(spirit.id))

const resetSpirit = () => {
  capturedSpirits.resetSpirit(spirit.id)
  isCaptured.value = capturedSpirits.isCaptured(spirit.id)
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
        <RouterLink :to="{ name: 'capture', params: { spiritId: props.spiritId } }">
          <Button icon="pi pi-compass" :disabled="isCaptured"></Button>
        </RouterLink>
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

    <Divider />

    <div v-if="isCaptured">
      <Button icon="pi pi-trash" label="Reset" severity="danger" @click="resetSpirit"></Button>
    </div>
    <div v-else>
      <RouterLink :to="{ name: 'capture', params: { spiritId: props.spiritId } }">
        <Button icon="pi pi-compass" label="Capture"></Button>
      </RouterLink>
    </div>

    <div class="card flex flex-col items-center gap-4">
      <div class="flex flex-wrap gap-4 justify-center">
        <Button icon="pi pi-home" aria-label="Save" />
        <Button label="Profile" icon="pi pi-user" />
        <Button label="Save" icon="pi pi-check" iconPos="right" />
      </div>
      <div class="flex flex-wrap gap-4 justify-center">
        <Button label="Search" icon="pi pi-search" iconPos="top" />
        <Button label="Update" icon="pi pi-refresh" iconPos="bottom" />
      </div>
    </div>
  </main>
</template>
