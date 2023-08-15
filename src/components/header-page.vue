<template>
    <nav
        class="flex w-full flex-wrap justify-between bg-white px-6 py-1 shadow-md"
    >
        <div
            class="my-auto md:pl-6 flex text-2xl font-bold text-fl-primary-900 hover:text-fl-primary-300 transition duration-500"
        >
            <button @click="textClicked">{{ title }}</button>
        </div>
        <div class="flex items-center justify-between md:px-4 py-5">
            <div>
                <Icon
                    icon="carbon:information-square-filled"
                    class="mr-3 text-4xl text-fl-secondary-700 hover:text-fl-secondary-900 transition duration-500"
                />
            </div>
            <button @click="toggleDropdown">
                <div class="flex items-center">
                    <Icon
                        icon="mingcute:user-4-line"
                        class="rounded-full text-4xl text-fl-primary-900 hover:text-fl-primary-300 transition duration-500"
                    />

                    <div
                        class="font-semibold text-fl-primary-900 hover:text-fl-primary-300 transition duration-500"
                    >
                        {{ tenant }}
                    </div>

                    <div class="relative">
                        <Icon
                            icon="ep:arrow-down-bold"
                            :class="
                                isdropdown === true
                                    ? 'rotate-180 transition duration-700'
                                    : ' transition duration-700'
                            "
                            class="ml-2 w-4 text-fl-primary-900 hover:text-fl-primary-300 transition duration-500 hover:scale-90"
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
    tenant: String,

    title: String,
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
