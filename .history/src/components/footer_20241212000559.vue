<template>
    <div class="footer">
        <van-tabbar v-model="active">
            <template v-for="(item, index) in navigation">
                <van-tabbar-item :to="item.path">
                    <span>首页</span>
                    <template #icon>
                        <img src="" alt="">
                    </template>
                </van-tabbar-item>
            </template>
        </van-tabbar>

    </div>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0);
const navigation = ref([
    {
        path: '/home',
        name:'首页'
    },
    {
        path: '/sort',
        name:'分类'
        
    },
    {
        path: '/message'
    },
    {
        path: '/shopping'
    },
    {
        path: '/me'
    },

])

</script>

<style lang="less" scoped></style>