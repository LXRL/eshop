<template>
    <div class="footer">
        <van-tabbar v-model="active">
            <template #icon="props">
                    <img :src="props.active ? icon.active : icon.inactive" />
                </template>
            <van-tabbar-item icon="search">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
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