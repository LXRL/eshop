<template>
    <div class="Info">
        <template v-for="(item, index) in 4">
            <div>
                <span></span>
                <img src="" alt="">
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import axios from 'axios';
// onMounted(() => {
//     axios.get("http://localhost:8888/home/img").then(res => {
//         console.log(res)
//     }).catch(error => {
//         console.error("Error fetching data:", error);
//     });
// })
import useHome from '@/store/modules/home';
import { storeToRefs } from 'pinia';

const HomeStore = useHome()
const { homeImg } = storeToRefs(HomeStore)
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
        margin-bottom: 10px;
        border: 1px solid black;

    }
}
</style>