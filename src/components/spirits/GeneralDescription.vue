<template>
  <div v-if="isCaptured">
    <p>Generál vám děkuje za poslední obléhání pevnosti.</p>
    <br />

    <p>Na oplátku by rád, kdybyste přijmuli jeho dar - láhev vína po jeho dědečkovi.</p>
  </div>
  <div v-else>
    <p>V prosečských lesích se vypráví legenda o dávné bitvě v kunratických lesích.</p>
    <br />

    <p>Dodnes tu prý straší přízrak generála zdecimovaného vojska.</p>
    <br />
    <p>Pomožte mu naposledy zaútočit na kunratickou pevnost a propustit ho tím do světa duchů.</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  isCaptured: Boolean,
})
</script>
