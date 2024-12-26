<template>
    <div class="classRight">
        <h4>{{ title }}</h4>
        <div class="box">
            <template v-for="(item,index) in 3">
                <div class="info">
                    <div class="img">
                        <img src="" alt="">
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    title: {
        type: String,
        default: () => ''
    },
    data: {
        type: Array,
        default: () => []
    }
})
</script>

<style lang="less" scoped></style>