<template>
    <div class="me">
        <meHeader></meHeader>
        <div class="grid">
            <van-grid>
                <van-grid-item v-for="(item, index) in 3" :key="value" icon="photo-o" text="文字" :to="item.path" />
            </van-grid>
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