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
