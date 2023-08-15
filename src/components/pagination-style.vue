<template>

<div class="flex justify-between items-center mt-3">
<button v-if="firstIndex>0" @click="prevClicked()"> <Icon icon="wpf:previous" class="text-fl-primary-900 h-10 w-10 hover:text-fl-primary-300 transition duration-500 hover:scale-90" /></button>
   
<div class="font-bold text-lg">{{firstIndex}}/{{lastIndex}}</div>
<button v-if="firstIndex!=lastIndex" @click="nextClicked()"><Icon icon="wpf:next" class="text-fl-primary-900 h-10 w-10 hover:text-fl-primary-300 transition duration-500 hover:scale-90" /></button>
</div>

</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue'
const emit = defineEmits<{
    (e: 'onNextClicked'): void,
    (e: 'onPrevClicked'): void,
}>()
function nextClicked() {
    emit('onNextClicked')
}
function prevClicked() {
    emit('onPrevClicked')
}
interface PropsType {
    firstIndex:number
    lastIndex:number
}


const props = defineProps<PropsType>()
</script>