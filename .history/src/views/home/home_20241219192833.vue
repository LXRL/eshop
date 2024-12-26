<template>
    <div class="home">
        <van-search v-model="searchValue" placeholder="请输入搜索关键词" @search="onSearch" />
        <homeBanner></homeBanner>
        <homeGrid></homeGrid>
        <homeInfo></homeInfo>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import useHome from '@/store/modules/home';
import homeBanner from './homeBanner.vue';
import homeGrid from './homeGrid.vue';
import homeInfo from './homeInfo.vue';
import { getSortP } from '@/service';

import { useRoute } from 'vue-router';
const HomeStore = useHome()
HomeStore.fetchAllHomeImgData();
HomeStore.fetchAllHomeWeeklyData()

const searchValue = ref('')
const onSearch = async () => {
   
}
</script>

<style lang="less" scoped></style>