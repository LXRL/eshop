import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'
import pinia from './store/'

import router from "./router/indes"

import './assets/css/index.css'

createApp(App).use(router).use().mount('#app')
