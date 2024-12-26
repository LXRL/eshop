<template>
    <div class="shopping">
        <van-nav-bar title="购物车" />
        <table>
            <tbody>
                <tr>
                    <td class="button">
                        <input type="checkbox">
                    </td>
                    <td class="img"><img src="" alt=""></td>
                    <td class="text">
                        <h4 class="name">1333</h4>
                        <p class="message">1222</p>
                        <p class="price">111</p>
                    </td>
                    <td class="quantity">
                        <button>-</button>
                        <span class="num"></span>
                        <button>+</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue'


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
            }

            .text {
                display: flex;
            }
        }
    }
}
</style>