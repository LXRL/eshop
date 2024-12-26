import { defineStore } from "pinia";

const useMe = defineStore('me', {
    state: () => ({
        meReceive: []
    }),
    actions: {
        setMeReceive
    }
})

export default useMe