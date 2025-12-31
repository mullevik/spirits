<template>
  <div v-if="isCaptured">
    <p>Boženka je plachá víla která nesnese pohled cizích lidí.</p>
    <br />
    <p>
      Ty z vás, co měli oči otevřené po celou dobu lovení, Boženka trestá jejím likérem. S trochou
      štěstí po něm přijdete o zrak a už ji nikdy okukovat nebudete!
    </p>
  </div>
  <div v-else>
    <p>
      V Rýnovicích se vyprávejí báchorky o nesmělé víle, která už nechtěně vylekala nejednoho
      důchodce.
    </p>
    <br />

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
