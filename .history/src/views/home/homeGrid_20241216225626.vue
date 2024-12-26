<template>
    <div class="grid">
        <van-grid>
            <van-grid-item v-for="(item, index) in list" :key="value" icon="photo-o" text="文字" :to="item.path" />
        </van-grid>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const list = ref([
    {
        path: '/homeWeekly',
        title:'每周上新',
        image:'assets/images/icon/每周上新.png'
    },
    {
        path: '/homePopularity',
        title:'人气推荐',
        image:'assets/images/icon/每周上新.png'
    },
    {
        path: '/homeWeekly',
        title:'每日优惠',
        image:'assets/images/icon/每周上新.png'
    },
    {
        path: '/homePopularity',
        title:'推荐购买',
        image:'assets/images/icon/每周上新.png'
    },
    {
        path: '/homeWeekly',
        title:'',
        image:'assets/images/icon/每周上新.png'
    },
    {
        path: '/homePopularity',
        title:'每周上新',
        image:'assets/images/icon/每周上新.png'
    },
    {
        path: '/homeWeekly',
        title:'每周上新',
        image:'assets/images/icon/每周上新.png'
    },
    {
        path: '/homePopularity',
        title:'每周上新',
        image:'assets/images/icon/每周上新.png'
    },
])

</script>

<style lang="less" scoped>
.grid {
    margin: 10px 0;
}
</style>