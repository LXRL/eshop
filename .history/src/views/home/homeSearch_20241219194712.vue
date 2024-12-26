<template>
    <div class="search">
        <van-search v-model="searchValue" placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="onCancel" />
        <template v-for="(item, index) in searchData?.data">
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
import { getImagePath } from '@/util/getImage';

const searchData = ref([])
const searchValue = ref('')
const onSearch = async () => {
    try {
        const response = await getSortP({ name: searchValue.value })
        searchData.value = response
        console.log(searchData.value)
    } catch (error) {
        console.log('Search error', error)
    }
}
const router = useRouter()
const onCancel = () => {
    router.back()
}

const goToDetail = (id) => {
    router.push(`/shoppingDetail/${id}`); // 只传递 ID
};
</script>

<style lang="less" scoped>

</style>