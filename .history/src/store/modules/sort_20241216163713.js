import { defineStore } from "pinia";
import { getSortClass } from "@/service";

const useSort = defineStore("sort", {
    state: () => ({
        sortClassData: []
    }),
    actions: {
        async fetchAllSortClassData() {
            const res = await getSortClass()
            this.sortClass = res.data
        }
    }
})
export default useSort