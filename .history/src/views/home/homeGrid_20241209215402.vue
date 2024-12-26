<template>
    <div class="grid">
        <van-grid :gutter="10">
            <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
        </van-grid>
    </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="less" scoped></style>