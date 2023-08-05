<template>
    <div>
        <div
            class="my-8 w-full rounded bg-fl-secondary-300 p-6 text-fl-primary-900 shadow"
        >
            <div class="flex justify-center text-2xl font-bold">
                {{ title }}
            </div>

            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    title: String,
})
</script>
