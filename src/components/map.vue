<template>
    <div id="map" class="h-auto p-10 w-auto"></div>
</template>
<script setup lang="ts">
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken =
    'pk.eyJ1IjoiZ2hhemFsNDciLCJhIjoiY2xrcHg0bXVnMGVscjNzcG5neTVwazhveCJ9.u-lGMBBE9nU9FEnPmCFT0g'

const initializeMap = () => {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [74.5, 40],
        zoom: 9,
    })

    map.addControl(new mapboxgl.NavigationControl())
}

import { onMounted } from 'vue'

onMounted(() => {
    initializeMap()
})
</script>
