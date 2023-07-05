import { createRouter, createWebHistory } from 'vue-router'
import pageLoginVue from '../components/page-login.vue'
import emptypageVue from '../components/empty-page.vue'
const routes = [
    {
        path: '/',
        name: 'pageLogin',
        component: pageLoginVue,
    },
    {
        path: '/empty-page',
        name: 'emptypage',
        component: emptypageVue,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
