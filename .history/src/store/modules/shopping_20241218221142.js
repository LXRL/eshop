import { defineStore } from "pinia";
import { getShoppingData } from "@/service";

const useShopping = defineStore('shopping', {
    state: () => ({
        shoppingData: []
    }),
    actions: {
        async fetchAllShoppingData() {
            const res = await getShoppingData()
            this.shoppingData = res.data
            console.log(res)
        }
    }
})
export default useShopping