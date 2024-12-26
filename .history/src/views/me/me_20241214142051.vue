<template>
    <div class="me">
        <div class="header">
            <div class="img">
                <img src="" alt="">
            </div>
            <div class="text">
                <h4 class="name"></h4>
                <div class="icon">
                    <div>
                        <img src="" alt="">
                        <span>收货地址</span>
                    </div>
                    <div>
                        <img src="" alt="">
                        <span>关注店铺</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="less" scoped>
.me {
    padding: 10px;

    .header {
        width: 100%;

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
    }
}
</style>