<template>
    <div class="detail">
        <h2>detail Vue</h2>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const data = router.params.item
</script>

<style lang="less" scoped></style>