<template>
    <div class="login-container">
        <h1>登录</h1>
        <form>
            <div class="form-group">
                <label for="username">用户名</label>
                <input type="text" v-model="username" id="username" required />
            </div>
            <div class="form-group">
                <label for="password">密码</label>
                <input type="password" v-model="password" id="password" required />
            </div>
            <button type="submit">登录</button>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const errorMessage = ref('');

const handleLogin = () => {
    // Mock login logic
    if (username.value === 'admin' && password.value === 'password') {
        alert('登录成功');
        // 这里可以添加重定向到主页的逻辑
    } else {
        errorMessage.value = '用户名或密码错误';
    }
};
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.error {
    color: red;
    margin-top: 10px;
}
</style>