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
</script>

<template>
  <main>
    <DataTable :value="spirits" responsiveLayout="scroll">
      <Column>
        <template #body="slotProps">
          <Avatar
            :image="`${base}spirits/${slotProps.data.id}.png`"
            class="mr-2"
            size="large"
            shape="circle"
          />
        </template>
      </Column>
      <Column field="name" header="Name" :sortable="true" style="width: 35%"> </Column>
      <Column header="State" :sortable="true" style="width: 35%">
        <template #body="slotProps">
          <Tag
            value="Captured"
            v-if="capturedSpiritsStore.isCaptured(slotProps.data.id)"
            severity="success"
          ></Tag>
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
