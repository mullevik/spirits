<template>
  <div v-if="isCaptured">
    <p>
      Hafang je zvláštní a úžasné stvoření – napůl chrt, napůl mustang – a hlavně rozený závodník!
      Má dlouhé nohy, svalnaté tělo a ocas, který při běhu vypadá jako duha. Hafang je bleskurychlý,
      umí vystřelit jako šíp a jeho sprint je tak rychlý, že za sebou nechává jen vítr a prach.
    </p>
    <p>
      Nejenže vydrží běžet opravdu dlouho bez únavy, ale je také neuvěřitelně hbitý – v zatáčkách se
      sklápí nízko k zemi a umí nádherně klouzat po trávě i písku. Největší radost má, když může
      pořádně „zadriftovat“ – zatočit tak ostře, že pod ním podkluzuje země a všichni jen koukají s
      otevřenou pusou. Hafang je prostě mistr rychlosti i obratnosti!
    </p>
  </div>
  <div v-else>
    <p>
      Říká se, že tajemný duch závodních tratí se zjevuje jen těm nejvytrvalejším. Nejprve jej lze
      matně zpatřit už při nižších rychlostech (<Badge severity="secondary" value="1" />), ale
      teprve když dokážeš udržet <strong>jeho tempo</strong> (<Badge
        severity="secondary"
        value="2"
      />), stane se skutečně přítomným.
    </p>
    <br />

    <p>
      Abys ducha spatřil i ty, budeš ho muset vyzvat na skutčný závod (<Badge
        severity="secondary"
        value="3"
      />). Jedno tvé vítězství mohla být samozřejmě jen náhoda. Duch se zjeví pouze těm, kteři
      dokáží svůj výkon zopakovat (<Badge severity="secondary" value="4" />,
      <Badge severity="secondary" value="5" />).
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
