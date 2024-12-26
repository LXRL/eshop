import { defineStore } from "pinia";
import { getSortClass } from "@/service";

const useSort = defineStore("sort", {
    state: () => ({
        sortClassData: [],
        s
    }),
    actions: {
        async fetchAllSortClassData() {
            const res = await getSortClass()
            this.sortClassData = res.data
        },

    }
})
export default useSort