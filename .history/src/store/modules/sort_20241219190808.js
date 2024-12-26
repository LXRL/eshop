import { defineStore } from "pinia";
import { getSortClass } from "@/service";
import { getSortShop } from "@/service";
import { getScrollTop } from "vant/lib/utils";
const useSort = defineStore("sort", {
    state: () => ({
        sortClassData: [],
        sortShop: [],
        sortHome: []
    }),
    actions: {
        async fetchAllSortClassData() {
            const res = await getSortClass()
            this.sortClassData = res.data
        },
        async fetchAllSortShopData() {
            const res = await getSortShop()
            this.sortShop = res.data
        }
        async fetchAllSortPData()
    }
})
export default useSort