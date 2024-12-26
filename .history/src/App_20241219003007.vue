<template>
    <div class="Vue">
        <router-view></router-view>
        <Footer v-show="!router.meta.hideTabBar"></Footer>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Footer from './components/footer.vue';
import router from './router/indes';
import { useRoute } from 'vue-router';
const router=useR
</script>

<style lang="less" scoped>
Footer {
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>