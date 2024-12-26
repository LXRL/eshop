import { defineStore } from "pinia";
import { getSortClass } from "@/service";

const useSort = defineStore("sort", {
    state: () => ({
        sortClass: []
    }),
    actions:{
        async fetchAllSortClassData(){
            
        }
    }
})