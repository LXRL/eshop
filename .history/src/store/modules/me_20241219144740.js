import { defineStore } from "pinia";

const useMe = defineStore('me', {
    state: () => ({
        meReceive: []
    }),
    actions: {
        set
    }
})

export default useMe