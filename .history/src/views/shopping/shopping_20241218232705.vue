<template>
    <van-nav-bar title="购物车" />
    <div class="shopping">
        <table>
            <tbody>
                <tr v-for="(item, index) in shoppingData">
                    <td class="button">
                        <input type="checkbox" v-model="item.choose">
                    </td>
                    <td class="img"><img :src="getImagePath(item.image)" alt=""></td>
                    <td class="text">
                        <h4 class="name">{{ item.name }}</h4>
                        <p class="message">{{ item.message }}</p>
                        <p class="price">￥{{ item.price }}</p>
                    </td>
                    <td class="quantity">
                        <button @click="decreaseQuantity(item)">-</button>
                        <span class="num">{{ item.num }}</span>
                        <button @click="increaseQuantity(item)">+</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="total">
            <div class="left">
                <input type="checkbox" v-model="selectAll" @change="toggleSelectAll()"> <span class="text">全选</span>
            </div>
            <div class="right">
                <span class="text">合计:</span>
                <span class="price">￥{{ calculateTotal() }}</span>
                <button>结算</button>
                <button @click="shoppingDelete()">删除</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import useShopping from '@/store/modules/shopping';
import { storeToRefs } from 'pinia';
import { getImagePath } from '@/util/getImage';
import { getShoppingDelete } from '@/service';
import { getShoppingMod } from '@/service';
const ShoppingStore = useShopping()
const { shoppingData } = storeToRefs(ShoppingStore)
ShoppingStore.fetchAllShoppingData()

const bloot = ref(0)

// 增加数量
const increaseQuantity = async (item) => {
    item.num++;
    await updateItem(item)
};

// 减少数量
const decreaseQuantity = async (item) => {
    if (item.num > 1) item.num--;
    await updateItem(item)
};

const selectAll = ref(false)
// 全选功能
const toggleSelectAll = () => {
    shoppingData.value.forEach(item => {
        item.choose = selectAll.value;
    });
};

// 计算合计金额
const calculateTotal = () => {
    return shoppingData.value.reduce((total, item) => {
        return total + (item.choose ? item.price * item.num : 0);
    }, 0);
};

// 删除选中的商品
const shoppingDelete = () => {
    // 确认删除
    const confirmDelete = confirm('确定要删除选中的商品吗？');
    if (confirmDelete) {
        // 过滤掉选中的商品
        shoppingData.value = shoppingData.value.filter(item => !item.choose);
    }
};

// 更新数据库中的商品信息
const updateItem = async (item) => {
    try {
        const response = await getShoppingMod(item)
        console.log("修改成功")
        src / views / shopping / shopping.vue
    } catch (error) {
        console.error('更新商品失败:', error);
    }
};
</script>

<style lang="less" scoped>
.shopping {
    padding: 10px;
    background-color: #f5f5f5;

    table {
        width: 100%;
        border-collapse: collapse;

        tbody {
            tr {
                width: 100%;
                display: flex;
                align-items: center;
                padding: 10px;
                background-color: #fff;
                margin-bottom: 10px;
                border-radius: 8px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                transition: background-color 0.3s;
                box-sizing: border-box;

                &:hover {
                    background-color: #f9f9f9;
                }

                .button {
                    input {
                        width: 20px;
                        height: 20px;
                    }
                }

                .img {
                    width: 70px;
                    height: 70px;
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    overflow: hidden;
                    margin: 0 10px;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }

                .text {
                    flex: 1;
                    margin: 0 10px;

                    .name {
                        font-size: 1.1em;
                        font-weight: bold;
                        color: #333;
                    }

                    .message {
                        color: #666;
                        margin: 5px 0;
                    }

                    .price {
                        color: #E74C3C;
                        font-weight: bold;
                    }
                }

                .quantity {
                    display: flex;
                    align-items: center;

                    button {
                        padding: 5px 10px;
                        background-color: #e0e0e0;
                        border-radius: 50%;
                        color: #333;
                        border: none;
                        cursor: pointer;
                        transition: background-color 0.3s;

                        &:hover {
                            background-color: #d1d1d1;
                        }
                    }

                    span {
                        margin: 0 10px;
                        font-weight: bold;
                    }
                }
            }
        }
    }

    .total {
        display: flex;
        position: fixed;
        bottom: 50px;
        left: 0;
        width: 100%;
        padding: 10px;
        background-color: #fff;
        align-items: center;
        box-sizing: border-box;
        border-top: 1px solid #e0e0e0;

        .left {
            display: flex;
            align-items: center;

            input {
                width: 20px;
                height: 20px;
                border: 1px solid #19A9FC;
            }

            .text {
                margin-left: 10px;
                color: #333;
            }
        }

        .right {
            margin-left: auto;
            display: flex;
            align-items: center;

            .price {
                color: #FE6202;
                font-weight: bold;
                margin: 0 10px;
            }

            button {
                background-color: #FE6202;
                padding: 10px 20px;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s;
                margin-left: 10px;

                &:hover {
                    background-color: #d95a02;
                }
            }
        }
    }
}
</style>