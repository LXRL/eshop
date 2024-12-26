<template>
    <div class="homeWeekly">
        <van-nav-bar title="每周上新" left-arrow @click-left="onClickLeft" />
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
.van-nav-bar__left {
    --van-nav-bar-icon-color: #969799;
}
</style>