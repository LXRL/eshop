<template>
    <div class="banner">
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in images" :key="image">
                <img :src="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="less" scoped></style>