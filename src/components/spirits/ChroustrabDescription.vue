<template>
  <div v-if="isCaptured">
    <p>Chroustřáb je bájný dravec hnízdící na věži Baba.</p>
    <br />
    <p>
      Jeho charakteristický vzhled místní vysvětlují různě. Někdo tvrdí, že šlo původně o dravce,
      který ulovil příliš mnoho brouků. Jiní zase mluví o vyvinutějším stádiu chrousta který se
      evolučně přizpůsobil svým predátorům.
    </p>
  </div>
  <div v-else>
    <p>
      Na loukách pod troskami lze <strong>pouze při západu slunce</strong> zahlídnout ojedinělý
      přízrak.
    </p>
    <br />
    <p>
      Místní vyprávějí o tajemném dravci, který tam loví hmyz a drobné hlodavce. Svědci popisují že
      přízrak se vznáší vysoko v oblacích kde se pohybuje vysokou rychlostí. Jakmile však spatří
      kořist, snese se k zemi kde v krátkých intervalech loví.
    </p>
    <br />
    <p>Spatřit tento přízrak lze tedy pouze <strong>dokud je na zemi</strong>.</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  isCaptured: Boolean,
})
</script>
