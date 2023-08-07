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

            <div>
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
import { ref } from 'vue'
import headerPage from './header-page.vue'
import MenuSide from './menu-side.vue'
import tableView from './table-view.vue'
import simpleMap from './simple-map.vue'
import Chart from './chart.vue'

const showMenu = ref(true)
function textClicked() {
    showMenu.value = true
}
function toggleMobMenu() {
    showMenu.value = !showMenu.value
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
            { value: '2022-10-23T20:45:52.078Z', type: 'date' },

            { value: 'Z1 Demand', type: 'string' },
            { value: '7.31m³/hr', type: 'string' },
        ],
        [
            { value: '2022-10-12T20:45:52.078Z', type: 'date' },

            { value: 'Z1 Demand', type: 'string' },
            { value: '10.31m³/hr', type: 'string' },
        ],
        [
            { value: '2022-10-01T20:45:52.078Z', type: 'date' },

            { value: 'Z1 Demand', type: 'string' },
            { value: '5.31m³/hr', type: 'string' },
        ],
        [
            { value: '2022-10-03T20:45:52.078Z', type: 'date' },

            { value: 'Z1 Demand', type: 'string' },
            { value: '4.31m³/hr', type: 'string' },
        ],
        [
            { value: '2022-10-22T20:45:52.078Z', type: 'date' },

            {
                value: 'Z1 Demand',
                type: 'string',
            },
            { value: '14.31m³/hr', type: 'string' },
        ],
        [
            { value: '2022-10-11T20:45:52.078Z', type: 'date' },

            { value: 'Z1 Demand', type: 'string' },
            { value: '2.31m³/hr', type: 'string' },
        ],
        [
            { value: '2022-10-18T20:45:52.078Z', type: 'date' },

            { value: 'Z1 Demand', type: 'string' },
            { value: '1.31m³/hr', type: 'string' },
        ],
        [
            { value: '2022-10-09T20:45:52.078Z', type: 'date' },

            { value: 'Z1 Demand', type: 'string' },
            { value: '30.31m³/hr', type: 'string' },
        ],
        [
            { value: '2022-10-10T20:45:52.078Z', type: 'date' },

            { value: 'Z1 Demand', type: 'string' },
            { value: '43.31m³/hr', type: 'string' },
        ],
        [
            { value: '2022-10-29T20:45:52.078Z', type: 'date' },

            { value: 'Z1 Demand', type: 'string' },
            { value: '27.31m³/hr', type: 'string' },
        ],
    ],
}
</script>
