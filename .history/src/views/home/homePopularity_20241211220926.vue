<template>
    <div class="homePopularity">
        <van-nav-bar title="人气推荐" left-arrow @click-left="onClickLeft" />
        <template>
            <div class="info">
                <div class="left">
                    <span></span>
                    <img src="" alt="">
                </div>
                <div class="right">
                    <h4></h4>
                    <p></p>
                    <span></span>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="less" scoped></style>