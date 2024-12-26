<template>
    <div class="sortClass">
        <div class="left">
            <van-sidebar v-model="active">
                <van-sidebar-item v-for="(item, index) in categories" @click="scrollTo(index)" :key="index"
                    :title="item" />
            </van-sidebar>
        </div>
        <div class="right" v-if="activeClassData.length">
            <div v-for="(item, index) in activeClassData" :key="index" ref="sortItems" class="sort-item">
                <sort-class-right :title="item.title" :data="item.data" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import sortClassRight from './sortClassRight.vue';
import useSort from '@/store/modules/sort';
import { storeToRefs } from 'pinia';

const active = ref(0);

const sortStore = useSort();
const { sortClassData } = storeToRefs(sortStore);
sortStore.fetchAllSortClassData();

const categories = [
    "手机数码",
    "服饰",
    "百货日常",
    "户外运动",
    "食品",
    "水果"
];

const activeClassData = computed(() => {
    return categories.map(category => ({
        title: category,
        data: sortClassData.value.filter(item => item.shopclass === category)
    }));
});

const sortItems = ref([])
const scrollTo = (index) => {
    if (sortItems.value[index]) {
        sortItems.value[index].scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<style lang="less" scoped>
.sortClass {
    display: flex;

    .left {
        width: 80px;
        background-color: #F7F8FA;
    }

    .right {
        flex: 1;
        height: 100vh;
        margin-left: auto;
        overflow-y: auto;
        margin-bottom: 60px;
    }
}
</style>