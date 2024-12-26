<template>
    <div class="sortClass">
        <div class="left">
            <van-sidebar v-model="active">
                <van-sidebar-item title="手机数码" />
                <van-sidebar-item title="服饰" />
                <van-sidebar-item title="百货日常" />
                <van-sidebar-item title="户外运动" />
                <van-sidebar-item title="食品" />
                <van-sidebar-item title="水果" />
            </van-sidebar>
        </div>
        <div class="right" v-if="classPhone">
            <sort-class-right title="手机数码" :data="classPhone"></sort-class-right>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import sortClassRight from './sortClassRight.vue';
import Shopping from '../shopping/shopping.vue';

import useSort from '@/store/modules/sort';
import { storeToRefs } from 'pinia';

const active = ref(0)

const sortStore = useSort()
const { sortClassData } = storeToRefs(sortStore)
sortStore.fetchAllSortClassData()

const classPhone = sortClassData.value.filter(item => item.shopclass == "手机数码")
const classCostume = sortClassData.value.filter(item => item.shopclass == "服饰")
const classDepartment = sortClassData.value.filter(item => item.shopclass == "百货日常")
const classSports = sortClassData.value.filter(item => item.shopclass == "户外运动")
const classFood = sortClassData.value.filter(item => item.shopclass == "百货日常")
const classFruit = sortClassData.value.filter(item => item.shopclass == "百货日常")

</script>

<style lang="less" scoped>
.sortClass {
    display: flex;

    .left {
        height: 100vh;
        position: fixed;
        left: 0;
        background-color: #F7F8FA;
    }

    .right {
        width: 310px;
        margin-left: auto;
    }
}
</style>