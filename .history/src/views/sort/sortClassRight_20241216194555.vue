<template>
    <div class="classRight">
        <h4>{{ title }}</h4>
        <div class="box">
            <template v-for="(item, index) in data">
                <div class="info">
                    <div class="img">
                        <img :src="" alt="">
                    </div>
                    <p>羽绒服</p>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getImagePath } from '@/util/getImage';
const props = defineProps({
    title: {
        type: String,
        default: () => ''
    },
    data: {
        type: Array,
        default: () => []
    }
})
</script>

<style lang="less" scoped>
.classRight {
    padding: 10px;

    .box {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .info {
            width: 84px;
            height: 100px;
            border: 1px solid black;

            .img {
                width: 100%;
                height: 70px;
                border: 1px solid black;
            }

            p {
                text-align: center;
            }
        }
    }
}
</style>