<template>
    <div class="message">
        <van-nav-bar title="消息" />
        <div class="box">
            <div class="info">
                <div class="img"><img src="" alt=""></div>
                <div class="text">
                    <h4>11</h4>
                    <p>11</p>
                </div>
                <span class="time">111</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="less" scoped>
.message {
    padding: 10px;

    .box {
        .info {
            display: flex;
            align-items: center;
            padding: 10px;
            height: 50px;

            .img {
                width: 50px;
                height: 50px;
                border: 1px solid black;
                margin-right: 5px;
            }

            .text {
                height: 40px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                ma

                p {
                    color: #969799;
                    font-size: 14px;
                }
            }

            .time {
                color: #969799;
                margin: left;
            }
        }
    }
}
</style>