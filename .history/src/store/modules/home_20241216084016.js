import { getHomeImg } from "@/service/index";
import { getHomeWeekly } from "@/service/index";
import { getHomePopularity } from "@/service/index";
import HomePopularity from "@/views/home/homePopularity.vue";
import { defineStore } from "pinia";

const useHome = defineStore("home", {
    state: () => ({
        homeImg: [],
        homeWeekly: [],
        HomePopularity: []
    }),
    actions: {
        async fetchAllHomeImgData() {
            const res = await getHomeImg()
            this.homeImg = res.data
        },
        async fetchAllHomeWeeklyData() {
            const res = await getHomeWeekly()
            this.homeWeekly = res.data
        },
        async fetchAllHomePopularityData() {
            const res = await getHomePopularity()
            tho
        }
    }
})

export default useHome