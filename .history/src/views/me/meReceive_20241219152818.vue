<template>
    <van-nav-bar title="待发货" left-arrow @click-left="onClickLeft" />
    <div class="meReceive">
        <div class="box">
            <template v-for="(item, index) in meReceive" :key="index">
                <div class="info">
                    <div class="left">
                        <img :src="getImagePath(item.image)" alt="">
                    </div>
                    <div class="right">
                        <h3>{{ item.name }}</h3>
                        <p>{{ item.message }}</p>
                        <p class="price">￥{{ item.price }}</p>
                    </div>
                    <div class="num">
                        <p>待发货</p>
                        <p>x{{ item.num }}</p>
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
const { meReceive } = storeToRefs(meStore) // 这里不需要 .value
console.log(meReceive.value)
const router = useRouter()
const onClickLeft = () => {
    router.back()
}
</script>

<style lang="less" scoped>
.meReceive {
    padding: 10px;
}

.box {
    margin-top: 16px;
}

.info {
    display: flex;
    align-items: center;
    padding: 12px;
    background-color: #ffffff; // 每个条目的背景色
    border-radius: 8px; // 圆角
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // 阴影效果
    margin-bottom: 12px; // 条目之间的间距
    transition: box-shadow 0.3s; // 鼠标悬停效果

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // 鼠标悬停时阴影加深
    }

    .left {
        flex: 0 0 80px; // 固定宽度

        img {
            width: 100%; // 自适应宽度
            height: auto; // 自适应高度
            border-radius: 4px; // 圆角
        }
    }

    .right {
        flex: 1; // 自适应宽度
        padding-left: 12px;


        h3 {
            font-size: 16px; // 标题字体大小
            color: #333; // 标题颜色
            margin: 0; // 去掉默认边距
        }

        p {
            font-size: 14px; // 描述字体大小
            color: #666; // 描述颜色
            margin: 4px 0; // 上下边距
        }

        .price {
            color: #E74C3C;
        }
    }
}
</style>