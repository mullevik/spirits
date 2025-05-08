<template>
  <div v-if="isCaptured">
    <p>
      Kozorel je duch s neuvěřitelnými schopnostmi. Dokáže hravě zdolat i ty nejprudších svahy.
      Udržet s ním krok v kopcích je téměř nemožné!
    </p>
    <br />

    <p>
      Živí se dravci, kteří si myslí, že vládnou obloze, a rád jim ukazuje, kdo je tu doopravdy
      pánem.
    </p>
    <br />

    <p>
      Nejvíc ho rozčilují lidské drony – tyhle hučící stroje ho dohánějí k vzteku, protože si o ně
      vždycky jen vyláme zuby.
    </p>
  </div>
  <div v-else>
    <p>
      O tmoto duchovi se toho moc neví. Nikdo přesně netuší, odkud přišel ani proč tu je. Jedno je
      ale jisté: ze všeho nejvíc miluje hory a strmé svahy. Někdy, když se dobře podíváš, můžeš
      zahlédnout jeho tajemné stopy na úpatích svahů (<Badge severity="secondary" value="1" />). Na
      tato místa se určitě dříve nebo později vrátí - stačí na něj počkat (<Badge
        severity="secondary"
        value="2"
      />).
    </p>
    <br />
    <p>
      Říká se, že na vrcholcích kopců duch roztáhne svá ohromná křídla a vyrazí na lov vysoko do
      oblak. Létá tak rychle, že bys ho sotva postřehl – nikdo mu při lovu neunikne! Jediná šance,
      jak ducha spatřit je <strong>dokud je stále na zemi</strong>.
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
