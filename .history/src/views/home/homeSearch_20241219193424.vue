<template>
    <div class="search">
        <van-search v-model="searchValue" placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="onCancel" />
        <template v-for="(item, index) in res">
            <div class="info" @click="goToDetail(item.id)">
                <div class="img"><img :src="getImagePath(item.image)" alt=""></div>
                <p class="title"> {{ item.name }}</p>
                <div class="text">
                    <div class="price">￥{{ item.price }}</div>
                    <div class="remaining">{{ item.remainder }}</div>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getSortP } from '@/service';
import { useRouter } from 'vue-router';


const searchValue = ref('')
const onSearch = async () => {
    try {
        const response = await getSortP({ name: searchValue.value })
        console.log(response)
    } catch (error) {
        console.log('Search error', error)
    }
}
const router = useRouter()
const onCancel = () => {
    router.back()
}
</script>

<style lang="less" scoped></style>