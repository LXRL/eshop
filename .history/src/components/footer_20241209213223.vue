<template>
    <div class="footer">
        <van-tabbar route>
  <van-tabbar-item replace to="/home" icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item replace to="/search" icon="search">标签</van-tabbar-item>
</van-tabbar>

    </div>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0);
const icon = {
    active: 'https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png',
    inactive:
        'https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png',
};
</script>

<style lang="less" scoped></style>