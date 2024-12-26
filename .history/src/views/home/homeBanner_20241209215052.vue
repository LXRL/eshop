<template>
    <div class="banner">
        <van-swipe :autoplay="3000" lazy-render :width="390" :height="">
            <van-swipe-item v-for="image in images" :key="image">
                <img :src="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const images = [
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
];
</script>

<style lang="less" scoped></style>