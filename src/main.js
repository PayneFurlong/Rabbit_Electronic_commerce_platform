import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import piniaPlugin from 'pinia-plugin-persistedstate'

// 引入初始化样式文件
import '@/styles/common.scss'

// 引入懒加载指令插件并注册
import { lazyPlugin } from './directives'

// 引入全局组件插件并注册
import { componentsPlugin } from '@/components/index'

const app = createApp(App)

const pinia = createPinia()
// 注册持久化插件
pinia.use(piniaPlugin)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentsPlugin)
app.mount('#app')
