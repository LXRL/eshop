<template>
    <div class="footer">
        <van-tabbar v-model="active">
            <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
            <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
            <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
            <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0);

</script>

<style lang="less" scoped></style>