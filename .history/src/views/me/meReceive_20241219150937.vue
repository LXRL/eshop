<template>
    <div class="meReceive">
        <van-nav-bar title="待发货" left-arrow @click-left="onClickLeft" />
        <div class="box">
            <template v-for="(item, index) in meReceive">
                <div class="info">
                    <div class="left">
                        <img :src="getImagePath(item.image)" alt="">
                    </div>
                    <div class="right">
                        <h3>{{ item.name }}</h3>
                    </div>
                </div>
            </template>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import useMe from '@/store/modules/me';
import { storeToRefs } from 'pinia';
import { getImagePath } from '@/util/getImage';

const meStore = useMe()
const { meReceive } = storeToRefs(meStore)

const router = useRouter()
const onClickLeft = () => {
    router.back()
}
</script>

<style lang="less" scoped></style>