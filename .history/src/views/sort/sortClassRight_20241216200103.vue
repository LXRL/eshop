<template>
    <div class="classRight">
        <h4>{{ title }}</h4>
        <div class="box">
            <template v-for="(item, index) in data">
                <div class="info">
                    <div class="img">
                        <img :src="getImagePath(item.image)" alt="">
                    </div>
                    <p>{{ item.name }}</p>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getImagePath } from '@/util/getImage';
const props = defineProps({
    title: {
        type: String,
        default: () => ''
    },
    data: {
        type: Array,
        default: () => []
    }
})
</script>

<style lang="less" scoped>
.classRight {
    padding: 10px; // 增加内边距
    background-color: #f9f9f9; // 背景颜色

    h4 {
        margin-bottom: 15px; // 标题下方间距
        font-size: 18px; // 增加标题字体大小
        color: #333; // 标题颜色
    }

    .box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .info {
            width: 84px;
            height: 120px; // 增加高度
            border: 1px solid #e0e0e0; // 边框颜色变更
            border-radius: 8px; // 圆角
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // 阴影效果
            margin-bottom: 15px; // 下方间距
            transition: transform 0.2s; // 过渡效果

            &:hover {
                transform: translateY(-2px); // 鼠标悬停效果
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // 加强阴影
            }

            .img {
                width: 100%;
                height: 70px;
                overflow: hidden; // 防止图片溢出
                border-bottom: 1px solid #e0e0e0; // 底部边框

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; // 保持图片比例
                    transition: transform 0.3s; // 图片过渡效果

                    &:hover {
                        transform: scale(1.05); // 图片缩放效果
                    }
                }
            }

            p {
                text-align: center;
                margin-top: 5px; // 上方间距
                font-size: 14px; // 字体大小
                color: #555; // 文字颜色
            }
        }
    }
}
</style>