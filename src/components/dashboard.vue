<template>
    <div class="min-h-screen w-screen bg-fl-secondary-100 md:flex-row">
        <div class="flex">
            <div class="flex flex-auto">
                <MenuSide v-if="showMenu" @closeMenu="showMenu = false" />
            </div>

            <div class="flex w-full flex-col">
                <div>
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
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import headerPage from './header-page.vue'
import MenuSide from './menu-side.vue'
import tableView from './table-view.vue'
import Map from './map.vue'
const showMenu = ref(true)
function textClicked() {
    showMenu.value = true
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
