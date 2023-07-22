<template>
    <div class="flex min-h-screen bg-fl-secondary-100">
        <div class="flex">
            <MenuSide v-if="showMenu" @closeMenu="showMenu = false" />
        </div>
        <div class="w-screen">
            <headerPage
                tenant="apollo"
                title="Dashboard"
                @click="textClicked"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import headerPage from './header-page.vue'
import MenuSide from './menu-side.vue'
const showMenu = ref(true)

function textClicked() {
    showMenu.value = true
}
</script>
