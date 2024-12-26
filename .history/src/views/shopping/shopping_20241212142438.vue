<template>
    <div class="shopping">
        <van-tabs v-model:active="active">
            <van-tab title="商品类别">商品类别</van-tab>
            <van-tab title="feng">分类</van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(0);
</script>

<style lang="less" scoped></style>