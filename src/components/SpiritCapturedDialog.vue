<template>
  <ConfirmDialog></ConfirmDialog>
</template>

<script setup lang="ts">
import { useConfirm } from 'primevue/useconfirm'
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const confirm = useConfirm()

const router = useRouter()

const props = defineProps({
  spiritId: {
    type: String,
    required: true,
  },
})

const confirm1 = () => {
  confirm.require({
    message: 'Spirit captured',
    header: 'Captured!',
    icon: 'pi pi-check-circle',
    position: 'bottom',
    acceptProps: {
      label: 'Save',
    },
    accept: () => {
      router.back()
    },
  })
}
</script>
