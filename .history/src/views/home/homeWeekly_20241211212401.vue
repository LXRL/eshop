<template>
    <div class="homeWeekly">
        <van-nav-bar title="每周上新" left-arrow @click-left="onClickLeft" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRoute()

const onClickLeft = () => {
    router.back()
}
</script>

<style lang="less" scoped></style>