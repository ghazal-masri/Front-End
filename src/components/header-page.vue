<template>
    <nav class="flex justify-between items-center bg-white shadow-md h-16">
        <div
            class="ml-6 text-fl-primary-900 hover:text-fl-primary-300 font-bold text-xl"
            @click="$emit('textClicked')"
        >
            {{ title }}
        </div>
        <div class="flex justify-between items-center">
            <div>
                <img
                    src="https://www.maptunerx.com/wp-content/uploads/2020/08/info-300x300.png"
                    alt="info"
                    class="w-10 hover:shadow-md mr-4"
                />
            </div>
            <div class="flex items-center mr-10">
                <img
                    src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
                    alt="user"
                    class="w-10 hover:shadow-md"
                />
                <div
                    class="text-fl-primary-900 font-semibold hover:text-fl-primary-300"
                >
                    {{ tenant }}
                </div>
                <div>
                    <img
                        src="https://icon-library.com/images/down-arrow-icon-png/down-arrow-icon-png-13.jpg"
                        alt="down arrow"
                        class="w-4 ml-2 hover:w-5"
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
