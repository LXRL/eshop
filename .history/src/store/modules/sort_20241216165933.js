import { defineStore } from "pinia";
import { getSortClass } from "@/service";

const useSort = defineStore("sort", {
    state: () => ({
        sortClassData: [],
        sortShopData:[]
    }),
    actions: {
        async fetchAllSortClassData() {
            const res = await getSortClass()
            this.sortClassData = res.data
        },
        async fetchAllSortShopData(){
            const res=await get
        }
    }
})
export default useSort