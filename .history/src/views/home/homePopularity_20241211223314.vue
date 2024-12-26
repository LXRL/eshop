<template>
    <div class="homePopularity">
        <van-nav-bar title="人气推荐" left-arrow @click-left="onClickLeft" />
        <div class="box">
            <template v-for="(item, index) in 5">
                <div class="info">
                    <div class="left">
                        <div class="icon">Top1</div>
                        <div class="img">
                            <img src="" alt="">
                        </div>
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
            width: 400px;
            height: 100px;
            border: 1px solid black;
            .img{
                bor
            }
        }
    }
}
</style>