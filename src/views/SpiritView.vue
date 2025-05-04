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
import SpiritCheckpoints from '@/components/SpiritCheckpoints.vue'
import RoostriderDescription from '@/components/spirits/RoostriderDescription.vue'
import EcoBunnyDescription from '@/components/spirits/EcoBunnyDescription.vue'

const props = defineProps({
  spiritId: {
    type: String,
    required: true,
  },
})

const spirit: Spirit = SPIRITS[props.spiritId]

const capturedSpirits = useCapturedSpirits()
const isCaptured = ref(capturedSpirits.isCaptured(spirit.id))
const currentIndex = ref(capturedSpirits.getCaptureIndex(spirit.id))

const resetSpirit = () => {
  capturedSpirits.resetSpirit(spirit.id)
  isCaptured.value = capturedSpirits.isCaptured(spirit.id)
  currentIndex.value = capturedSpirits.getCaptureIndex(spirit.id)
}

const getDescriptionComponent = () => {
  switch (spirit.id) {
    case 'roostrider':
      return RoostriderDescription
    case 'ecobunny':
      return EcoBunnyDescription
    default:
      throw new Error(`Unknown spirit id: ${spirit.id}`)
  }
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
        <h3>{{ isCaptured ? spirit.name : `Unknwon ${spirit.kind}` }}</h3>
      </template>

      <template #end>
        <RouterLink :to="{ name: 'capture', params: { spiritId: props.spiritId } }">
          <Button icon="pi pi-compass" label="Track" :disabled="isCaptured"></Button>
        </RouterLink>
      </template>
    </Toolbar>

    <div class="flex justify-center">
      <div class="w-md m-3">
        <Image
          :src="`${base}spirits/${spirit.id}.png`"
          :alt="spirit.name"
          class="rounded"
          :class="isCaptured ? '' : 'blur-lg'"
          width="100%"
        />
      </div>
    </div>

    <div class="flex justify-center">
      <Card class="w-lg">
        <template #title>
          <h3>About</h3>
        </template>

        <template #content>
          <component :is="getDescriptionComponent()" :isCaptured="isCaptured"></component>

          <Divider />
          <div class="flex flex-col gap-3">
            <SpiritCheckpoints
              :index="currentIndex"
              :max="spirit.tracks.length"
              :showCurrent="false"
            />

            <div class="flex justify-center">
              <div v-if="isCaptured">
                <Button
                  icon="pi pi-trash"
                  label="Reset"
                  severity="danger"
                  @click="resetSpirit"
                ></Button>
              </div>
              <div v-else>
                <RouterLink :to="{ name: 'capture', params: { spiritId: props.spiritId } }">
                  <Button icon="pi pi-compass" label="Track"></Button>
                </RouterLink>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </main>
</template>
