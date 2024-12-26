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
                <span class="time"></span>
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

            .img {
                wi
                margin-right: 5px;
            }
        }
    }
}
</style>