import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { Spirit, SpiritId } from '@/spirit'
import { SPIRITS } from '@/spirit_definition'

export const useCapturedSpirits = defineStore(
  'capturedSpirits',
  () => {
    const spiritCaptureIndices: Ref<{ [key: SpiritId]: number }> = ref({})

    function captureSpirit(id: SpiritId) {
      const capturedIndex = getCaptureIndex(id)

      if (capturedIndex === undefined) {
        spiritCaptureIndices.value[id] = 1
      } else {
        spiritCaptureIndices.value[id] = capturedIndex + 1
      }
      spiritCaptureIndices.value = spiritCaptureIndices.value
    }

    function getCaptureIndex(id: SpiritId): number {
      return spiritCaptureIndices.value[id] || 0
    }

    function resetSpirit(id: SpiritId) {
      spiritCaptureIndices.value[id] = 0
    }

    function isCaptured(id: SpiritId): boolean {
      const spirit: Spirit | undefined = SPIRITS[id]

      const capturedIndex = getCaptureIndex(id)

      return (
        typeof spirit === 'object' && spirit !== undefined && capturedIndex >= spirit.tracks.length
      )
    }

    return { spiritCaptureIndices, captureSpirit, isCaptured, resetSpirit, getCaptureIndex }
  },
  {
    persist: true,
  },
)
