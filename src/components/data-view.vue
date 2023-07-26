<template>
    <tr
        v-for="(row, rowIndex) in data"
        :key="rowIndex"
        :class="rowIndex % 2 === 0 ? 'bg-even' : 'bg-odd'"
        class="text-fl-primary-900"
    >
        <td
            v-for="(item, colIndex) in row"
            :key="colIndex"
            class="whitespace-nowrap p-3"
            @click="cellClicked(colIndex, rowIndex)"
        >
            {{ item.value }}
        </td>
    </tr>
</template>

<script setup lang="ts">
const { data } = defineProps(['data'])

const emit = defineEmits<{
    (e: 'onCellClicked', col: number, row: number): void
}>()

function cellClicked(col: number, row: number) {
    emit('onCellClicked', col, row)
}
</script>
<style>
.bg-even {
    background-color: #edf2f7;
}

.bg-odd {
    background-color: white;
}
</style>
