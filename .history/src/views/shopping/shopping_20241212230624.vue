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
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue'


</script>

<style lang="less" scoped>
table {
    tbody {
        tr {
            .button {
                input[type='checkbox'] {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
}
</style>