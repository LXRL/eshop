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
    

    div {
        margin-bottom: 10px;
        
    }
}
</style>