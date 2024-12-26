<template>
    <div class="search">
        <van-search v-model="searchValue" placeholder="请输入搜索关键词" @click="onSearch" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="less" scoped></style>