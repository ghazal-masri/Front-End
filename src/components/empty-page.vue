<template>
    <div class="bg-fl-secondary-100 min-h-screen flex">
        <div class="flex">
            <MenuSide v-if="showMenu" @closeMenu="showMenu = false" />
        </div>
        <div class="w-screen">
            <headerPage
                tenant="apollo"
                title="Dashboard"
                @textClicked="showMenu = true"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import headerPage from './header-page.vue'
import MenuSide from './menu-side.vue'
const showMenu = ref(false)
</script>
