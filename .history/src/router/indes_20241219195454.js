import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path:'/login',
            component
        },
        {
            path: '/home',
            component: () => import("../views/home/home.vue"),
            meta: {
                hideTabBar: true
            }
        },
        {
            path: '/homeSearch',
            component: () => import("../views/home/homeSearch.vue"),
            meta: {
                hideTabBar: false
            }
        },
        {
            path: '/homeWeekly',
            component: () => import('../views/home/homeWeekly.vue'),
            meta: {
                hideTabBar: false
            }
        },
        {
            path: '/homePopularity',
            component: () => import('../views/home/homePopularity.vue'),
            meta: {
                hideTabBar: false
            }
        },
        {
            path: '/sort',
            component: () => import("../views/sort/sort.vue"),
            meta: {
                hideTabBar: true
            }

        },
        {
            path: '/shoppingDetail/:id',
            component: () => import("../views/sort/shoppingDetail.vue"),
            meta: {
                hideTabBar: false
            }
        },
        {
            path: '/message',
            component: () => import("../views/message/message.vue"),
            meta: {
                hideTabBar: true
            }
        },
        {
            path: '/shopping',
            component: () => import("../views/shopping/shopping.vue"),
            meta: {
                hideTabBar: true
            }

        },
        {
            path: '/me',
            component: () => import("../views/me/me.vue"),
            meta: {
                hideTabBar: true
            }
        },
        {
            path: '/meReceive',
            component: () => import("../views/me/meReceive.vue"),
            meta: {
                hideTabBar: false
            }
        }
    ]
})
export default router