<template>
    <div
        class="sticky top-0 h-screen w-screen overflow-y-auto bg-fl-primary-900 scrollbar-thin scrollbar-track-white scrollbar-thumb-fl-primary-500 md:w-56 md:pt-5"
    >
        <div
            class="float-right mt-3 cursor-pointer p-1 text-2xl font-semibold text-white md:mt-0 md:text-xl"
            @click="$emit('closeMenu')"
        >
            <Icon icon="ep:close-bold" class="m-2 text-white" />
        </div>

        <div class="p-4">
            <Icon
                icon="mdi:pipe-disconnected"
                class="m-auto h-10 w-10 text-white md:h-36 md:w-36 md:translate-x-0"
            />
        </div>
        <div
            class="flex cursor-pointer flex-col p-6 text-start font-semibold text-white"
        >
            <div v-for="(item, index) in menuItems" :key="index">
                <div v-if="!item.subMenu">
                    <div
                        v-if="item.label === 'Water Quality'"
                        @click="openwaterq"
                        class="flex cursor-pointer items-center gap-x-1 rounded p-2 transition duration-700 hover:bg-white hover:text-fl-primary-900"
                    >
                        <div class="text-xl"><Icon :icon="item.icon" /></div>
                        <div>{{ item.label }}</div>
                    </div>
                    <div v-else>
                        <div
                            class="flex items-center gap-x-1 rounded p-2 transition duration-700 hover:bg-white hover:text-fl-primary-900"
                        >
                            <div class="text-xl">
                                <Icon :icon="item.icon" />
                            </div>
                            <div>{{ item.label }}</div>
                        </div>
                    </div>
                </div>

                <sub-menu :data="item"></sub-menu>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue'
import subMenu from './sub-menu.vue'
import { useRouter } from 'vue-router'
export type MenuItemsType = {
    label: string
    icon: string
    subMenu?: {
        label: string
    }[]
}

let menuItems = ref<MenuItemsType[]>([])

function init() {
    menuItems.value = [
        {
            label: 'Dashboard',
            icon: 'ri:dashboard-line',
        },
        {
            label: 'Water Quality',
            icon: 'mdi:water-check',
        },
        {
            label: 'Control Center',
            icon: 'ri:dashboard-line',
            subMenu: [
                {
                    label: 'Control Center1',
                },
                {
                    label: 'Control Center2',
                },
                {
                    label: 'Control Center3',
                },
            ],
        },
        {
            label: 'Epanet Demo',
            icon: 'humbleicons:map',
            subMenu: [
                {
                    label: 'Epanet Demo',
                },
                {
                    label: 'Model View',
                },
                {
                    label: 'Default View',
                },
            ],
        },
        {
            label: 'Alerts',
            icon: 'jam:alert',
        },
        {
            label: 'zones',
            icon: 'material-symbols:activity-zone',
            subMenu: [
                {
                    label: 'zone1',
                },
                {
                    label: 'zone2',
                },
                {
                    label: 'zone3',
                },
            ],
        },
        {
            label: 'Monitoring',
            icon: 'eos-icons:monitoring',
            subMenu: [
                {
                    label: 'Monitoring1',
                },
                {
                    label: 'Monitoring2',
                },
                {
                    label: 'Monitoring3',
                },
            ],
        },
        {
            label: 'Reports',
            icon: 'mdi:report-areaspline',
            subMenu: [
                {
                    label: 'Reports1',
                },
                {
                    label: 'Reports2',
                },
                {
                    label: 'Reports3',
                },
            ],
        },
        {
            label: 'Losses',
            icon: 'material-symbols:water-loss-outline',
        },
        {
            label: 'Devices',
            icon: 'pixelarticons:devices',
            subMenu: [
                {
                    label: 'Devices1',
                },
                {
                    label: 'Devices2',
                },
                {
                    label: 'Devices3',
                },
            ],
        },
        {
            label: 'Predictions',
            icon: 'fluent:predictions-24-regular',
        },
        {
            label: 'Anomalies',
            icon: 'mingcute:aiming-2-fill',
        },
        {
            label: 'On Demand',
            icon: 'ic:baseline-ondemand-video',
        },
        {
            label: 'Incidents',
            icon: 'fluent-mdl2:incident-triangle',
        },
        {
            label: 'Octopo',
            icon: 'emojione-monotone:octopus',
        },
    ]
}
const router = useRouter()

function openwaterq() {
    router.push({ name: 'waterquality' })
}

onMounted(init)
</script>
