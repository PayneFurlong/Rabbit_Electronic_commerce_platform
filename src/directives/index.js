// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    // 懒加载指令逻辑
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el:指令绑定的那个元素 img
        // binding: binding.value 指令等于号后面绑定的表达式的值 图片url
        const { stop } = useIntersectionObserver(el, ([entry]) => {
          // 如果监测到图片进入视口时
          if (entry.isIntersecting) {
            // img 元素的 src 就会被赋值 为等号后面的地址
            el.src = binding.value
            // 元素更新后停止监听
            stop()
          }
        })
      }
    })
  }
}
