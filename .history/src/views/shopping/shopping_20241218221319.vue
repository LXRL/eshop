<template>
    <van-nav-bar title="购物车" />
    <div class="shopping">
        <table>
            <tbody>
                <tr v-for="(item, index) in shoppingData">
                    <td class="button">
                        <input type="checkbox" :checked="item.choose">
                    </td>
                    <td class="img"><img :src="getImagePath(item.image)" alt=""></td>
                    <td class="text">
                        <h4 class="name">{{ item.name }}</h4>
                        <p class="message">{{ item.message }}</p>
                        <p class="price">￥{{ item.price }}</p>
                    </td>
                    <td class="quantity">
                        <button>-</button>
                        <span class="num">{{ item.num }}</span>
                        <button>+</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="total">
            <div class="left">
                <input type="checkbox"> <span class="text">全选</span>
            </div>
            <div class="right">
                <span class="text">合计:</span>
                <span class="price"></span>
                <button>结算</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import useShopping from '@/store/modules/shopping';
import { storeToRefs } from 'pinia';
import { getImagePath } from '@/util/getImage';

const ShoppingStore = useShopping()
const { shoppingData } = storeToRefs(ShoppingStore)
ShoppingStore.fetchAllShoppingData()

const bloot = ref(0)

</script>

<style lang="less" scoped>
.shopping {
    padding: 10px;

    table {
        width: 100%;

        tbody {
            tr {
                width: 100%;
                display: block;
                display: flex;
                align-items: center;

                .button {
                    input {
                        width: 30px;
                        height: 30px;
                    }
                }

                .img {
                    width: 70px;
                    height: 70px;
                    border: 1px solid black;
                    margin-left: 10px;
                    img{
                        wi
                    }
                }

                .text {
                    flex: 1;
                    height: 70px;
                    display: flex;
                    flex-direction: column;
                    margin: 0 10px;

                    .message {
                        color: var(--font-color);
                        margin: 5px 0;
                    }

                    .price {
                        color: #19A9FC;
                    }
                }

                .quantity {
                    margin-top: auto;

                    button {
                        padding: 3px 9px;
                        background-color: white;
                        border-radius: 50%;
                        color: var(--font-color);
                        border: 1px solid var(--font-color);
                    }

                    span {
                        margin: 0 5px;
                    }
                }
            }
        }
    }

    .total {
        display: flex;
        position: fixed;
        bottom: 50px;
        left: 0;
        width: 100%;
        padding: 10px;
        background-color: white;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px solid #F2F5F7;

        .left {
            display: flex;
            align-items: center;

            input {
                width: 20px;
                height: 20px;
                border: 1px solid var(--font-color);
            }

            .text {
                margin-left: 10px;
                color: var(--font-color);
            }
        }

        .right {
            margin-left: auto;

            .price {
                color: #FE6202;
                margin: 0 10px;
            }

            button {
                background-color: #FE6202;
                padding: 10px 30px;
                color: white;
                border: none;
                border-radius: 10px;
            }
        }
    }
}
</style>