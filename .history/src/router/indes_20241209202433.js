import { createRouter,createWebHashHistory } from "vue-router";
const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:()=>import("../r")
        }
    ]
})
export default router