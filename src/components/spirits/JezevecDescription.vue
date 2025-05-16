<template>
  <div v-if="isCaptured">
    <p>Ježevec není žádné večerní strašidlo, nýbrž kurwa fajný tvor.</p>
    <br />
    <p>
      Svět lidí navštěvuje po večerech, kdy vyhledává na dětských hřištích potravu. Živí se totiž
      plastovými hračkami a dětskými slzami.
    </p>
  </div>
  <div v-else>
    <p>
      Obyvatelé vesnice Troskovice si stěžují na podivné zvuky ozývající-se z jejich náměstíčka.
      Poslední dobou už se ani neodváží vycházet v noci ven.
    </p>
    <br />
    <p>Kdo za tím asi vězí?</p>
    <br />

    <Message severity="warn"
      >Jste přímo ve vesnici, kde spí lidé. Nedělejte prosím hluk při stopování bytosti.</Message
    >
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Message from 'primevue/message'
defineProps({
  isCaptured: Boolean,
})
</script>
