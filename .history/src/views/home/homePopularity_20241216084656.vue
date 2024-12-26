<template>
    <div class="homePopularity">
        <van-nav-bar title="人气推荐" left-arrow @click-left="onClickLeft" />
        <div class="box">
            <template v-for="(item, index) in homePopularity">
                <div class="info">
                    <div class="left">
                        <div class="icon">Top{{ index + 1 }}</div>
                        <img :src="getImagePath(item.image)" alt="">
                    </div>
                    <div class="right">
                        <h4>{{ item.name }}</h4>
                        <p class="message">{{ item.text }}</p>
                        <p class="price">￥{{ item.price }}</p>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

import useHome from '@/store/modules/home';
import { storeToRefs } from 'pinia';
import { getImagePath } from '@/util/getImage';

const router = useRouter()

const onClickLeft = () => {
    router.back()
}

const HomeStore = useHome()
const { homePopularity } = storeToRefs(HomeStore)
HomeStore.fetchAllHomePopularityData()
console.log(homePopularity.value)
</script>

<style lang="less" scoped>
.box {
    padding: 10px;

    .info {
        display: flex;
        margin-bottom: 20px;
        background-color: white;
        padding: 10px;
        border-radius: 10px;

        .left {
            width: 100px;
            height: 90px;
            border-radius: 10px;
            position: relative;

            .icon {
                position: absolute;
                top: 5px;
                left: 0;
                background-color: #FF8C20;
                padding: 3px 4px;
                color: white;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
                font-size: 14px;
            }

            img {
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
        }

        .right {
            position: relative;
            flex: 1;
            padding: 5px;
            box-sizing: border-box;

            .message {
                font-size: 14px;
                color: #969799;
                margin-top: 5px;
            }

            .price {
                position: absolute;
                bottom: 5px;
                left: 5px;
                color: #FF8C20;
            }
        }
    }
}
</style>