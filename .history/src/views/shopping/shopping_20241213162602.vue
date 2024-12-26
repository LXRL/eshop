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

</style>