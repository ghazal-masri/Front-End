<template>
    <div class="relative min-h-screen w-full bg-fl-secondary-100 md:flex">
        <div
            class="flex justify-between bg-fl-primary-900 text-white md:hidden"
        >
            <div class="m-auto block p-4 pl-14">
                <Icon
                    icon="mdi:pipe-disconnected"
                    class="h-10 w-10 text-white"
                />
            </div>
            <button class="p-4" @click="toggleMobMenu">
                <Icon
                    icon="heroicons-solid:menu-alt-3"
                    class="h-10 w-10 text-white"
                />
            </button>
        </div>
        <div
            :class="{
                '-translate-x-full': showMenu === false,
            }"
            class="absolute inset-y-0 left-0 z-30 flex transform transition duration-500 md:relative md:translate-x-0"
        >
            <MenuSide v-if="showMenu" @closeMenu="showMenu = false" />
        </div>

        <div class="flex w-full flex-col">
            <div class="flex-1">
                <headerPage
                    tenant="apollo"
                    title="Dashboard"
                    @on-text-clicked="textClicked"
                />
            </div>

            <div v-if="tableData?.labels?.length">
                <table-view
                    :table-data="tableData"
                    :sticky-column="true"
                ></table-view>
            </div>
            <div>
                <simple-map></simple-map>
            </div>
            <div>
                <Chart></Chart>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue'
import headerPage from './header-page.vue'
import MenuSide from './menu-side.vue'
import tableView from './table-view.vue'
import simpleMap from './simple-map.vue'
import Chart from './chart.vue'
import { tableType } from '../Api/DataTableAPI/DataTableAPI.Types'
import { useDataTableStore } from '../services/data-table.service'

const showMenu = ref(true)
function textClicked() {
    showMenu.value = true
}
function toggleMobMenu() {
    showMenu.value = !showMenu.value
}

let tableData = ref<tableType>({} as tableType)

const tableDataStore = useDataTableStore()
onMounted(async () => {
    try {
        await tableDataStore.loadDataTabel()
        tableData.value = tableDataStore.dataTable
    } catch (error) {
        throw error
    }
})
</script>
