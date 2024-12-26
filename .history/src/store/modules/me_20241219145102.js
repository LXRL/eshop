import { defineStore } from "pinia";

const useMe = defineStore('me', {
    state: () => ({
        meReceive: []
    }),
    actions: {
        // 更新 meReceive 的方法
        updateMeReceive(selectedItems) {
            this.meReceive = selectedItems;
            console.log(this.meReceive)
        }
    }
})

export default useMe