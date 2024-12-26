<template>
    <div class="footer">
        <van-tabbar v-model="active">
            <template v-for="(item,index) in 4">
                <van-tabbar-item to="/home">
                <span>首页</span>
                <template #icon>

                </template>
            </van-tabbar-item>
            </template>
           
        </van-tabbar>

    </div>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0);

</script>

<style lang="less" scoped></style>