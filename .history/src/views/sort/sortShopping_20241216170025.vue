<template>
    <div class="sortShopping">
        <template v-for="(item, index) in ">
            <div class="info">
                <div class="img"><img :src="item.image" alt=""></div>
                <p class="title"> <span>111</span></p>
                <div class="text">
                    <div class="price">{{ item.price }}</div>
                    <div class="remaining">{{ item.remaining }}</div>
                </div>
            </div>
        </template>
        <button class="load">加载更多</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'


</script>

<style lang="less" scoped>
.sortShopping {
    display: flex;
    padding: 10px;
    justify-content: space-between;
    flex-wrap: wrap;

    .info {
        width: 180px;
        margin-bottom: 20px;

        .img {
            width: 100%;
            height: 150px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .title {
            width: 100%;
            margin: 15px 0;

            span {
                color: var(--font-color);
            }
        }

        .text {
            width: 100%;
            display: flex;
            justify-content: space-between;

            .remaining {
                color: var(--font-color);
            }
        }
    }

    .load {
        width: 100%;
        height: 50px;
        background-color: white;
        color: #1989FA;
        border-radius: 5px;
        border: 1px solid #1989FA;
    }

}
</style>