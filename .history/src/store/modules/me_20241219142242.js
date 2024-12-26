import { defineStore } from "pinia";
const useMe = defineStore('me', {
    state: () => ({
        meReceive: []
    })
})