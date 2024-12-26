<template>
    <div class="homePopularity">
        <van-nav-bar title="人气推荐" left-arrow @click-left="onClickLeft" />
        <div class="box">

        </div>
       
    </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="less" scoped>
.info {
    display: flex;

    .left {
        width: 400px;
        height: 100px;
        border: 1px solid black;
    }
}
</style>