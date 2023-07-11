<template>
    <div class="bg-fl-primary-900 h-full w-56">
        <div class="relative">
            <div
                class="absolute top-2 right-2 text-white text-xl p-1 cursor-pointer font-semibold hover:text-2xl"
                @click="$emit('closeMenu')"
            >
                X
            </div>
        </div>
        <div>
            <img
                src="https://www.clker.com/cliparts/M/e/l/c/j/v/water-icon-white.svg.hi.png"
                alt="flowless"
                class="w-24 h-36 ml-12 mt-10"
            />
        </div>
        <div
            class="cursor-pointer p-6 text-white font-semibold flex flex-col text-start"
        >
            <div v-for="(item, index) in menuItems" :key="index">
                <div v-if="!item.subMenu">
                    <div
                        class="hover:bg-white rounded flex items-center gap-x-1 hover:text-fl-primary-900 p-2"
                    >
                        <div class="text-xl"><Icon :icon="item.icon" /></div>
                        <div>{{ item.label }}</div>
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
export type MenuItemsType = {
    label: String
    icon: String
    subMenu?: {
        label: String
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

onMounted(init)
</script>
