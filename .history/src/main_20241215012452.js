import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from "./router/indes"
import './assets/css/index.css'

createApp(App).use(router).mount('#app')
