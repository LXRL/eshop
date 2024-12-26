<template>
    <div class="sortClass">
        <div class="left">
            <van-sidebar v-model="active">
                <van-sidebar v-model="active">
                    <van-sidebar-item v-for="(item, index) in sidebarItems" :key="index" :title="item.title"
                        @click="scrollTo(item.ref)" />
                </van-sidebar>
            </van-sidebar>
        </div>
        <div class="right" v-if="classPhone">
            <sort-class-right v-for="(item, index) in sidebarItems" :key="index" ref="sortRefs[item.ref]"
                :title="item.title" :data="item.ref" />
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
const sortRefs = ref({});

const sortStore = useSort()
const { sortClassData } = storeToRefs(sortStore)
sortStore.fetchAllSortClassData()

const classPhone = sortClassData.value.filter(item => item.shopclass == "手机数码")
const classCostume = sortClassData.value.filter(item => item.shopclass == "服饰")
const classDepartment = sortClassData.value.filter(item => item.shopclass == "百货日常")
const classSports = sortClassData.value.filter(item => item.shopclass == "户外运动")
const classFood = sortClassData.value.filter(item => item.shopclass == "食品")
const classFruit = sortClassData.value.filter(item => item.shopclass == "水果")


const sidebarItems = [
    { title: '手机数码', ref: 'classPhone' },
    { title: '服饰', ref: 'classCostume' },
    { title: '百货日常', ref: 'classDepartment' },
    { title: '户外运动', ref: 'classSports' },
    { title: '食品', ref: 'classFood' },
    { title: '水果', ref: 'classFruit' },
];

const scrollTo = (className) => {
    const element = sortRefs.value[className];
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
</script>

<style lang="less" scoped>
.sortClass {
    display: flex;

    .left {
        width: 80px;
        background-color: #F7F8FA;
    }

    .right {
        flex: 1;
        height: 100vh;
        margin-left: auto;
        overflow-y: auto;
        margin-bottom: 60px;
    }
}
</style>