<template>
    <div class="detail" v-if="data">
        <template v-for="(item, index) in data">
            <img :src="getImagePath(item.image)" alt="">
            <div class="text">
                <h3>{{ item.name }}</h3>
                <p>{{ item.price }}</p>
                <p>{{ item.remainder }}</p>
            </div>
        </template>
        <div class="footer">
            <div class="left">
                <div>
                    <img src="@/assets/images/me/客服.png" alt="">
                    <p>客服</p>
                </div>
                <div>
                    <img src="@/assets/images/footer/" alt="">
                    <p>购物车</p>
                </div>
            </div>
        </div>
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
const data = sortShop.value.filter(item => item.id == route.params.id)
console.log(data)

</script>

<style lang="less" scoped>
.detail {
    img {
        width: 100%;
    }
}
</style>