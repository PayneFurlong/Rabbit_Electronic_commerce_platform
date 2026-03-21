import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useIntersectionObserver } from '@vueuse/core'
// 引入初始化样式文件
import '@/styles/common.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 定义全局指令
app.directive('img-lazy', {
  mounted(el, binding) {
    // el:指令绑定的那个元素 img
    // binding: binding.value 指令等于号后面绑定的表达式的值 图片url
    useIntersectionObserver(el, ([entry]) => {
      // 如果监测到图片进入视口时
      if (entry.isIntersecting) {
        // img 元素的 src 就会被赋值 为等号后面的地址
        el.src = binding.value
      }
    })
  }
})
