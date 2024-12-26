<template>
    <div class="grid">
        <van-grid>
            <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" to="/homeWeekly" />
        </van-grid>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const list = ref([
    {
        path: '/homeWeekly'
    }
])

</script>

<style lang="less" scoped>
.grid {
    margin: 10px 0;
}
</style>