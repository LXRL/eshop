<template>
    <div class="shopping">
        <van-nav-bar title="购物车" />
        <table>
            <tbody>
                <tr>
                    <td class="button">
                        <input type="checkbox" :checked="bloot">
                    </td>
                    <td class="img"><img src="" alt=""></td>
                    <td class="text">
                        <h4 class="name">1333</h4>
                        <p class="message">1222</p>
                        <p class="price">111</p>
                    </td>
                    <td class="quantity">
                        <button>-</button>
                        <span class="num">11</span>
                        <button>+</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="total">
            <div class="left">
                <input type="check"> <span class="text">全选</span>
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
const bloot = ref(0)

</script>

<style lang="less" scoped>
table {
    width: 100%;
    padding: 20px;

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
            }

            .text {
                width: 100px;
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

    .total {
        height: 100px;
        padding: 20px;
        background-color: ;
    }
}
</style>