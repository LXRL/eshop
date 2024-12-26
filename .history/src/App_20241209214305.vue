<template>
    <div class="Vue">
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Footer from './components/footer.vue';

</script>

<style lang="less" scoped>
Footer {
    display: flex;
    bottom: 0;
    left: 0;
}
</style>