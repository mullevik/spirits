<template>
  <div v-if="isCaptured">
    <p>Vasilij jásá. Tak přece jen to jde.</p>
    <p>Za odměnu nabízí panáka vodky tomu nejodvážnějšímu z vás.</p>
  </div>
  <div v-else>
    <p>Legenda vypráví o duchovi na lukášovském rybníku.</p>
    <p>
      Vasilij Smirnov - kapitán ruské armády - se snažil demonstrovat pevnost ledu jeho pěchotě při
      vojenském tažení přes Lukášov.
    </p>
    <p>Demonstrace však nedopadla příliš přesvědčivě.</p>

    <p>Abyste Vasilijova ducha spatřili, musíte předvést lepší výkon.</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  isCaptured: Boolean,
})
</script>
