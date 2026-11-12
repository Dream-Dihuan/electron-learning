import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

//2.3 引入pinia
import { createPinia } from 'pinia'
//2.3 pinia持久化
import piniaPluginPersist from 'pinia-plugin-persist'
const store = createPinia()
store.use(piniaPluginPersist)
createApp(App).use(router).use(store).mount('#app')
