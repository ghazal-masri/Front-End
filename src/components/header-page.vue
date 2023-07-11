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
                <div>
                    <img
                        src="https://icon-library.com/images/down-arrow-icon-png/down-arrow-icon-png-13.jpg"
                        alt="down arrow"
                        class="ml-2 w-4 hover:w-5"
                    />
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
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
</script>
