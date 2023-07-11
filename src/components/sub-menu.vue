<template>
    <button @click="subMenuClicked" v-if="data.subMenu" class="w-full">
        <div
            class="flex justify-between items-center hover:bg-white rounded hover:text-fl-primary-900 p-2"
        >
            <div class="flex items-center gap-x-1">
                <div class="text-xl"><Icon :icon="data.icon" /></div>
                <div>{{ data.label }}</div>
            </div>
            <div><Icon icon="ep:arrow-right-bold" /></div>
        </div>
    </button>
    <div v-if="displaySubmenu">
        <hr />
        <div v-for="(sub, subIndex) in data.subMenu" :key="subIndex">
            <span v-if="sub">{{ sub.label }}</span>
        </div>
        <hr />
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { MenuItemsType } from './menu-side.vue'
let displaySubmenu = ref(false)

interface PropsType {
    data: MenuItemsType
}

function subMenuClicked() {
    displaySubmenu.value = !displaySubmenu.value
    console.log(displaySubmenu.value)
}

const prop = defineProps<PropsType>()
</script>
