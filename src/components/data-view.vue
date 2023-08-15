<template>
    <tr
        v-for="(row, rowIndex) in cellsToView"
        :key="rowIndex"
        :class="{
            'bg-fl-secondary-700': rowIndex % 2 === 0,
            'bg-white': rowIndex % 2 !== 0,
        }"
        class="text-fl-primary-900"
    >
        <td
            v-for="(item, colIndex) in row"
            :class="{
                'sticky left-0': item.type === 'date' && stickyColumn,
                'bg-fl-secondary-700': rowIndex % 2 === 0,
                'bg-white': rowIndex % 2 !== 0,
            }"
            :key="colIndex"
            class="z-10 p-3"
            @click="cellClicked(colIndex, rowIndex)"
        >
            <div class="flex items-center">
                <input
                    type="checkbox"
                    class="mr-3 h-10 w-4"
                    v-if="colIndex === 0"
                />
                <span v-if="!showHide[colIndex]"> {{ item.value }}</span>
            </div>
        </td>
    </tr>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import { showHideType } from './table-view.vue'
import { dataType } from '../Api/DataTableAPI/DataTableAPI.Types'
const emit = defineEmits<{
    (e: 'onCellClicked', col: number, row: number): void
}>()

interface PropsType {
    tableData: dataType[][]
    stickyColumn?: boolean
    showHide: showHideType
    startRow: number
    endRow: number
}

const props = defineProps<PropsType>()
let cellsToView = ref<dataType[][]>([])
let startRow = ref<number>(props.startRow)
let endRow = ref<number>(props.endRow)
function cellClicked(col: number, row: number) {
    emit('onCellClicked', col, row)
}

watchEffect(() => {
    startRow.value = props.startRow
    endRow.value = props.endRow
    init()
})

function init() {
    cellsToView.value = props.tableData
    cellsToView.value = cellsToView.value.slice(startRow.value, endRow.value)
}
onMounted(init)
</script>
