<template>
    <styles-component title="Table">
        <div v-if="tableData.data.length">
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
                                        class="pl-4 hover:scale-110 hover:text-fl-primary-300"
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
                            :table-data="dataToView.data"
                            :start-row="startRow"
                            :end-row="endRow"
                            @on-cell-clicked="cellClicked"
                            :sticky-column="stickyColumn"
                            :show-hide="showHide"
                        ></data-view>
                    </tbody>
                </table>
            </div>
            <div class="flex items-center justify-between">
                <div class="font-bold hover:scale-95 hover:text-fl-primary-300 transition duration-500">
                    <button @click="loadMore()">Load More</button>
                </div>
                <div>
                    <pagination-style
                        @on-next-clicked="nextClicked"
                        @on-prev-clicked="prevClicked"
                        :first-index="firstIndex"
                        :last-index="totalPages"
                    ></pagination-style>
                </div>
            </div></div
    ></styles-component>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import dataView from './data-view.vue'
import { Icon } from '@iconify/vue'
import stylesComponent from './stylesComponent.vue'
import sortButton from './sort-button/sort-button.vue'
import { EsortButtonType } from './sort-button/sort-button.type'
import { tableType } from '../Api/DataTableAPI/DataTableAPI.Types'
import paginationStyle from './pagination-style.vue'
const emit = defineEmits<{
    (e: 'loadMoreClicked'): void
}>()
interface PropsType {
    tableData: tableType
    stickyColumn?: boolean
}
export type showHideType = { [key: number]: boolean }
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

const props = defineProps<PropsType>()
function cellClicked(col: number, row: number) {}
let showHide = ref<showHideType>([])
let dataToView = ref<tableType>({} as tableType)

let totalPages = ref<number>(1)
let firstIndex = ref<number>(0)
const totalRowsPerPage = ref<number>(10)
let startRow = ref<number>(0)
let endRow = ref<number>(totalRowsPerPage.value)

function nextClicked() {
    firstIndex.value++
    startRow.value = endRow.value
    endRow.value = endRow.value + totalRowsPerPage.value
}
function prevClicked() {
    firstIndex.value--
    endRow.value = startRow.value
    startRow.value = startRow.value - totalRowsPerPage.value
}



function loadMore() {
    emit('loadMoreClicked')
}
watch(
    () => props.tableData.data.length,
    () => (totalPages.value = Math.floor(props.tableData.data.length / 10))
)

function init() {
    console.log(props.tableData.data.length)
    dataToView.value = props.tableData
    props.tableData &&
        (totalPages.value = Math.floor(props.tableData.data.length / 10))
}
onMounted(init)
</script>
