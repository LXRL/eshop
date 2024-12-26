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
                        <h4></h4>
                        <p></p>
                        <p class="price"></p>
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

        .left {
            width: 100px;
            height: 90px;
            border: 1px solid black;
            border-radius: 10px;
            position: relative;

            .icon {
                position: absolute;
                top: 5px;
                left: 0;
                background-color: #FF8C20;
                padding: 3px;
                color: white;
                border-top-right-radius: 5px;
                bord
            }

            img {
                width: 100%;
                height: 100%;
            }
        }

        .right {
            flex: 1;
        }
    }
}
</style>