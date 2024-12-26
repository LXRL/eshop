<template>
    <van-nav-bar title="每周上新" left-arrow @click-left="onClickLeft" />
    <div class="GridDetail">
        <div class="info">
            <template v-for="(item, index) in homeWeekly">
                <div class="box">
                    <img :src="getImagePath(item.image)" alt="">
                    <div class="text">
                        <h3>{{ item.name }}</h3>
                        <p class="price"><span>￥{{ item.price }}</span></p>
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
HomeStore.fetchAllHomeWeeklyData()
console.log(homeWeekly.value)
</script>

<style lang="less" scoped>
.GridDetail {
    padding: 20px;
    background-color: #f8f9fa; // 背景颜色

    .info {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 0px;

        .box {
            width: 170px; // 增加宽度
            height: 0px; // 增加高度
            margin-bottom: 20px;
            background-color: white;
            border-radius: 12px; // 更柔和的圆角
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); // 阴影效果
            transition: transform 0.3s, box-shadow 0.3s; // 过渡效果

            &:hover {
                transform: translateY(-5px); // 鼠标悬停效果
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); // 加强阴影
            }

            img {
                width: 100%;
                height: 200px;
                object-fit: cover; // 保持图片比例
            }

            .text {
                box-sizing: border-box;
                padding: 10px; // 增加内边距

                h3 {
                    text-align: center;
                }

                p {
                    text-align: center;
                    margin: 5px 0; // 增加上下间距
                    font-size: 14px; // 增加字体大小
                    color: #333; // 文字颜色
                }

                .price {
                    font-size: 16px; // 增加价格字体大小
                    font-weight: bold; // 加粗
                    color: #e74c3c; // 价格颜色
                }
            }
        }
    }
}
</style>