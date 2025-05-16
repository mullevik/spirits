<template>
  <div v-if="isCaptured">
    <p>
      Žardinka je opak obojživelníka. Nedokáže žít ani na suchu, ani ve vodě. K životu potřebuje
      obojí.
    </p>
    <br />
    <p>
      Z tohoto důvodu nesnáší suchozemské tvory ani ryby. Žardinka se zjevuje pouze bytostem, které
      jsou se jsou ochotny vžít do jejího každodenního utrpení.
    </p>
  </div>
  <div v-else>
    <p>
      Jordánka je magický potok se kterým se pojí spousta mýtů a bají. Nejčastěji se vypráví o duši
      pramene který vtéká do potoka.
    </p>
    <br />

    <p>Tuto duši pramene prý ale spatří pouze ten, kdo se <strong>nebojí trochu smočit</strong>.</p>
    <br />
    <p>
      Místní obyvatelé se shodují na mýtu o duši pramene. Každý ale mluví o trochu jiném prameny.
      Pro potvrzení mýtu bude nejspíš potřeba navštívit všechny zmíněné prameny (<Badge
        severity="secondary"
        value="1"
      />, <Badge severity="secondary" value="2" />, <Badge severity="secondary" value="3" />).
    </p>
  </div>
</template>

<script setup lang="ts">
import Badge from 'primevue/badge'

import { defineProps } from 'vue'
defineProps({
  isCaptured: Boolean,
})
</script>
