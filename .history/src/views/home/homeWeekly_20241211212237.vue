<template>
    <div class="homeWeekly">
        <van-nav-bar title="每周上新" left-arrow @click-left="onClickLeft" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route=useRoute()
const onClickLeft=()=>{
    this.route
}
</script>

<style lang="less" scoped></style>