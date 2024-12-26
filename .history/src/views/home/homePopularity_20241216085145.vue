<template>
    <van-nav-bar title="人气推荐" left-arrow @click-left="onClickLeft" />
    <div class="homePopularity">
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
.homePopularity {
    background-color: #f4f4f4; // 背景颜色
    padding: 10px;
    margin-bottom: 40px;

    .box {
        .info {
            display: flex;
            align-items: center; // 垂直居中对齐
            margin-bottom: 20px;
            background-color: white;
            padding: 15px; // 增加内边距
            border-radius: 12px; // 更柔和的圆角
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 阴影效果
            transition: transform 0.3s, box-shadow 0.3s; // 过渡效果

            &:hover {
                transform: translateY(-3px); // 鼠标悬停效果
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); // 加强阴影
            }

            .left {
                width: 100px;
                height: 90px;
                border-radius: 10px;
                overflow: hidden; // 防止内容溢出
                position: relative;
                margin-right: 15px; // 右侧间距

                .icon {
                    position: absolute;
                    top: 5px;
                    left: 0;
                    background-color: #FF8C20;
                    padding: 3px 6px;
                    color: white;
                   border-top-right-radius: 10px;
                   border-bo-right-radius: 10px;
                    font-size: 14px;
                    z-index: 1; // 使图标在上层
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; // 保持图片比例
                    border-radius: 10px; // 圆角
                }
            }

            .right {
                flex: 1; // 自适应宽度
                padding: 5px;
                box-sizing: border-box;

                h4 {
                    font-size: 16px; // 增加标题字体大小
                    margin: 0; // 清除默认margin
                    color: #333; // 标题颜色
                }

                .message {
                    font-size: 14px;
                    color: #969799;
                    margin: 5px 0; // 增加上下间距
                }

                .price {
                    font-size: 16px; // 增加价格字体大小
                    font-weight: bold; // 加粗
                    color: #e74c3c; // 价格颜色
                    margin-top: 10px; // 增加顶部间距
                }
            }
        }
    }
}
</style>