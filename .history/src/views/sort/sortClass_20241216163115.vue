<template>
    <div class="sortClass">
        <div class="left">
            <van-sidebar v-model="active">
                <van-sidebar-item title="潮流女装" />
                <van-sidebar-item title="食品" />
                <van-sidebar-item title="珠宝配饰" />
            </van-sidebar>
        </div>
        <div class="right">
            <sort-class-right title="潮流女装"></sort-class-right>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import sortClassRight from './sortClassRight.vue';
import useSort from '@/store/modules/sort';
import { storeToRefs } from 'pinia';
import { getImagePath } from '@/util/getImage';

const active = ref(0)

const SortStore=useSort()
const {sortClass} = so
</script>

<style lang="less" scoped>
.sortClass {
    display: flex;

    .left {
        height: 100vh;
        position: fixed;
        left: 0;
        top: 100px;
        background-color: #F7F8FA;
    }

    .right {
        width: 310px;
        margin-left: auto;
    }
}
</style>