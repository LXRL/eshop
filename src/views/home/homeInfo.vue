<template>
    <div class="Info">
        <template v-for="(item, index) in homeImg">
            <div>
                <img :src="getImagePath(item.img)" alt="">
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getImagePath } from '@/util/getImage';
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
    margin-bottom: 50px;

    div {
        width: 180px;
        height: 200px;
        margin-bottom: 20px;
        position: relative;
        border-radius: 10px;
        overflow: hidden;

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