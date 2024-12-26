<template>
    <div class="grid">
        <van-grid :column-num="3">
            <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
        </van-grid>
    </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="less" scoped></style>