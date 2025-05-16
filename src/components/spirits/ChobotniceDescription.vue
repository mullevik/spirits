<template>
  <div v-if="isCaptured">
    <p>Je to slon, nebo snad medvědice? Ne, je to Chobotnice!</p>
    <br />
    <p>
      Chobotnice se zabydlela v nedaleké hospodské věži. Jakmile je dole u vody zábava, Chobotnice
      se vždy ráda ukáže a to samozřejmě i bez pozvání.
    </p>
  </div>
  <div v-else>
    <p>
      U rybníka Vidlák panují zvěsti o fascinujícím přeludu. Místní štamgasti vyprávějí o zjevení,
      které spatří každý kdo se na místním obřerstvení <strong>pořádně napije</strong>.
    </p>
    <br />
    <p>Prý stačí vypít dostatečné množství bublinkové tekutiny a naladit se do správné nálady.</p>
    <br />
    <p>
      Místní dlouho spojovali tento přelud s pohou opilostí. Později ale zjistili, že se bytost
      objevuje i při konzumaci nealkoholických nápojů.
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  isCaptured: Boolean,
})
</script>
