import { getHomeImg } from "@/service";
import { defineStore } from "pinia";

const useHome=defineStore("home",{
    state:()=>({
        homeImg:{},
    }),
    actions:{
        async fetchAllHomeImgData(){
            const res=await getHomeImg()
            this.
        }
    }
})