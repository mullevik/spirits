<template>
  <div v-if="isCaptured">
    <p>
      Vlasička navštěvuje svět lidí každý den po půlnoci kdy se baví rozptylováním pozemšťanů svojí
      krásou.
    </p>
    <br />
    <p>
      Vlasička je pyšné a sebevědomé stvoření. Je si naprosto vědoma toho, jak moc jí to sluší.
      Svoji krásu se nebojí použít pro svůj prospěch.
    </p>
  </div>
  <div v-else>
    <p>
      Uprostřed noci se na cestě na hrad Pecka může objevit měsíční víla. Tu takto pojmenovali
      řidiči, kteří se snažili po půlnoci dostat na parkoviště. Někteří kvůli její kráse málem
      strhli svůj vůz do škarpy.
    </p>
    <br />
    <p>
      Měsíční vílu lze prý spatřit <strong>pouze po půlnoci</strong>. Ráda se prý promenáduje přímo
      na silnici k zřícenině hradu Trosky.
    </p>
    <br />

    <Message severity="warn"
      >Jste kousek od vesnice, kde spí lidé. Nedělejte prosím hluk při stopování bytosti.</Message
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
