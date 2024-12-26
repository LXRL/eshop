<template>
    <div class="footer">
        <van-tabbar v-model="active">
            <van-tabbar-item to="/home">
                <span>{{  }}</span>
            </van-tabbar-item>
        </van-tabbar>

    </div>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0);

</script>

<style lang="less" scoped></style>