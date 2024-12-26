<template>
    <div class="Info">
        111
        <template v-for="(item, index) in homeImg">
            <div>
                <span>{{ item.id }}</span>
                <img src="" alt="">
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import useHome from '@/store/modules/home';
import { storeToRefs } from 'pinia';

onMounted(() => {
    HomeStore.fetchAllHomeImgData();
});
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