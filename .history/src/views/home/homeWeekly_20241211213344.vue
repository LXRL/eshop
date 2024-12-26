<template>
    <div class="homeWeekly">
        <van-nav-bar title="每周上新" left-arrow @click-left="onClickLeft" />
        <div class="info">
            <template v-for>
                <div>
                    
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const onClickLeft = () => {
    router.back()
}
</script>

<style lang="less" scoped>

</style>