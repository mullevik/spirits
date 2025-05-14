<script setup lang="ts">
import { defineProps } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import DifficultyStars from '@/components/DifficultyStars.vue'
import { SPIRITS } from '@/spirit_definition'
import { displayName } from '@/spirit'
import { useCapturedSpirits } from '@/stores/capturedSpirits'
import type { Spirit } from '@/spirit'

const props = defineProps({
  region: {
    type: String,
    required: true,
  },
})
const capturedSpiritsStore = useCapturedSpirits()
const base = import.meta.env.BASE_URL

const items = Object.values(
  [...Object.values(SPIRITS)].filter((s) => s.region === props.region),
).map((spirit: Spirit) => {
  const isCaptured = capturedSpiritsStore.isCaptured(spirit.id)
  return {
    id: spirit.id,
    name: spirit.name,
    kind: spirit.kind,
    displayName: displayName(spirit, isCaptured),
    difficulty: spirit.difficulty,
    isCaptured: isCaptured,
  }
})
</script>

<template>
  <main>
    <DataTable :value="items" responsiveLayout="scroll">
      <Column field="displayName" header="Název" :sortable="true">
        <template #body="slotProps">
          <RouterLink :to="{ name: 'spirit', params: { spiritId: slotProps.data.id } }">
            <div class="flex items-center gap-3">
              <Avatar
                :image="`${base}avatars/${slotProps.data.id}.png`"
                class="mr-2"
                :class="slotProps.data.isCaptured ? '' : 'blur-md'"
                size="large"
                shape="circle"
              />
              <div v-if="slotProps.data.isCaptured" class="flex flex-col gap-1">
                <span>{{ slotProps.data.name }}</span>
                <span class="text-xs">{{ slotProps.data.kind }}</span>
              </div>
              <span v-else>{{ slotProps.data.kind }}</span>
            </div>
          </RouterLink>
        </template>
      </Column>
      <Column field="difficulty" header="Obtížnost" :sortable="true">
        <template #body="slotProps">
          <RouterLink :to="{ name: 'spirit', params: { spiritId: slotProps.data.id } }">
            <DifficultyStars :difficulty="slotProps.data.difficulty"></DifficultyStars>
          </RouterLink>
        </template>
      </Column>
    </DataTable>
  </main>
</template>
