<template>
    <nav class="flex h-16 items-center justify-between bg-white shadow-md">
        <div
            class="ml-6 text-xl font-bold text-fl-primary-900 hover:text-fl-primary-300"
            @click="textClicked"
        >
            {{ title }}
        </div>
        <div class="flex items-center justify-between">
            <div>
                <Icon
                    icon="carbon:information-square-filled"
                    class="mr-2 text-4xl text-fl-secondary-700 hover:shadow-md"
                />
            </div>
            <button @click="toggleDropdown">
                <div class="mr-10 flex items-center">
                    <Icon
                        icon="mingcute:user-4-line"
                        class="text-4xl text-fl-primary-900 hover:shadow-md"
                    />

                    <div
                        class="font-semibold text-fl-primary-900 hover:text-fl-primary-300"
                    >
                        {{ tenant }}
                    </div>

                    <div class="relative">
                        <Icon
                            icon="ep:arrow-down-bold"
                            class="ml-2 w-4 text-fl-primary-900 hover:w-5"
                        />

                        <div
                            class="absolute right-0 mt-2 w-24 bg-white py-2 shadow-lg"
                            v-show="isdropdown"
                        >
                            <div
                                class="cursor-pointer px-4 py-1 font-bold text-fl-primary-900"
                            >
                                <router-link to="/" @click="clearinfo"
                                    >Logout</router-link
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
const props = defineProps({
    tenant: {
        type: String,
        default: 'apollo',
    },
    title: {
        type: String,
        default: 'Dashboard',
    },
})

const isdropdown = ref(false)

function toggleDropdown() {
    isdropdown.value = !isdropdown.value
}
function clearinfo() {
    localStorage.clear()
}

const emit = defineEmits<{
    (e: 'onTextClicked'): void
}>()

function textClicked() {
    emit('onTextClicked')
}
</script>
