<template>
    <div class="classRight">
        <h4></h4>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    title:{
        type:String,
        default:()
    },
    data: {
        type: Array,
        default: () => []
    }
})
</script>

<style lang="less" scoped></style>