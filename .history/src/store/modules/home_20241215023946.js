import { getHomeImg } from "@/service/index";
import { defineStore } from "pinia";

const useHome = defineStore("home", {
    state: () => ({
        homeImg: [],
    }),
    actions: {
        async fetchAllHomeImgData() {
            const res = await getHomeImg()
            console.log('API 响应:', res); // 
            this.homeImg = res.data
            console.log("homeImg")
        }
    }
})
export default useHome