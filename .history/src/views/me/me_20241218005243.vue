<template>
    <div class="me">
        <meHeader></meHeader>
        <div class="grid">
            <h3>我的订单</h3>
            <span>全部 ></span>
            <van-grid>
                <van-grid-item v-for="(item, index) in listGrid" :key="value" :icon="getImagePath(item.image)"
                    :text="item.title" />
            </van-grid>
        </div>
        <div class="more">
            <template v-for="(item, index) in 5">
                <div class="moreBox">
                    <div class="left">
                        <img src="" alt="">
                        <span>全部订单</span>
                    </div>
                    <div class="right">></div>
                </div>
            </template>
        </div>
        <div class="radio">
            <button>退出登录</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import meHeader from './meHeader.vue';
import { getImagePath } from '@/util/getImage';

const listGrid = ref([
    {
        title: '待付款',
        image: '@/assets/images/me/待付款.png'
    },
    {
        title: '待收货',
        image: '@/assets/images/me/待收货.png'
    },
    {
        title: '待评价',
        image: '@/assets/images/me/待评价.png'
    },
    {
        title: '退换/售后',
        image: '@/assets/images/me/退换货.png'
    }
])
</script>

<style lang="less" scoped>
.me {
    .grid {
        margin: 20px 10px;
        padding: 10px;
        background-color: white;
        border-radius: 10px;
        position: relative;

        span {
            position: absolute;
            right: 10px;
            top: 10px;
            color: var(--font-color);
        }
    }

    .more {
        display: flex;
        height: 240px;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 10px;
        border-radius: 10px;
        background-color: white;
        padding: 10px;

        .moreBox {
            display: flex;
            align-items: center;

            .left {
                display: flex;
                width: 100%;
                height: 20px;
                align-items: center;

                img {
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                }
            }

            .right {
                margin-left: auto;
                color: var(--font-color);
            }
        }
    }

    .radio {
        margin: 20px 10px;

        button {
            width: 100%;
            height: 50px;
            background-color: white;
            border: none;
            border-radius: 10px;
            color: #19A9FC;
        }
    }
}
</style>