<template>
    <div class="meReceive">
        <van-nav-bar title="待发货" left-arrow @click-left="onClickLeft" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import {}

const router = useRouter()
const onClickLeft = () => {
    router.back()
}
</script>

<style lang="less" scoped></style>