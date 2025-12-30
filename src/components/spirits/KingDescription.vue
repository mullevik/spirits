<template>
  <div v-if="isCaptured">
    <p>Obstáli jste před králem této stěny!</p>
    <p>Za odměnu vás král zve do své krčmy na něco teplého.</p>
  </div>
  <div v-else>
    <p>Legenda praví o duchovi střežící rozhlednu Proseč.</p>
    <p>
      Pro spatření ducha musíte prokázat, že zvládnete zdolat i ty nejtěžší překážky a že vás nic
      nezastaví.
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  isCaptured: Boolean,
})
</script>
