import { getHomeImg } from "@/service/index";
import { getHomeWeekly } from "@/service/index";
import { defineStore } from "pinia";

const useHome = defineStore("home", {
    state: () => ({
        homeImg: [],
        homeWeekly: []
    }),
    actions: {
        async fetchAllHomeImgData() {
            const res = await getHomeImg()
            this.homeImg = res.data
        },
        async fetchAllHomeWeekly() {
            const res = await getHomeWeekly()
            this.homeWeekly = res.data
        }
    }
})

export default useHome