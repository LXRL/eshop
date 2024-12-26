import { getHomeImg } from "@/service/index";
import { getHomeWeekly } from "@/service/index";
import HomeWeekly from "@/views/home/homeWeekly.vue";
import { defineStore } from "pinia";

const useHome = defineStore("home", {
    state: () => ({
        homeImg: [],
        homeWeekly:[]
    }),
    actions: {
        async fetchAllHomeImgData() {
            const res = await getHomeImg()
            this.homeImg = res.data
        }
        async fetchAllHome
    }
})

export default useHome