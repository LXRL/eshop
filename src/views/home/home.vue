<template>
    <div class="home">
        <van-search v-model="searchValue" placeholder="请输入搜索关键词" @click="onSearch" />
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


import { useRouter } from 'vue-router';
const HomeStore = useHome()
HomeStore.fetchAllHomeImgData();
HomeStore.fetchAllHomeWeeklyData()

const router = useRouter()
const searchValue = ref('')
const onSearch = () => {
    router.push('/homeSearch')
}
</script>

<style lang="less" scoped></style>