<template>
    <div class="footer">
        <van-tabbar v-model="active">
            <template v-for="(item, index) in navigation">
                <van-tabbar-item :to="item.path">
                    <span>{{ item.name }}</span>
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
        name: '首页',
        image:'@/assets/images/footer/我的.png',
        imageActive:'@/assets/images/footer/我的2.png'
    },
    {
        path: '/sort',
        name: '分类'
    },
    {
        path: '/message',
        name: '消息'
    },
    {
        path: '/shopping',
        name: '购物车'
    },
    {
        path: '/me',
        name: '我的'
    }
])

</script>

<style lang="less" scoped></style>