import { defineStore } from "pinia";
import { getSortClass } from "@/service";

const useSort = defineStore("sort", {
    state: () => ({
        sortClassData: [],
        sort
    }),
    actions: {
        async fetchAllSortClassData() {
            const res = await getSortClass()
            this.sortClassData = res.data
        },

    }
})
export default useSort