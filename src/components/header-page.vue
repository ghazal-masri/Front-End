<template>
    <nav class="flex h-16 items-center justify-between bg-white shadow-md">
        <div
            class="ml-6 text-xl font-bold text-fl-primary-900 hover:text-fl-primary-300"
            @click="$emit('textClicked')"
        >
            {{ title }}
        </div>
        <div class="flex items-center justify-between">
            <div>
                <img
                    src="https://www.maptunerx.com/wp-content/uploads/2020/08/info-300x300.png"
                    alt="info"
                    class="mr-4 w-10 hover:shadow-md"
                />
            </div>
            <div class="mr-10 flex items-center">
                <img
                    src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
                    alt="user"
                    class="w-10 hover:shadow-md"
                />
                <div
                    class="font-semibold text-fl-primary-900 hover:text-fl-primary-300"
                >
                    {{ tenant }}
                </div>

                <div class="relative">
                    <Icon
                        color="#3c58ff"
                        icon="ep:arrow-down-bold"
                        class="ml-2 w-4 hover:w-5"
                        @click="toggleDropdown"
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
</script>
