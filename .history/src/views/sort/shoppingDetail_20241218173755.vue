<template>
    <div class="detail">
        <h2>detail Vue</h2>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import useSort from '@/store/modules/sort';
import { storeToRefs } from 'pinia';
import { getImagePath } from '@/util/getImage';

const sortStore = useSort()
const { sortShop } = storeToRefs(sortStore)
sortStore.fetchAllSortShopData()

const route = useRoute()
const data = sortShop.value.filter(item=> item)


</script>

<style lang="less" scoped></style>