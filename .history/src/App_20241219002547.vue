<template>
    <div class="Vue">
        <router-view></router-view>
        <Footer v-show="!router.meta.hideTab"></Footer>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Footer from './components/footer.vue';
import router from './router/indes';

</script>

<style lang="less" scoped>
Footer {
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>