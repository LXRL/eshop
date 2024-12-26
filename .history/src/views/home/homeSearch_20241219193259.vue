<template>
    <div class="search">
        <van-search v-model="searchValue" placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="onCancel" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getSortP } from '@/service';

const searchValue = ref('')
const onSearch = async () => {
    try {
        const response = await getSortP({ name: searchValue.value })
        console.log(response)
    } catch (error) {
        console.log('Search error', error)
    }
}
const router
const onCancel=()=>{

}
</script>

<style lang="less" scoped></style>