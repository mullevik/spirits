<script setup lang="ts">
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
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
    isCaptured: isCaptured,
  }
})
</script>

<template>
  <main>
    <DataTable :value="items" responsiveLayout="scroll">
      <Column>
        <template #body="slotProps">
          <Avatar
            :image="`${base}spirits/${slotProps.data.id}.png`"
            class="mr-2"
            :class="slotProps.data.isCaptured ? '' : 'blur-md'"
            size="large"
            shape="circle"
          />
        </template>
      </Column>
      <Column field="name" header="Name" :sortable="true" style="width: 35%"> </Column>
      <Column field="state" header="State" :sortable="true" style="width: 35%">
        <template #body="slotProps">
          <Tag value="Captured" v-if="slotProps.data.isCaptured" severity="success"></Tag>
        </template>
      </Column>
      <Column style="width: 15%">
        <template #body="slotProps">
          <RouterLink :to="{ name: 'spirit', params: { spiritId: slotProps.data.id } }">
            <Button icon="pi pi-search" type="button" class="p-button-text"></Button>
          </RouterLink>
        </template>
      </Column>
    </DataTable>
  </main>
</template>
