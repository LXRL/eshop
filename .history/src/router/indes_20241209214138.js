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
            path: '/sort',
            component: () => import("../views/sort/sort.vue")
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
            component: () => import("../views/sort/sort.vue")
        },
    ]
})
export default router