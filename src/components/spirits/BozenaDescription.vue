<template>
  <div v-if="isCaptured">
    <p>Boženka je plachá víla která nesnese pohled cizích lidí.</p>
    <p>
      Jako trest za okukování donutí ty z vás, kdo měli při jejím lovení otevřené oči po celou dobu,
      vypít panáka tekutiny, která může způsobit, že o svůj zrak klidně přijdete.
    </p>
  </div>
  <div v-else>
    <p>
      V Rýnovicích se vyprávejí báchorky o nesmělé víle, která už nechtěně vylekala nejednoho
      důchodce.
    </p>

    <p>
      Zajímavé je, že o ní mluví pouze lidé s velmi špatným zrakem. Povídá se, že se víla zjeví jen
      těm, před kterými se nemusí stydět.
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  isCaptured: Boolean,
})
</script>
