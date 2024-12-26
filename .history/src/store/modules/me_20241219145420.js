// Pinia store
import { defineStore } from "pinia";

const useMe = defineStore('me', {
    state: () => ({
        meReceive: []
    }),
    actions: {
        updateMeReceive(selectedItems) {
            this.meReceive = selectedItems;
            console.log("更新后的 meReceive:", this.meReceive); // 调试输出
        }
    }
});