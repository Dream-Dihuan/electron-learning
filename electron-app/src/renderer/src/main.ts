import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import router from './router'

//2.3 引入pinia
import { createPinia } from 'pinia'
//2.3 pinia持久化
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist)

app.use(router).use(store).mount('#app')

// 3.1 引入icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
