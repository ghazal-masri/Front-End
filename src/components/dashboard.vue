<template>
    <div class="relative min-h-screen w-screen bg-fl-secondary-100 md:flex">
        <div
            class="flex justify-between  bg-fl-primary-900 text-white md:hidden"
        >
            <div class="m-auto pl-14 block p-4 ">
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
            '-translate-x-full': showMenu===false,
            
        }"
            class="absolute inset-y-0 left-0 flex transform transition duration-500 md:relative md:translate-x-0 z-30"
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

            <div class="m-auto">
                <table-view
                    :table-data="tableData"
                    :sticky-column="true"
                ></table-view>
            </div>
            <div class="m-auto">
                <Map> </Map>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import headerPage from './header-page.vue'
import MenuSide from './menu-side.vue'
import tableView from './table-view.vue'
import Map from './map.vue'


const showMenu = ref(true)
function textClicked() {
    showMenu.value = true
}
function toggleMobMenu(){
    showMenu.value=!showMenu.value
}
export type dataType = {
    value: string

    type: string | Date | number
}

export type tableType = {
    labels: string[]

    data: dataType[][]
}

const tableData: tableType = {
    labels: ['Time', 'Label', 'Value'],
    data: [
        [
            { value: '23 oct 2022 - 8:45pm', type: 'date' },
            { value: 'Z1 Demand', type: 'string' },
            { value: '7.31m³/hr', type: 'glfloat' },
        ],
        [
            { value: '23 oct 2022 - 8:45pm', type: 'date' },
            { value: 'Z1 Demand', type: 'string' },
            { value: '7.31m³/hr', type: 'glfloat' },
        ],
        [
            { value: '23 oct 2022 - 8:45pm', type: 'date' },
            { value: 'Z1 Demand', type: 'string' },
            { value: '7.31m³/hr', type: 'glfloat' },
        ],
        [
            { value: '23 oct 2022 - 8:45pm', type: 'date' },
            { value: 'Z1 Demand', type: 'string' },
            { value: '7.31m³/hr', type: 'glfloat' },
        ],
        [
            { value: '23 oct 2022 - 8:45pm', type: 'date' },
            {
                value: 'Z1 Demand',
                type: 'string',
            },
            { value: '7.31m³/hr', type: 'glfloat' },
        ],
        [
            { value: '23 oct 2022 - 8:45pm', type: 'date' },
            { value: 'Z1 Demand', type: 'string' },
            { value: '7.31m³/hr', type: 'glfloat' },
        ],
        [
            { value: '23 oct 2022 - 8:45pm', type: 'date' },
            { value: 'Z1 Demand', type: 'string' },
            { value: '7.31m³/hr', type: 'glfloat' },
        ],
        [
            { value: '23 oct 2022 - 8:45pm', type: 'date' },
            { value: 'Z1 Demand', type: 'string' },
            { value: '7.31m³/hr', type: 'glfloat' },
        ],
        [
            { value: '23 oct 2022 - 8:45pm', type: 'date' },
            { value: 'Z1 Demand', type: 'string' },
            { value: '7.31m³/hr', type: 'glfloat' },
        ],
        [
            { value: '23 oct 2022 - 8:45pm', type: 'date' },
            { value: 'Z1 Demand', type: 'string' },
            { value: '7.31m³/hr', type: 'glfloat' },
        ],
    ],
}
</script>
