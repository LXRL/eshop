<template>
    <div class="home">
        <van-search v-model="search" placeholder="请输入搜索关键词" @search="onSearch" />
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
const HomeStore = useHome()
HomeStore.fetchAllHomeImgData();
HomeStore.fetchAllHomeWeeklyData()

const search = ref('')
const onSearch = async () => {
    try {
        const response = await getSortP({ name: search.value })
        console.log(response)
    } catch (error) {
        console.log('Search error', error)
    }
}
</script>

<style lang="less" scoped></style>