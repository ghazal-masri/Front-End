<template>
    <div class="mt-3 flex w-max items-center justify-between">
        <button  @click="prevClicked()" :disabled="fIndex===0">
            <Icon
                icon="solar:skip-previous-bold-duotone"
                class="h-7 w-7 text-fl-primary-900 transition duration-500 hover:scale-90 hover:text-fl-primary-300"
                :class="{ 'text-fl-primary-300 hover:scale-100': fIndex===0 }"
            />
        </button>

        <div class="mx-4 text-lg font-bold">{{ fIndex }}/{{ lIndex }}</div>
        <button  @click="nextClicked()" :disabled="fIndex === lIndex">
            <Icon
                icon="solar:skip-next-bold-duotone"
                class="h-7 w-7 text-fl-primary-900 transition duration-500 hover:scale-90 hover:text-fl-primary-300"
                :class="{ 'text-fl-primary-300 hover:scale-100': fIndex === lIndex }"
            />
        </button>
    </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onMounted, ref, watch } from 'vue'
const emit = defineEmits<{
    (e: 'onNextClicked'): void
    (e: 'onPrevClicked'): void
}>()
function nextClicked() {
    emit('onNextClicked')
}
function prevClicked() {
    emit('onPrevClicked')
}
interface PropsType {
    firstIndex: number
    lastIndex: number
}

const props = defineProps<PropsType>()

let fIndex = ref<number>(0)
let lIndex = ref<number>(0)

watch(
    () => [props.lastIndex, props.firstIndex],
    () => {
        lIndex.value = props.lastIndex
        fIndex.value = props.firstIndex
    }
)

function init() {
    fIndex.value = props.firstIndex
    lIndex.value = props.lastIndex
}
onMounted(init)
</script>
