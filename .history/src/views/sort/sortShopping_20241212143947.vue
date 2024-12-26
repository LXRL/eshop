<template>
    <div class="sortShopping">
        <template>
            <div class="info">
                <div class="img"><img src="" alt=""></div>
                <p class="title"> <span></span></p>
                <div class="text">
                    <div class="price"></div>
                    <div class=""></div>
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
    }
}
</style>