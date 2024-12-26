<template>
    <div class="Vue">
        <router-view></router-view>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import foo
const footerData = ref([
    {
        name: '首页',
        path: '/home'
    }
])
</script>

<style lang="less" scoped></style>