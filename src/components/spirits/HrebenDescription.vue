<template>
  <div v-if="isCaptured">
    <p>Hřeben je duch bývalého hyperaktivního obyvatele Troskovic.</p>
    <br />
    <p>
      Jak už se to přehnaně aktivním lidem stává, i tohoto člověka neměl nikdo rád, neboť v něm
      ostatní viděli svoje nedokonalosti, lenosti a obecně si v jeho přítomnosti připadali
      méněcenní. Z tohoto důvodu trávil většinu času o samotě a soustředil se převážně na
      individuální sporty.
    </p>
    <br />
    <p>
      Hřeben - jakožto vzpomínka na tohoto obyvatele - bude navěky běhat sem a tam po lesích českého
      ráje, aby sloužil jako odstrašující připad těm, kteří příliš hrotí svoje úspěchy.
    </p>
  </div>
  <div v-else>
    <p>
      V lesích východně od Troskovic panuje legenda o neuvěřitelně rychlém fantomovi. Pouze fyzicky
      zdatné osoby mají naději spatřit tuto bytost.
    </p>
    <br />
    <p>
      <Badge severity="secondary" value="1" />
      Zpočátku je možné zahlédnout nepatrné přeludy tohoto stvoření již při malých rychlostech. Lze
      tak důkladně nastudovat oblíbenou trasu tohoto ducha.
    </p>
    <br />
    <p>
      <Badge severity="secondary" value="2" />
      Jakmile však fantom zvětří přítomnost člověka v jeho rajonu, nenchá si to líbit a ukáže mu,
      zač je toho loket.
    </p>

    <br />

    <p>
      <Badge severity="secondary" value="3" />
      Fantom se prý zjeví pouze těm, kteří s ním dokáží udržet krok.
    </p>
    <br />

    <p>
      <Badge severity="secondary" value="4" />
      Jednou se to mohlo podařit každému. Fantom ale otestuje i tvojí vytrvalost, takže svůj výkon
      musíš zopakovat.
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
