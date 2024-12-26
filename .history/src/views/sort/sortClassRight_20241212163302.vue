<template>
    <div class="classRight">
        h4
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    data: {
        type: Array,
        default: () => []
    }
})
</script>

<style lang="less" scoped></style>