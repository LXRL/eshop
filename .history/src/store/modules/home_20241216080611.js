import { getHomeImg } from "@/service/index";
import {get}
import { defineStore } from "pinia";

const useHome = defineStore("home", {
    state: () => ({
        homeImg: [],
    }),
    actions: {
        async fetchAllHomeImgData() {
            const res = await getHomeImg()
            this.homeImg = res.data
        }
    }
})

export default useHome