<template>
  <div v-if="isCaptured">
    <p>Vasilij jásá. Tak přece jen to jde.</p>

    <br />
    <p>Za odměnu nabízí panáka vodky všem odvážlivcům, kteří se nebáli vstoupit na led.</p>
  </div>
  <div v-else>
    <p>Legenda vypráví o duchovi na lukášovském rybníku.</p>
    <br />
    <p>
      Kapitán ruské armády se tu snažil demonstrovat pevnost ledu jeho pěchotě při vojenském tažení
      přes Lukášov.
    </p>
    <br />

    <p>Demonstrace však nedopadla příliš přesvědčivě.</p>
    <br />

    <p>Abyste Vasilijova ducha spatřili, musíte předvést lepší výkon.</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  isCaptured: Boolean,
})
</script>
