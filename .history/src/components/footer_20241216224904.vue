<template>
    <div class="footer">
        <van-tabbar v-model="active">
            <template v-for="(item, index) in navigation">
                <van-tabbar-item :to="item.path">
                    <span>{{ item.name }}</span>
                    <template #icon="props">
                        <img :src="props.active ? item.image : item.imageActive" alt="">
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
        image: 'assets/images/footer/首页.png',
        imageActive: 'assets/images/footer/首页2.png'
    },
    {
        path: '/sort',
        name: '分类',
        image: 'assets/images/footer/分类.png',
        imageActive: '@/assets/images/footer/分类2.png'
    },
    {
        path: '/message',
        name: '消息',
        image: 'assets/images/footer/消息.png',
        imageActive: 'assets/images/footer/消息2.png'
    },
    {
        path: '/shopping',
        name: '购物车',
        image: 'assets/images/footer/购物车.png',
        imageActive: 'assets/images/footer/购物车2.png'
    },
    {
        path: '/me',
        name: '我的',
        image: 'assets/images/footer/我的.png',
        imageActive: '@/assets/images/footer/我的2.png'
    }
])

</script>

<style lang="less" scoped></style>