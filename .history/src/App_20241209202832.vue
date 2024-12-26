<template>
    <div class="Vue">
        <router-view></router-view>

        <router-link to="/home">首页</router-link>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const footerData=ref([
    {
        name:'首页',
        
    }
])
</script>

<style lang="less" scoped></style>