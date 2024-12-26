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
    height: 98vh;
    padding: 30px;
    padding-bottom: 0px;
    background-color: #f9f9f9;
    text-align: center;
}

h1 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}

.form-group {
    margin-bottom: 15px;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    transition: border-color 0.3s;
}

input:focus {
    border-color: #007bff;
    outline: none;
}

button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}

.error {
    color: red;
    margin-top: 10px;
}

.register-link {
    margin-top: 20px;
    font-size: 14px;
}

.register-link a {
    color: #007bff;
    text-decoration: none;
}

.register-link a:hover {
    text-decoration: underline;
}
</style>