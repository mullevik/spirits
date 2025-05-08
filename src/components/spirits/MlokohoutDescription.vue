<template>
  <div v-if="isCaptured">
    <p>
      Mlokohout navštěvuje svět lidí každé ráno za úsvitu. Nejraději má vlké a studené prostředí, ze
      kterého dokáže načerpat energii na dlouhý pracovní den, který má před sebout.
    </p>
    <br />
    <p>
      Ve světě duchů má Mlokohout na starost jejich buzení a proto musí vstávat dříve než všichni
      ostatní.
    </p>
    <br />
    <p>
      Na studených ranních procházkách ho vždy zahřeje u srdce alespoň to, že pro sebe dnes ráno
      udelal něco dobrého.
    </p>
  </div>
  <div v-else>
    <p>
      Každé ráno lze v blízkosti potůčků mezi Milíkovem a Javorníkem spatřit ojedinělý nadpřirozený
      úkaz.
    </p>
    <br />

    <p>
      Místní vyprávějí o jistém duchovi který přichází s prními paprsky slunce. Duch se patrně ukáže
      pouze těm, kterým nevadí si ráno přivstat. Jakmile se totiž slunce vyzdvyhne příliš vysoko,
      nezbyde po něm ani stopa.
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  isCaptured: Boolean,
})
</script>
