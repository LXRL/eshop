<template>
    <div class="sortShopping">
        <template v-for="(item, index) in sortShop">
            <div class="info">
                <div class="img"><img :src="getImagePath(item.image)" alt=""></div>
                <p class="title"> {{ item.name }}</p>
                <div class="text">
                    <div class="price">￥{{ item.price }}</div>
                    <div class="remaining">{{ item.remainder }}</div>
                </div>
            </div>
        </template>
        <button class="load">加载更多</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import useSort from '@/store/modules/sort';
import { storeToRefs } from 'pinia';
import { getImagePath } from '@/util/getImage';

const sortStore = useSort()
const { sortShop } = storeToRefs(sortStore)
sortStore.fetchAllSortShopData()

const cu
</script>

<style lang="less" scoped>
.sortShopping {
    display: flex;
    padding: 10px; // 增加内边距
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 60px;

    .info {
        width: 180px;
        margin-bottom: 20px;
        background-color: white; // 盒子背景
        border-radius: 12px; // 更柔和的圆角
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); // 阴影
        overflow: hidden; // 避免内容溢出
        transition: transform 0.2s; // 过渡效果

        &:hover {
            transform: translateY(-2px); // 鼠标悬停效果
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); // 加强阴影
        }

        .img {
            width: 100%;
            height: 150px;
            overflow: hidden; // 防止图片溢出

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

        .title {
            width: 100%;
            margin: 10px 10px; // 缩小上下间距
            font-size: 16px; // 增加字体大小
            color: #333; // 标题颜色
            font-weight: bold; // 加粗
        }

        .text {
            display: flex;
            justify-content: space-between;
            padding: 0 10px; // 添加左右内边距
            font-size: 14px; // 字体大小

            .price {
                font-weight: bold; // 加粗价格
                color: #e74c3c; // 价格颜色
            }

            .remaining {
                color: #969799; // 剩余数量颜色
            }
        }
    }

    .load {
        width: 100%;
        height: 50px;
        background-color: #1989FA; // 按钮背景颜色
        color: white; // 按钮文字颜色
        border-radius: 5px; // 圆角
        border: none; // 去掉边框
        font-size: 16px; // 字体大小
        cursor: pointer; // 鼠标样式
        transition: background-color 0.3s; // 按钮过渡效果

        &:hover {
            background-color: #0b7dda; // 悬停时的背景颜色
        }
    }
}
</style>