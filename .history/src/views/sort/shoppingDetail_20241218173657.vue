<template>
    <div class="detail">
        <h2>detail Vue</h2>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

import { storeToRefs } from 'pinia';
import { getImagePath } from '@/util/getImage';

import { useRouter } from 'vue-router';
const route = useRoute()
const data = route.params.id

const sortStore = useSort()
const { sortShop } = storeToRefs(sortStore)
sortStore.fetchAllSortShopData()

</script>

<style lang="less" scoped></style>