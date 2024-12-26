<template>
    <div class="GridDetail">
        <van-nav-bar title="每周上新" left-arrow @click-left="onClickLeft" />
        <div class="info">
            <template v-for="(item, index) in 4">
                <div>
                    <img src="" alt="">
                    <span></span>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
    title: {
        type: String,
        default:''
    }
})
const router = useRouter()

const onClickLeft = () => {
    router.back()
}
</script>

<style lang="less" scoped>
.GridDetail {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 80px;

    div {
        width: 180px;
        height: 200px;
        margin-bottom: 10px;
        border: 1px solid black;

    }
}
</style>