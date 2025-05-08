<script setup lang="ts">
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Avatar from 'primevue/avatar'
import DifficultyStars from '@/components/DifficultyStars.vue'
import { SPIRITS } from '@/spirit_definition'
import { useCapturedSpirits } from '@/stores/capturedSpirits'

const spirits = ref([...Object.values(SPIRITS)])

const capturedSpiritsStore = useCapturedSpirits()
const base = import.meta.env.BASE_URL

const items = Object.values(spirits.value).map((spirit) => {
  const isCaptured = capturedSpiritsStore.isCaptured(spirit.id)
  return {
    id: spirit.id,
    name: isCaptured ? spirit.name : `Unknown ${spirit.kind}`,
    state: isCaptured ? 'Captured' : 'Available',
    difficulty: spirit.difficulty,
    isCaptured: isCaptured,
  }
})
</script>

<template>
  <main>
    <DataTable :value="items" responsiveLayout="scroll">
      <Column field="name" header="Name" :sortable="true">
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
              <span>{{ slotProps.data.name }}</span>
            </div>
          </RouterLink>
        </template>
      </Column>
      <Column field="difficulty" header="Difficulty" :sortable="true">
        <template #body="slotProps">
          <RouterLink :to="{ name: 'spirit', params: { spiritId: slotProps.data.id } }">
            <DifficultyStars :difficulty="slotProps.data.difficulty"></DifficultyStars>
          </RouterLink>
        </template>
      </Column>
    </DataTable>
  </main>
</template>
