<template>
    <div class="Info">
        <template v-for="(item, index) in 4">
            <div>
                <span></span>
                <img src="" alt="">
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="less" scoped>
.Info {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    div {
        width: 190px;
        height: 50px;
        margin-bottom: 10px;
        border: 1px solid ;
    }
}
</style>