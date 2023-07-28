<template>
    <div class="h-full w-full p-10">
        <div class="relative max-h-96 overflow-auto rounded-lg shadow">
            <table class="w-full border text-base">
                <thead>
                    <tr>
                        <th
                            v-for="(label, labelIndex) in tableData.labels"
                            :key="label"
                            class="sticky top-0 z-20 bg-white p-3 text-left tracking-wide text-fl-primary-900"
                        >
                            <div class="flex items-center">
                                <div v-if="!showHide[labelIndex]" class="flex">
                                    <div>
                                        {{ label }}
                                    </div>

                                    <button class="pl-4">
                                        <Icon icon="ci:arrow-up-lg" />
                                    </button>
                                    <button>
                                        <Icon icon="ci:arrow-down-lg" />
                                    </button>
                                </div>
                                <button
                                    class="pl-4"
                                    @click="toggleColumns(labelIndex)"
                                >
                                    <Icon icon="basil:eye-outline" />
                                </button>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <data-view
                        :table-data="tableData.data"
                        @on-cell-clicked="cellClicked"
                        :sticky-column="stickyColumn"
                        :show-hide="showHide"
                    ></data-view>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { tableType } from './dashboard.vue'
import dataView from './data-view.vue'
import { Icon } from '@iconify/vue'

interface PropsType {
    tableData: tableType
    stickyColumn?: boolean
}
export type showHideType = { [key: number]: boolean }

const props = defineProps<PropsType>()
const showHide = ref<showHideType>([])

function cellClicked(col: number, row: number) {
    console.log(col)
    console.log(row)
}
function toggleColumns(index: number) {
    showHide.value[index] = !showHide.value[index]
}
</script>
