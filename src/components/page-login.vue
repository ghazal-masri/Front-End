<template>
    <div class="flex h-screen w-screen bg-fl-secondary-300">
        <div
            class="m-auto flex h-[30rem] w-[35rem] flex-col rounded-xl bg-white p-6 text-fl-primary-900"
        >
            <div class="text-2xl font-semibold">Login</div>
            <div class="my-2 text-sm">ENTER YOUR DETAILS BELOW TO CONTINUE</div>
            <div>
                <input
                    type="text"
                    placeholder="Tenant ID"
                    class="mx-3 my-2 w-80 border-b-2 focus:border-fl-primary-900 focus:outline-none"
                />
                <br />
                <input
                    type="text"
                    placeholder="Username"
                    class="mx-3 my-2 w-80 border-b-2 focus:border-fl-primary-900 focus:outline-none"
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    class="mx-3 my-2 w-80 border-b-2 focus:border-fl-primary-900 focus:outline-none"
                />
                <br />
                <button
                    type="button"
                    class="mx-5 my-8 rounded border border-fl-primary-900 bg-transparent px-32 py-1 font-semibold hover:bg-fl-primary-100"
                >
                    <router-link to="empty-page">LOG IN</router-link>
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
<script setup lang="ts"></script>
