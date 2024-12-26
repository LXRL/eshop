<template>
    <van-nav-bar title="消息" />
    <div class="message">
        <div class="box">
            <template v-for="(item, index) in list">
                <div class="info">
                    <div class="img"><img :src="getImagePath(item.image)" alt=""></div>
                    <div class="text">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.text }}</p>
                    </div>
                    <div class="time">{{ item.time }}</div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getImagePath } from '@/util/getImage';
const list = ref([
    {
        image: 'assets/images/message/GOGOSOON.jpg',
        title: 'GOGOSOON禾子先生',
        text: '亲爱的,您的快递在派件了哦',
        time: '今天'
    },
    {
        image: 'assets/images/message/金味食品旗舰店.jpg',
        title: '金味食品旗舰店',
        text: '欢迎您光临本店',
        time: '星期六'
    },
    {
        image: 'assets/images/message/订阅.png',
        title: '订阅号消息',
        text: '水果旗舰店：【新到水果新...',
        time: '星期三'
    },
    {
        image: 'assets/images/message/消息.png',
        title: '消息号内容',
        text: '食品旗舰店：大量新品到货',
        time: '星期三'
    },
])
</script>

<style lang="less" scoped>
.message {
    // 增加内边距
    background-color: #f4f4f4; // 背景颜色

    .box {
        border-radius: 8px; // 盒子圆角
        overflow: hidden; // 避免内容溢出
        background-color: white; // 盒子背景颜色
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); // 阴影

        .info {
            display: flex;
            align-items: center;
            padding: 15px; // 增加内边距
            border-bottom: 1px solid #e0e0e0; // 更柔和的底部边框
            transition: background-color 0.3s; // 过渡效果
            
            &:hover {
                background-color: #f9f9f9; // 鼠标悬停效果
            }

            .img {
                width: 50px;
                height: 50px;
                border: 2px solid #1989FA; // 加强边框颜色
                margin-right: 10px; // 增加右侧间距
                border-radius: 50%;
                overflow: hidden; // 避免图片溢出
                bacc
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; // 保持图片比例
                }
            }

            .text {
                flex-grow: 1; // 使文本区域自适应
                height: 50px;
                display: flex;
                flex-direction: column;
                justify-content: center; // 垂直居中
                margin-right: 10px; // 右侧间距

                h4 {
                    margin: 0; // 移除默认间距
                    font-size: 16px; // 标题字体大小
                    color: #333; // 标题颜色
                }

                p {
                    color: #969799; // 文本颜色
                    font-size: 14px; // 文本字体大小
                }
            }

            .time {
                color: #969799; // 时间颜色
                font-size: 12px; // 时间字体大小
                margin-left: auto; // 自动左侧边距
            }
        }
    }
}
</style>