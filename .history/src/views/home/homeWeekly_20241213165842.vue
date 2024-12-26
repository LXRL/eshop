<template>
    <van-nav-bar title="每周上新" left-arrow @click-left="onClickLeft" />
    <div class="GridDetail">
        <div class="info">
            <template v-for="(item, index) in 4">
                <div class="box">
                    <img src="" alt="">
                    <div class="text">
                        <p></p>
                        <p class="price"><span>￥</span></p>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const onClickLeft = () => {
    router.back()
}
</script>

<style lang="less" scoped>
.Grid
</style>