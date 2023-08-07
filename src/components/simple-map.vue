<template>
    
    <styles-component title="Map">
        <div class="max-h-[40rem] w-full"><div id="ghazalMap" style="height: 400px"></div></div
    ></styles-component>
</template>
<script setup lang="ts">
import mapboxgl from 'mapbox-gl'
import stylesComponent from './stylesComponent.vue'
mapboxgl.accessToken =
    'pk.eyJ1IjoiZ2hhemFsNDciLCJhIjoiY2xrcHg0bXVnMGVscjNzcG5neTVwazhveCJ9.u-lGMBBE9nU9FEnPmCFT0g'

function initializeMap() {
    const map = new mapboxgl.Map({
        container: 'ghazalMap',
        style: 'mapbox://styles/ghazal47/clkzni4oh008d01p8gc6gfdbs',
        center: [74.5, 40],
        zoom: 4,
    })

    map.addControl(new mapboxgl.NavigationControl())
}

import { onMounted } from 'vue'

onMounted(() => {
    initializeMap()
})
</script>
<style scoped>
@import 'https://api.mapbox.com/mapbox-gl-js/v2.11.0/mapbox-gl.css';
</style>
