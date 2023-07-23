import { createRouter, createWebHistory } from 'vue-router'
import pageLoginVue from '../components/page-login.vue'
import dashboardVue from '../components/dashboard.vue'
import errorpageVue from '../components/error-page.vue'
import noauthVue from '../components/no-auth.vue'
import waterqualityVue from '../components/water-quality.vue'
const routes = [
    {
        path: '/',
        name: 'pageLogin',
        component: pageLoginVue,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboardVue,
        meta: {
            isAuth: true,
        },
    },
    {
        path: '/no-auth',
        name: 'noauth',
        component: noauthVue,
        meta: {
            isAuth: false,
        },
    },
    {
        path: '/:catchAll(.*)',
        name: 'errorpage',
        component: errorpageVue,
    },
    {
        path: '/water-quality',
        name: 'waterquality',
        component: waterqualityVue,
        meta: {
            isAuth: true,
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
const islogged = () => {
    const info = localStorage.getItem('data')
    if (info) return true
    return false
}
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (islogged()) {
            next()
        } else {
            next('/')
        }
    } else {
        next()
    }
})
export default router
