<template>
    <div class="flex flex-col items-center justify-center">
        <div class="mb-8 text-2xl font-bold text-fl-primary-900">
            Sorry, Page Not Found!
        </div>
        <div
            class="rounded border border-gray-400 bg-white px-4 py-2 font-semibold text-fl-primary-900 shadow hover:bg-gray-100 mt-10"
        >
            <button @click="redirect">Main Page</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function redirect() {
    router.push({ name: 'pageLogin' })
}
</script>
