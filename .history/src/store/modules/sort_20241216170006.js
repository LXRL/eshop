import { defineStore } from "pinia";
import { getSortClass } from "@/service";
import { getSortShop } from "@/service";
const useSort = defineStore("sort", {
    state: () => ({
        sortClassData: [],
        sortShop:[]
    }),
    actions: {
        async fetchAllSortClassData() {
            const res = await getSortClass()
            this.sortClassData = res.data
        },
        async fetchAllSortShopData(){
            const res=await getSortShop()
            this.sortShop
        }
    }
})
export default useSort