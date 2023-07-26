<template>
    <div class="h-screen p-10">
        <div class="relative h-96 overflow-auto rounded-lg shadow">
            <table class="w-full border text-base">
                <thead>
                    <tr>
                        <th
                            v-for="label in tableData.labels"
                            :key="label"
                            class="sticky -top-2 bg-white p-3 text-left tracking-wide text-fl-primary-900"
                        >
                            <div class="flex items-center">
                                <div>{{ label }}</div>

                                <div class="cursor-pointer pl-4">
                                    <Icon icon="ci:arrow-up-lg" />
                                </div>
                                <div class="cursor-pointer">
                                    <Icon icon="ci:arrow-down-lg" />
                                </div>
                                <div class="cursor-pointer pl-4">
                                    <Icon icon="basil:eye-outline" />
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <dataview
                        :data="tableData.data"
                        @on-cell-clicked="cellClicked"
                    />
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import dataview from './data-view.vue'
import { Icon } from '@iconify/vue'

const { tableData } = defineProps(['tableData'])

function cellClicked(col: number, row: number) {
    console.log(col)
    console.log(row)
}
</script>
