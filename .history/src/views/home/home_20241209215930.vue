<template>
    <div class="home">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
        <homeBanner></homeBanner>
        <homeGrid></homeGrid>
        
    </div>
</template>

<script setup>
import { ref } from 'vue'
import homeBanner from './homeBanner.vue';
import homeGrid from './homeGrid.vue';
import homeInfo from './homeInfo.vue';

</script>

<style lang="less" scoped></style>