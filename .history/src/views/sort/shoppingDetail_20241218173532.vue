<template>
    <div class="detail">
        <h2>detail Vue</h2>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute()
const data = route.params.id

</script>

<style lang="less" scoped></style>