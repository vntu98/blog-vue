import { createApp } from 'vue'
import App from './App.vue'
import './assets/app.css'
import router from './router'
import axios from 'axios'
import store from './store'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

store.dispatch('authenticate')
createApp(App).use(router).use(store).mount('#app')
