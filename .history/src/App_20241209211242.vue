<template>
    <div class="Vue">
        <router-view></router-view>
        
    </div>
</template>

<script setup>
import { ref } from 'vue'
import footer from './components/footer.vue';
const footerData = ref([
    {
        name: '首页',
        path: '/home'
    }
])
</script>

<style lang="less" scoped></style>