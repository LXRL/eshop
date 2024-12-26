<template>
    <van-nav-bar title="每周上新" left-arrow @click-left="onClickLeft" />
    <div class="GridDetail">
        <div class="info">
            <template v-for="(item, index) in homeWeekly">
                <div class="box">
                    <img :src="getImagePath(item.image)" alt="">
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
import useHome from '@/store/modules/home';
import { storeToRefs } from 'pinia';
import { getImagePath } from '@/util/getImage';

const router = useRouter()
const onClickLeft = () => {
    router.back()
}

const HomeStore = useHome()
const { homeWeekly } = storeToRefs(HomeStore)
console.log(homeWeekly.value)
</script>

<style lang="less" scoped>
.GridDetail {
    padding: 10px;

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
}
</style>