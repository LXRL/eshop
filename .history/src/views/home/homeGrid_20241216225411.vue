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
        image:'@/assets/images/icon/每周上新.png'
    },
    {
        path: '/homePopularity'
    },
    {
        path: '/homeWeekly'
    },
    {
        path: '/homePopularity'
    },
    {
        path: '/homeWeekly'
    },
    {
        path: '/homePopularity'
    },
    {
        path: '/homeWeekly'
    },
    {
        path: '/homePopularity'
    },
])

</script>

<style lang="less" scoped>
.grid {
    margin: 10px 0;
}
</style>