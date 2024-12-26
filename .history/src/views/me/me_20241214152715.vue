<template>
    <div class="me">
        <meHeader></meHeader>
        <div class="grid">
            <van-grid-item v-for="(item, index) in list" :key="value" icon="photo-o" text="文字" :to="item.path" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import meHeader from './meHeader.vue';
</script>

<style lang="less" scoped>
.me {}
</style>