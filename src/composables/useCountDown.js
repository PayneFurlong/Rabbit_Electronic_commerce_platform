// 封装倒计时逻辑函数
import { ref, computed, onUnmounted } from 'vue'
import dayjs from 'dayjs'

export const useCountDown = () => {
  // 定时器声明
  let timer = null
  // 1. 响应式数据
  const time = ref(0)
  // 格式化时间为 xx 分 xx 秒
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  // 2. 开启倒计时的函数
  const start = (currentTime) => {
    // 开启倒计时的逻辑
    // 核心逻辑：每隔 1s 倒计时减一
    time.value = currentTime
    timer = setInterval(() => {
      time.value--
    }, 1000)
    // 倒计时为 0 时清除定时器
    if (time.value <= 0) {
      clearInterval(timer)
    }
  }
  // 组件销毁时清除定时器
  onUnmounted(() => {
    timer && clearInterval(timer)
  })
  return {
    formatTime,
    start
  }
}
