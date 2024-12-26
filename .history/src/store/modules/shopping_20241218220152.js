import { defineStore } from "pinia";
import { getShoppingData } from "@/service";

const useShopping = defineStore('shopping', {
    state: () => ({
        shopping: []
    }),
    actions: {
        async fetch
    }
})