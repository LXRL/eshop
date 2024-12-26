<template>
    <div class="Vue">
        <router-view></router-view>
        <Footer clas></Footer>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Footer from './components/footer.vue';

</script>

<style lang="less" scoped>
Footer {}
</style>