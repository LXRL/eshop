<template>
    <div class="me">
        <meHeader></meHeader>
        <van-grid>
            <van-grid-item v-for="(item, index) in list" :key="value" icon="photo-o" text="文字" :to="item.path" />
        </van-grid>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import meHeader from './meHeader.vue';
const list = ref([
    {
        path: '/homeWeekly'
    },
    {
        path: '/homePopularity'
    },
    {
        path: '/homeWeekly'
    },
    {
        path: '/homePopularity'
    },
    {
        path: '/homeWeekly'
    },
    {
        path: '/homePopularity'
    },
    {
        path: '/homeWeekly'
    },
    {
        path: '/homePopularity'
    },
])
</script>

<style lang="less" scoped>
.me {}
</style>