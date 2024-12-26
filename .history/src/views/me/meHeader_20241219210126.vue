<template>
    <div class="header">
        <div class="img">
            <img src="@/assets/images/me/tou.jpg" alt="">
        </div>
        <div class="text">
            <h3 class="name">LIRENLONG</h3>
            <div class="icon">
                <div>
                    <img src="@/assets/images/me/地址.png" alt="">
                    <span>收货地址</span>
                </div>
                <span>|</span>
                <div>
                    <img src="@/assets/images/me/店铺.png" alt="">
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
    padding: 20px 10px;
    display: flex;
    align-items: center;
    background-color: white;

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
            align-items: center;

            div {
                display: flex;
                img {
                    width: 20px;
                    height: 20px;
                }
            }

           
        }
    }
}
</style>