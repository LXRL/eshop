<template>
    <div class="shopping">
        <van-nav-bar title="购物车" />
        <table>
            <tr>
                <td>
                    <input type="checkbox">
                </td>
                <td class="img"><img src="" alt=""></td>
                <td>
                    <h4 class="name"></h4>
                    <p class="message"></p>
                    <p class="price"></p>
                </td>
                <td >
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
                width: 20px;
                height: 20px;
                border-radius: 50%;
            }
        }
    }
}
</style>