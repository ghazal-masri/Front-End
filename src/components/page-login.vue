<template>
    <div
        class="flex h-screen w-screen bg-fl-secondary-300"
        @submit.prevent="loginp"
    >
        <div
            class="m-auto flex h-[30rem] w-[35rem] flex-col rounded-xl bg-white p-6 text-fl-primary-900"
        >
            <div class="text-2xl font-semibold">Login</div>
            <div class="my-2 text-sm">ENTER YOUR DETAILS BELOW TO CONTINUE</div>
            <div>
                <input
                    type="text"
                    v-model="id"
                    placeholder="Tenant ID"
                    class="mx-3 my-2 w-80 border-b-2 focus:border-fl-primary-900 focus:outline-none"
                />
                <br />
                <input
                    type="text"
                    v-model="username"
                    placeholder="Username"
                    class="mx-3 my-2 w-80 border-b-2 focus:border-fl-primary-900 focus:outline-none"
                />
                <div v-if="warnuser">
                    <p class="ml-5 text-red-600">
                        please fill the correct Username!
                    </p>
                </div>

                <br />
                <input
                    type="password"
                    v-model="password"
                    placeholder="Password"
                    class="mx-3 my-2 w-80 border-b-2 focus:border-fl-primary-900 focus:outline-none"
                />
                <div v-if="warnpass">
                    <p class="ml-5 text-red-600">
                        please fill the correct password!
                    </p>
                </div>

                <br />
                <button
                    @click="loginp"
                    type="button"
                    class="mx-5 my-8 rounded border border-fl-primary-900 bg-transparent px-32 py-1 font-semibold hover:bg-fl-primary-100"
                >
                    login
                </button>
            </div>

            <div class="mt-auto flex justify-between">
                <div class="mt-auto text-sm">CONTACT SUPPORT</div>
                <div>
                    <img
                        src="https://solarimpulse.com/files/companies/logo/2020-08-29-165550/logoFlowless.jpg"
                        alt="flowless"
                        class="h-16 w-14"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const id = ref('')
const username = ref('')
const password = ref('')
const warnuser = ref(false)
const warnpass = ref(false)
const router = useRouter()
function loginp() {
    if (username.value !== '' && username.value !== 'admin') {
        warnuser.value = true
    } else {
        warnuser.value = false
    }
    if (password.value !== '' && password.value !== 'admin') {
        warnpass.value = true
    } else {
        warnpass.value = false
    }
    if (username.value === 'admin' && password.value === 'admin') {
        localStorage.setItem('data', 'admin')
        router.push({ name: 'dashboard' })
    }
}
</script>
