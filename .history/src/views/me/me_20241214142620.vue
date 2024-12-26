<template>
    <div class="me">
      
    </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="less" scoped>
.me {
    padding: 10px;

    .header {
        width: 100%;
        padding: 10px 0;
        display: flex;
        align-items: center;

        .img {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            overflow: hidden;
            border: 1px solid black;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .text {
            display: flex;
            height: 70px;
            margin-left: 20px;
            flex-direction: column;
            justify-content: space-between;

            .icon {
                display: flex;

                div {
                    img {
                        width: 10px;
                        height: 10px;
                    }
                }

                span {
                    margin: 0 10px;
                }
            }
        }
    }
}
</style>