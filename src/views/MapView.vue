<template>
  <Toolbar style="padding: 0.5rem 1rem 0.5rem 1rem">
    <template #start>
      <RouterLink :to="{ name: 'spirit', params: { spiritId: props.spiritId } }">
        <Button icon="pi pi-arrow-left" class="mr-2" severity="secondary" />
      </RouterLink>
    </template>

    <template #center>
      <h3>{{ isCaptured ? spirit.name : `Unknwon ${spirit.kind}` }}</h3>
    </template>

    <template #end> </template>
  </Toolbar>

  <div style="height: 800px">
    <l-map ref="map" v-model:zoom="zoom" :center="[center.lat, center.lon]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      ></l-tile-layer>

      <l-polygon
        :lat-lngs="polygon"
        :fill="true"
        :fillOpacity="0.5"
        fillColor="#14b8a6"
        color="#0d9488"
      />
    </l-map>
  </div>
</template>

<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import { useCapturedSpirits } from '@/stores/capturedSpirits'
import { LMap, LTileLayer, LPolygon } from '@vue-leaflet/vue-leaflet'
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import { ref } from 'vue'
import { SPIRITS } from '@/spirit_definition'
import { average } from 'geolocation-utils'
import { type LatLon } from 'geolocation-utils'

console.log('map')
const zoom = ref(14)

const props = defineProps({
  spiritId: {
    type: String,
    required: true,
  },
})
const spirit = SPIRITS[props.spiritId]

const capturedSpirits = useCapturedSpirits()
const isCaptured = ref(capturedSpirits.isCaptured(spirit.id))

const polygon = [...spirit.area.map((x) => [x.lat, x.lon])]

const center: LatLon = average(spirit.area) as LatLon
</script>
