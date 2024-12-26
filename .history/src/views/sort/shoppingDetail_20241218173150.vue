<template>
    <div class="detail">
        <h2>detail Vue</h2>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const data = router.params.item

onMounted(() => {
    // 这里假设你传递的 item 是一个 JSON 字符串
    item.value = JSON.parse(route.params.item); // 如果是 JSON 字符串
});
</script>

<style lang="less" scoped></style>