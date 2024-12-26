<template>
    <template>
    <div class="GridDetail">
        <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
        <div class="info">
            <template v-for="(item, index) in 4">
                <div class="box">
                    <img src="" alt="">
                    <div class="text">
                        <p></p>
                        <p></p>
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
.info {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 80px;

    .box {
        width: 180px;
        height: 300px;
        margin-bottom: 10px;
        border: 1px solid black;

        img {
            width: 100%;
            height: 200px;
        }

        .text {
            box-sizing: border-box;
            padding: 10px 0;

            p {
                text-align: center;
            }
        }
    }
}
</style>
</template>

<script setup>
import { ref } from 'vue'
import homeGridDetails from '@/components/homeGridDetails.vue';
</script>

<style lang="less" scoped></style>