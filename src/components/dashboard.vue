<template>
    <div class="min-h-screen w-screen bg-fl-secondary-100">
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

                <div class="flex-grow">
                    <tableview :tableData="tableData" />
                </div>
            </div>
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

import tableview from './table-view.vue'

type dataType = {
    value: string

    type: string | Date | number | GLfloat | boolean
}

export type table = {
    labels: string[]

    data: dataType[][]

    sticky_column: boolean
}

const tableData: table = {
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
    sticky_column: true,
}
</script>
