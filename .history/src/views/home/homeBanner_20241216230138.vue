<template>
    <div class="banner">
        <van-swipe :autoplay="3000" lazy-render :width="390" :height="200">
            <van-swipe-item v-for="image in images" :key="image">
                <img style="width: 100%; height: 100%;" :src="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const images = [
    '@/assets/images/banner/1.jpg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
];
</script>

<style lang="less" scoped></style>