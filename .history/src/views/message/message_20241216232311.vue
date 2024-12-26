<template>
    <van-nav-bar title="消息" />
    <div class="message">
        <div class="box">
            <div class="info">
                <div class="img"><img src="" alt=""></div>
                <div class="text">
                    <h4>11</h4>
                    <p>11</p>
                </div>
                <div class="time">111</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const list=ref([
    {
        image:'assets/images/message/GOGOSOON.jpg',
        title:'GOGOSOON禾子先生',
        text:'亲爱的,您的快递在派件了哦'
    }，
])
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
            border-bottom: 1px solid #969799;

            .img {
                width: 50px;
                height: 50px;
                border: 1px solid black;
                margin-right: 5px;
                border-radius: 50%;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .text {
                height: 40px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-top: 10px;

                p {
                    color: #969799;
                    font-size: 14px;
                }
            }

            .time {
                color: #969799;
                margin-left: auto;
            }
        }
    }
}
</style>