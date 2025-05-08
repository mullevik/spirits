<script setup lang="ts">
import Panel from 'primevue/panel'
import Image from 'primevue/image'
import Button from 'primevue/button'
const base = import.meta.env.BASE_URL
</script>

<template>
  <main>
    <Panel class="text-center w-md m-auto p-3">
      <div class="flex flex-row justify-center m-5">
        <Image :src="`${base}favicon.png`" alt="Spirits" width="100" />
      </div>

      <h1 class="text-lg font-bold m-3">Staň se krotitelem duchů</h1>

      <p>Toto zařízení slouží pro stopování mýtických bytostí ze světa duchů.</p>
      <br />
      <p>
        Můžeš pomocí něho spatřit duchy, víly, přeludy i strašidla. Stačí následovat střelku kompasu
        a držet se v blízkosti sledované bytosti dostatečně dlouho.
      </p>
      <br />

      <p>
        Některé bytosti se nenechají najít snadno. Stopování
        <strong>může vyžadovat fyzickou zdatnost či kreativitu nebo trpělivost</strong>.
      </p>
      <br />

      <h2 class="text-lg font-bold m-3">Shromážděná data</h2>
      <p>
        Zařízení bude potřebovat přístup k tvojí GPS lokaci a také k orientaci tvého zařízení v
        prostoru.
      </p>
      <div class="flex flex-row justify-center m-2 gap-2">
        <i class="pi pi-map-marker" style="font-size: 2rem"></i>
        <i class="pi pi-replay" style="font-size: 2rem"></i>
      </div>
      <br />
      <p>
        Tato data se <strong>nikam neodesílají ani neukládají</strong>. Používají se pouze v daném
        okamžiku.
      </p>
      <br />
      <p>
        Jediné, co se ukládá trvale jsou informace o objevených bytostech. Tyto informace se
        ukládají pouze <strong>v rámci tvého zařízení</strong>, a proto je můžeš kdykoliv smazat.
      </p>
      <br />
      <span>
        <RouterLink :to="{ name: 'spirit-list' }"> <Button label="Souhlasím"></Button></RouterLink
      ></span>
      <br />
    </Panel>
  </main>
</template>
