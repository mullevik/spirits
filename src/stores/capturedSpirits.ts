import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { SpiritId } from '@/spirit'

export const useCapturedSpirits = defineStore(
  'capturedSpirits',
  () => {
    const spiritIds: Ref<SpiritId[]> = ref([])

    function captureSpirit(id: SpiritId) {
      if (!isCaptured(id)) {
        spiritIds.value.push(id)
      }
    }

    function resetSpirit(id: SpiritId) {
      spiritIds.value = spiritIds.value.filter((spiritId) => spiritId !== id)
    }

    function isCaptured(id: SpiritId): boolean {
      return spiritIds.value.includes(id)
    }

    return { spiritIds, captureSpirit, isCaptured, resetSpirit }
  },
  {
    persist: true,
  },
)
