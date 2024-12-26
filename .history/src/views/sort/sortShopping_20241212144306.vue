<template>
    <div class="sortShopping">
        <template>
            <div class="info">
                <div class="img"><img src="" alt=""></div>
                <p class="title"> <span>111</span></p>
                <div class="text">
                    <div class="price"></div>
                    <div class="remaining">111</div>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="less" scoped>
.sortShopping {
    padding: 10px;

    .info {
        width: 180px;

        .img {
            width: 100%;
            height: 100px;

            img {
                width: 1000%;
                height: 100%;
            }
        }

        .title {
            margin: 10px 0;

            span {
                color: --font-color;
            }
        }
        .text{
            display: flex;
            justify-content: space-around;
            .Remaining:
        }
    }
}
</style>