<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { SPIRITS } from '@/spirit_definition'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'
import Divider from 'primevue/divider'
import Image from 'primevue/image'
import Avatar from 'primevue/avatar'
import { displayName, type Spirit } from '@/spirit'
import { useCapturedSpirits } from '@/stores/capturedSpirits'
import SpiritCheckpoints from '@/components/SpiritCheckpoints.vue'
import RoostriderDescription from '@/components/spirits/RoostriderDescription.vue'
import EcoBunnyDescription from '@/components/spirits/EcoBunnyDescription.vue'
import DifficultyStars from '@/components/DifficultyStars.vue'
import KrysalDescription from '@/components/spirits/KrysalDescription.vue'
import PrasockaDescription from '@/components/spirits/PrasockaDescription.vue'
import KozorelDescription from '@/components/spirits/KozorelDescription.vue'
import HafangDescription from '@/components/spirits/HafangDescription.vue'
import ZankaDescription from '@/components/spirits/ZankaDescription.vue'
import MlokohoutDescription from '@/components/spirits/MlokohoutDescription.vue'
import JezevecDescription from '@/components/spirits/JezevecDescription.vue'
import VlasickaDescription from '@/components/spirits/VlasickaDescription.vue'
import HrebenDescription from '@/components/spirits/HrebenDescription.vue'
import ZardinkaDescription from '@/components/spirits/ZardinkaDescription.vue'
import ChobotniceDescription from '@/components/spirits/ChobotniceDescription.vue'
import ChroustrabDescription from '@/components/spirits/ChroustrabDescription.vue'
import VasilijDescription from '@/components/spirits/VasilijDescription.vue'
import GeneralDescription from '@/components/spirits/GeneralDescription.vue'
import KingDescription from '@/components/spirits/KingDescription.vue'
import BozenaDescription from '@/components/spirits/BozenaDescription.vue'
import ZombieDescription from '@/components/spirits/ZombieDescription.vue'

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
    case 'krysal':
      return KrysalDescription
    case 'prasocka':
      return PrasockaDescription
    case 'kozorel':
      return KozorelDescription
    case 'hafang':
      return HafangDescription
    case 'zanka':
      return ZankaDescription
    case 'mlokohout':
      return MlokohoutDescription
    case 'jezevec':
      return JezevecDescription
    case 'vlasicka':
      return VlasickaDescription
    case 'hreben':
      return HrebenDescription
    case 'zardinka':
      return ZardinkaDescription
    case 'chobotnice':
      return ChobotniceDescription
    case 'chroustrab':
      return ChroustrabDescription
    case 'vasilij':
      return VasilijDescription
    case 'general':
      return GeneralDescription
    case 'king':
      return KingDescription
    case 'bozena':
      return BozenaDescription
    case 'zombie':
      return ZombieDescription
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
        <RouterLink :to="{ name: 'spirit-list', params: { region: spirit.region } }">
          <Button size="small" icon="pi pi-arrow-left" class="mr-2" severity="secondary" />
        </RouterLink>
      </template>

      <template #center>
        <h3>{{ displayName(spirit, isCaptured) }}</h3>
      </template>

      <template #end>
        <div class="flex gap-2">
          <RouterLink :to="{ name: 'map', params: { spiritId: props.spiritId } }">
            <Button size="small" icon="pi pi-map" aria-label="Map" severity="secondary"></Button>
          </RouterLink>
          <RouterLink :to="{ name: 'capture', params: { spiritId: props.spiritId } }">
            <Button
              size="small"
              icon="pi pi-compass"
              aria-label="Track"
              :disabled="isCaptured"
            ></Button>
          </RouterLink>
        </div>
      </template>
    </Toolbar>

    <div class="flex justify-center">
      <div v-if="isCaptured" class="w-md m-3">
        <Image
          :src="`${base}spirits/${spirit.id}.png`"
          :alt="spirit.name"
          class="rounded"
          width="100%"
        />
      </div>
      <div v-else class="m-10">
        <Avatar
          :image="`${base}avatars/${spirit.id}.png`"
          class="mr-2 blur-md"
          size="large"
          shape="circle"
        />
      </div>
    </div>

    <div class="flex justify-center">
      <Card class="w-lg">
        <template #title>
          <h3>Popis</h3>
        </template>

        <template #content>
          <component :is="getDescriptionComponent()" :isCaptured="isCaptured"></component>

          <Divider />
          <div class="flex flex-col gap-3">
            <div class="flex flex-row items-baseline">
              <span class="mr-2">Obtížnost:</span>
              <DifficultyStars :difficulty="spirit.difficulty" />
            </div>
            <div class="flex flex-row items-baseline" v-if="spirit.tracks.length > 1">
              <span class="mr-2">Stopy:</span>

              <SpiritCheckpoints
                :index="currentIndex"
                :max="spirit.tracks.length"
                :showCurrent="false"
              />
            </div>

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
                  <Button icon="pi pi-compass" label="Stopovat"></Button>
                </RouterLink>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </main>
</template>
