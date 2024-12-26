import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import("../views/home/home.vue")
        },
        {
            path: '/homeWeekly',
            component: () => import('../views/home/homeWeekly.vue'),
            meta: {
                hideTaBar: false
            }
        },
        {
            path: '/homePopularity',
            component: () => import('../views/home/homePopularity.vue'),
            
        },
        {
            path: '/sort',
            component: () => import("../views/sort/sort.vue")
        },
        {
            path: '/shoppingDetail/:id',
            component: () => import("../views/sort/shoppingDetail.vue")
        },
        {
            path: '/message',
            component: () => import("../views/message/message.vue")
        },
        {
            path: '/shopping',
            component: () => import("../views/shopping/shopping.vue")
        },
        {
            path: '/me',
            component: () => import("../views/me/me.vue")
        },
    ]
})
export default router