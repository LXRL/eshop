<template>
    <div class="sort">
        <van-nav-bar title="商品列表" />
        <van-tabs v-model:active="active">
            <van-tab title="商品类别">
                <sortShopping :shopping="sortClassData"></sortShopping>
            </van-tab>
            <van-tab title="分类">
                <sortClass :shopping="sortClassData"></sortClass>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import sortShopping from './sortShopping.vue';
import sortClass from './sortClass.vue';

import useSort from '@/store/modules/sort';
import { storeToRefs } from 'pinia';
import { getImagePath } from '@/util/getImage';

const active = ref(0);

const sortStore = useSort()
const { sortClassData } = storeToRefs(sortStore)
so
</script>

<style lang="less" scoped></style>