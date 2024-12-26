<template>
    <div class="homePopularity">
        <van-nav-bar title="人气推荐" left-arrow @click-left="onClickLeft" />
        <div class="box">
            <template v-for="(item, index) in 5">
                <div class="info">
                    <div class="left">
                        <div class="icon">Top1</div>
                        <img src="" alt="">
                    </div>
                    <div class="right">
                        <h4>111</h4>
                        <p class="message">1111</p>
                        <p class="price">111</p>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="less" scoped>
.box {
    padding: 10px;

    .info {
        display: flex;
        margin-bottom: ;
        .left {
            width: 100px;
            height: 90px;
            border-radius: 10px;
            position: relative;

            .icon {
                position: absolute;
                top: 5px;
                left: 0;
                background-color: #FF8C20;
                padding: 3px 4px;
                color: white;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
                font-size: 14px;
            }

            img {
                width: 100%;
                height: 100%;
            }
        }

        .right {
            position: relative;
            flex: 1;
            padding: 5px;
            box-sizing: border-box;

            .message {
                font-size: 14px;
                color: #969799;
                margin-top: 5px;
            }

            .price {
                position: absolute;
                bottom: 5px;
                left: 0;
            }
        }
    }
}
</style>