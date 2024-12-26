<template>
    <div class="meReceive">
        <van-nav-bar title="待发货" left-arrow @click-left="onClickLeft" />
        <template>
            <div class="info">
                
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import useMe from '@/store/modules/me';
import { storeToRefs } from 'pinia';

const meStore = useMe()
const { meReceive } = storeToRefs(meStore)

const router = useRouter()
const onClickLeft = () => {
    router.back()
}
</script>

<style lang="less" scoped></style>