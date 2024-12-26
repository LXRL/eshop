<template>
    <div class="me">
        <meHeader></meHeader>
        <div class="grid">
            <div class="box">
                <h3>我的订单</h3>
                <van-grid>
                    <van-grid-item v-for="(item, index) in 4" :key="value" icon="photo-o" text="文字" />
                </van-grid>
            </div>

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
        margin: 20px 0;
        padding: 10px;
        background-color: white;
    }
}
</style>