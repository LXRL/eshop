<template>
    <div class="me">
        <meHeader></meHeader>
        <div class="grid">
            <van-grid>
                <van-grid-item v-for="(item, index) in 4" :key="value" icon="photo-o" text="文字" />
            </van-grid>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import meHeader from './meHeader.vue';

</script>

<style lang="less" scoped>
.me {
    .grid {
        padding: 10px;

    }
}
</style>