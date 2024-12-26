<template>
    <div class="Vue">
        <router-view></router-view>

        <div class="footer">
            <van-tabbar v-model="active">
                <van-tabbar-item badge="3">
                    <span>自定义</span>
                    <template #icon="props">
                        <img :src="props.active ? icon.active : icon.inactive" />
                    </template>
                </van-tabbar-item>
                <van-tabbar-item icon="search">标签</van-tabbar-item>
                <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const footerData = ref([
    {
        name: '首页',
        path: '/home'
    }
])
</script>

<style lang="less" scoped></style>