<template>
  <div v-if="isCaptured">
    <p>
      Podivný tvor s huňatým kožichem a bystrýma očima. Nejraději se zdržuje tam, kde je největší
      nepořádek protože se živí neuspořádaným odpadem.
    </p>
    <p>
      Miluje místa, kde je všechno pomíchané dohromady, a největší radost mu dělají plastová víčka
      od lahví, která si v klidu uždibuje, když má dlouhou chvíli.
    </p>
  </div>
  <div v-else>
    <p>
      Vesnicí <strong>Lhota nad Rohanovem</strong> se šíří pověsti o tajemném duchovi. V noci se
      podle místních z nejrůznějšího harampádí (<Badge value="1" severity="secondary" />) či od
      popelnic (<Badge value="2" severity="secondary" /> <Badge value="3" severity="secondary" />)
      ozývá podivný hluk. Dokonce i hlídací psi raději zůstávají ve svých obydlích.
    </p>
    <p>
      Sotva ale vyjde slunce, všechno záhadně utichne a po duchovi není ani stopy. Kdo za tím asi
      vězí?
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Badge from 'primevue/badge'
defineProps({
  isCaptured: Boolean,
})
</script>
