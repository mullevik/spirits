<template>
  <div v-if="isCaptured">
    <p>
      Prasočka se ostatním duchům šumavských hor vyhýbá obloukem. Není vůbec zvědavá na jejich
      plánované sportování a profily na Stravě.
    </p>
    <br />

    <p>
      Stravu jako takovou si však sama nenechá ujít na každém otevřeném občerstvení. Ze všeho nejvíc
      miluje sladké zákusky a mléko s kávovou příchutí.
    </p>
  </div>
  <div v-else>
    <p>
      V hlubokých lesích Šumavských hor žije duch, který rozhodně není obyčejný. Nejvíc na světě
      miluje svačinky – rohlíčky, sušenky i knedlíčky (<Badge value="2" severity="secondary" />). A
      když už se objeví na vrcholku hory, nikdy si neodpustí šálek voňavé kávy (<Badge
        value="1"
        severity="secondary"
      />, <Badge value="3" severity="secondary" />).
    </p>
    <br />

    <p>
      Aktivní životní styl tohoto ducha zjevně odpuzuje. O jeho zjevení vyprávějí pouze pohodlní
      pražáčci.
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
