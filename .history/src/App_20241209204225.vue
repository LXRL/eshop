<template>
    <div class="Vue">
        <router-view></router-view>

        <div class="footer">
            
            <router-link to="/home">首页</router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const footerData=ref([
    {
        name:'首页',
        path:'/home'
    }
])
</script>

<style lang="less" scoped></style>