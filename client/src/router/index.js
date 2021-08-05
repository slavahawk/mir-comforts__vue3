import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../pages/Home.vue')
    },
    {
        path: '/categories',
        name: 'Сategories',
        component: () => import(/* webpackChunkName: "Home" */ '../pages/Сategories.vue')
    },
    {
        path: '/categories/:category',
        name: 'Сategory',
        component: () => import(/* webpackChunkName: "Home" */ '../pages/Сategory.vue')
    },
    {
        path: '/basket',
        name: 'Basket',
        component: () => import(/* webpackChunkName: "Home" */ '../pages/Basket.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior () {
        window.scrollTo(0, 0)
    }
})



export default router
