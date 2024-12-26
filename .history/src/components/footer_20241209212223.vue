<template>
    <div class="footer">
        <van-tabbar v-model="active">
            <van-tabbar-item>1</van-tabbar-item>
            <van-tabbar-item>2</van-tabbar-item>
            <van-tabbar-item>3</van-tabbar-item>
            <van-tabbar-item>4</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0);
</script>

<style lang="less" scoped></style>