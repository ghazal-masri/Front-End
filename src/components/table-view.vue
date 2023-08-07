<template>
    <styles-component title="Table">
        <div class="mt-10">
            <div
                class="relative max-h-96 overflow-auto rounded-lg shadow scrollbar-thin scrollbar-track-white scrollbar-thumb-fl-primary-900"
            >
                <table class="w-full border text-base">
                    <thead>
                        <tr>
                            <th
                                v-for="(label, labelIndex) in dataToView.labels"
                                :key="label"
                                class="sticky top-0 z-20 bg-white p-3 text-left tracking-wide text-fl-primary-900"
                            >
                                <div class="flex items-center">
                                    <div
                                        v-if="!showHide[labelIndex]"
                                        class="flex"
                                    >
                                        <div>
                                            {{ label }}
                                        </div>

                                        <sort-button
                                            @on-sort-changed="sortChanged"
                                        ></sort-button>
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
                            v-if="dataToView?.data?.length"
                            :table-data="dataToView.data || []"
                            @on-cell-clicked="cellClicked"
                            :sticky-column="stickyColumn"
                            :show-hide="showHide"
                        ></data-view>
                    </tbody>
                </table>
            </div></div
    ></styles-component>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { tableType } from './dashboard.vue'
import dataView from './data-view.vue'
import { Icon } from '@iconify/vue'
import stylesComponent from './stylesComponent.vue'
import sortButton from './sort-button/sort-button.vue'
import { EsortButtonType } from './sort-button/sort-button.type'
interface PropsType {
    tableData: tableType
    stickyColumn?: boolean
}
export type showHideType = { [key: number]: boolean }

const props = defineProps<PropsType>()
let showHide = ref<showHideType>([])
let dataToView = ref<tableType>({} as tableType)
function cellClicked(col: number, row: number) {
    console.log(col)
    console.log(row)
}
function toggleColumns(index: number) {
    showHide.value[index] = !showHide.value[index]
}

function sortChanged(sortType: EsortButtonType) {
    sortType === EsortButtonType.UP &&
        dataToView.value.data.sort((a, b) => {
            return new Date(a[0].value) - new Date(b[0].value)
        })
    sortType === EsortButtonType.DOWN &&
        dataToView.value.data.sort((a, b) => {
            return -new Date(a[0].value) - new Date(b[0].value)
        })
}

function init() {
    dataToView.value = props.tableData
}
onMounted(init)
</script>
