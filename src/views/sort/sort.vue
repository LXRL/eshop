<template>
    <div class="sort">
        <van-nav-bar title="商品列表" />
        <van-tabs v-model:active="active">
            <van-tab title="商品类别">
                <sortShopping></sortShopping>
            </van-tab>
            <van-tab title="分类">
                <sortClass></sortClass>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import sortShopping from './sortShopping.vue';
import sortClass from './sortClass.vue';

const active = ref(0);


</script>

<style lang="less" scoped></style>