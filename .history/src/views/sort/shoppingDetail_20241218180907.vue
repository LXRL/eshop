<template>
    <div class="detail" v-if="data">
        <template v-for="(item, index) in data">
            <img :src="getImagePath(item.image)" alt="">
            <div class="text">
                <h3>{{ item.name }}</h3>
                <p>{{ item.price }}</p>
                <p>{{ item.remainder }}</p>
            </div>
        </template>
        <div class="footer">
            <div class="left">
                <div>
                    <img src="@/assets/images/me/客服.png" alt="">
                    <p>客服</p>
                </div>
                <div>
                    <img src="@/assets/images/footer/购物车.png" alt="">
                    <p>购物车</p>
                </div>
            </div>
            <div class="right">
                <button>加入购物车</button>
                <button>立即购买</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import useSort from '@/store/modules/sort';
import { storeToRefs } from 'pinia';
import { getImagePath } from '@/util/getImage';

const sortStore = useSort()
const { sortShop } = storeToRefs(sortStore)
sortStore.fetchAllSortShopData()

const route = useRoute()
const data = sortShop.value.filter(item => item.id == route.params.id)
console.log(data)

</script>

<style lang="less" scoped>
.detail {
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    img {
        width: 100%;
        border-radius: 8px;
        margin-bottom: 15px;
    }

    .text {
        padding: 10px;

        h3 {
            font-size: 1.5em;
            color: #333;
            margin: 10px 0;
        }

        p {
            font-size: 1.2em;
            color: #666;
            margin: 5px 0;
        }

        .price {
            font-weight: bold;
            color: #e74c3c; // 价格使用红色
        }
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        padding-top: 15px;
        border-top: 1px solid #ddd;

        .left {
            width: 120px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            div {
                width: 50px;
                display: flex;
                flex-direction: column;
                align-items: center;

                img {
                    width: 30px;
                }

                p {
                    margin: 0;
                    color: #666;
                    font-size: 1em;
                }
            }
        }

        .right {
            display: flex;

            button {
                background-color: #1989fa;
                color: white;
                border: none;
                border-radius: 5px;
                padding: 10px 20px;
                font-size: 1em;
                cursor: pointer;
                margin-left: 10px;
                transition: background-color 0.3s;

                &:hover {
                    background-color: #007aff;
                }
            }
        }
    }
}
</style>