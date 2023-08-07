<template>
    <div>
        <button class="flex pl-4 text-fl-primary-900" @click="itemClicked">
            <Icon
                icon="ci:arrow-up-lg"
                :class="{ 'opacity-50': sortType === EsortButtonType.UP }"
            />

            <Icon
                icon="ci:arrow-down-lg"
                :class="{ 'opacity-50': sortType === EsortButtonType.DOWN }"
            />
        </button>
    </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { EsortButtonType } from './sort-button.type'

const emit = defineEmits<{
    (e: 'onSortChanged', value:EsortButtonType): void
}>()

let sortType = ref(EsortButtonType.OFF)

function itemClicked() {
    (sortType.value === EsortButtonType.OFF &&
        (sortType.value = EsortButtonType.UP)) ||
        (sortType.value === EsortButtonType.UP &&
            (sortType.value = EsortButtonType.DOWN)) ||
        (sortType.value === EsortButtonType.DOWN &&
            (sortType.value = EsortButtonType.UP))
            emit('onSortChanged',sortType.value)
}


</script>
