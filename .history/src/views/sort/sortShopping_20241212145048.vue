<template>
    <div class="sortShopping">
        <template v-for="(item, index) in 4">
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
    display: flex;
    padding: 10px;
    justify-content: space-around;
    flex-wrap: wrap;

    .info {
        width: 170px;

        .img {
            width: 100%;
            height: 150px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .title {
            wi
            margin: 10px 0;

            span {
                color: var(--font-color);
            }
        }

        .text {
            width: 100%;
            display: flex;
            justify-content: space-around;

            .remaining {
                color: var(--font-color);
            }
        }
    }
}
</style>