<template>
  <div v-if="isCaptured">
    <p>Otřesný zážitek! Ještě že se vám podařilo utéct.</p>
    <br />

    <p>Monstrum muselo utéct přímo z věznice a vůbec nevypadalo zdravě.</p>
    <br />
    <p>Nedotlko se vás? Pro jistotu byste měli všichni vypít protijed.</p>
  </div>
  <div v-else>
    <p>
      Hrozné věci se povídají o kunratické věznici. Prý tam dělají všelijaké experimenty na lidech.
    </p>
    <br />
    <p>
      Snažte se vystopovat kunratické monstrum aby se vám podařilo získat důkazní materiál pro
      místní policii.
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  isCaptured: Boolean,
})
</script>
