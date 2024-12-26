<template>
    <div class="Info">
        <template v-for="(item, index) in homeImg">
            <div>
                <span>{{ item.id }}</span>
                <img :src="getImagePath(item.img)" alt="">
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import useHome from '@/store/modules/home';
import { storeToRefs } from 'pinia';


const HomeStore = useHome()
const { homeImg } = storeToRefs(HomeStore)

const getImagePath = (path) => {
    return require(`@/${path}`)
}
</script>

<style lang="less" scoped>
.Info {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 80px;

    div {
        width: 180px;
        height: 200px;
        margin-bottom: 5px;
        border: 1px solid black;
        position: relative;

        img {
            width: 100%;
            height: 100%;
        }

        span {
            position: absolute;
            left: 10px;
            top: 10px;
        }
    }
}
</style>