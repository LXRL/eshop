<template>
    <div class="shopping">
        <van-nav-bar title="购物车" />
        <table>
            <tr>
                <td>
                    <input type="checkbox">
                </td>
                <td class="img"><img src="" alt=""></td>
                <td class="text">
                    <h4 class="name"></h4>
                    <p class="message"></p>
                    <p class="price"></p>
                </td>
                <td class="quantity">
                    <button>-</button>
                    <span class="num"></span>
                    <button>+</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue'


</script>

<style lang="less" scoped>
table {
    tr {
        td {
            input {
                width: 50px;
                height: 50px;
                border-radius: 50px;
            }
        }
    }
}
</style>