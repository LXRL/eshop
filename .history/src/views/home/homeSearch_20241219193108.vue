<template>
    <div class="search">
        <van-search v-model="searchValue" placeholder="请输入搜索关键词" @search="onSearch" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {}

const searchValue = ref('')
const onSearch = async () => {
    try {
        const response = await getSortP({ name: searchValue.value })
        console.log(response)
    } catch (error) {
        console.log('Search error', error)
    }
}
</script>

<style lang="less" scoped></style>