<template>
  <div v-if="isCaptured">
    <p>
      Lesní víla jménem Zaňka je štíhlá a neuvěřitelně hbitá bytost, která se pohybuje s lehkostí a
      rychlostí, jež fascinují každého, kdo ji spatří. Mezi kameny a stromy se pohybuje jako vítr,
      jenž se proplétá mezi větvemi a obratně se vyhýbá všem překážkám.
    </p>
    <br />
    <p>
      Zaňka má velmi zvláštní způsob stravování – její oblíbené jídlo jsou mechové porosty, které si
      olizuje z kamenů, a také pije smůlu, která pomalu vytéká ze starých stromů. I když je známá
      svou tichou a nenápadnou povahou, ráda se baví tím, že vyčerpává ty, kdo ji pronásledují.
    </p>
  </div>
  <div v-else>
    <p>
      V lesích kolem Javorníku se už po generace šíří tajemná legenda o místní lesní víle. Říká se,
      že se zjeví těm, kteří sejdou z cesty a zabloudí mezi posvátné kameny, jež jsou ukryté hluboko
      v lese. Ti, kdo ztratí směr a nechají se vést tichým šepotem větru, mohou spatři vílu, jež prý
      ochraňuje les a jeho tajemství.
    </p>
    <br />

    <p>
      Někteří vyprávějí, že ji viděli tančit mezi stromy, jiní tvrdí, že slyšeli její hlas, jak jim
      šeptá dávné příběhy o lesní moudrosti. Pokud se člověk dostane dostatečně blízko, může pocítit
      zvláštní, kouzelnou atmosféru, jakoby les ožil a přijal ho mezi své.
    </p>
    <br />

    <Message severity="warn"
      >Dejte si velký pozor při stopování této víly. Dbejte na svoje zdraví a dávejte pozor, kam
      šlapete.</Message
    >
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Message from 'primevue/message'
defineProps({
  isCaptured: Boolean,
})
</script>
