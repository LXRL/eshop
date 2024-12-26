<template>
    <div class="homePopularity">
        <van-nav-bar title="人气推荐" left-arrow @click-left="onClickLeft" />
        <template v-for="(item, index) in 5">
            <div class="info">
                <div class="left">
                    <div>Top1</div>
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
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="less" scoped>
.info {
    display: flex;
}
</style>