<template>
    <div class="header">
        <div class="img">
            <img src="" alt="">
        </div>
        <div class="text">
            <h3 class="name">LIRENLONG</h3>
            <div class="icon">
                <div>
                    <img src="" alt="">
                    <span>收货地址</span>
                </div>
                <span>|</span>
                <div>
                    <img src="" alt="">
                    <span>关注店铺</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="less" scoped>
.header {
    width: 100%;
    padding: 10px 0;
    display: flex;
    align-items: center;

    .img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid black;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .text {
        display: flex;
        height: 70px;
        margin-left: 20px;
        flex-direction: column;
        justify-content: space-between;

        .icon {
            display: flex;

            div {
                img {
                    width: 10px;
                    height: 10px;
                }
            }

            span {
                margin: 0 10px;
            }
        }
    }
}
</style>