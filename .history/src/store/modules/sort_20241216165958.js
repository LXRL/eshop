import { defineStore } from "pinia";
import { getSortClass } from "@/service";
import { getSortShop } from "@/service";
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
            const res=await getSortShop()
            this.sortShopData
        }
    }
})
export default useSort