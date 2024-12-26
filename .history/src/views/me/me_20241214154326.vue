<template>
    <div class="me">
        <meHeader></meHeader>
        <div class="grid">
            <h3>我的订单</h3>
            <span>全部 ></span>
            <van-grid>
                <van-grid-item v-for="(item, index) in 4" :key="value" icon="photo-o" text="文字" />
            </van-grid>
        </div>
        <div class="more">
            <template>
                <div class="moreBox">
                    <div class="left">
                        <img src="" alt="">
                        <span>全部订单</span>
                    </div>
                    <div class="right">></div>
                </div>
            </template>
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
        margin: 20px 10px;
        padding: 10px;
        background-color: white;
        border-radius: 10px;
        position: relative;

        span {
            position: absolute;
            right: 10px;
            top: 10px;
            color: var(--font-color);
        }
    }

    .more {
        margin: 0 10px;
        border-radius: 10px;
        background-color: white;
        padding: 10px;
        .moreBox{
            display: flex;
            
        }
    }
}
</style>