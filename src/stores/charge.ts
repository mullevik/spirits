import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const MAX_CHARGE = 100
export const MIN_CHARGE = 0

export const useCharge = defineStore('charge', () => {
  const charge: Ref<number> = ref(0)

  function addCharge(chargeRate: number) {
    charge.value = Math.min(MAX_CHARGE, charge.value + chargeRate)
  }

  function decreaseCharge(chargeRate: number) {
    charge.value = Math.max(MIN_CHARGE, charge.value - 2 * chargeRate)
  }

  function resetCharge() {
    charge.value = 0
  }

  return { charge, addCharge, decreaseCharge, resetCharge }
})
