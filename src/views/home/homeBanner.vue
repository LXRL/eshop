<template>
    <div class="banner">
        <van-swipe :autoplay="3000" lazy-render :width="390" :height="200">
            <van-swipe-item v-for="image in images" :key="image">
                <img style="width: 100%; height: 100%;" :src="getImagePath(image)" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getImagePath } from '@/util/getImage';
const images = [
    'assets/images/banner/1.jpg',
    'assets/images/banner/2.jpg',
    'assets/images/banner/3.jpg',
    'assets/images/banner/4.jpg',
    'assets/images/banner/5.jpg',
];
</script>

<style lang="less" scoped></style>