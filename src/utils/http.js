import axios from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import router from '@/router'

// 创建axios实例
const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
http.interceptors.request.use(
  (config) => {
    // 1. 从 Pinia 获取 token 数据
    // 获取用户信息仓库
    const userStore = useUserStore()
    // 2. 按照后端的要求拼接 token 数据
    // 存入 token
    const token = userStore.userInfo.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (e) => Promise.reject(e)
)

// axios响应式拦截器
http.interceptors.response.use(
  (res) => res.data,
  (e) => {
    // 获取用户信息仓库
    const userStore = useUserStore()
    // 统一错误提示
    ElMessage.warning(e.response.data.message)
    // 401 token 失效处理
    // 1. 清除本地数据
    if (e.response.status === 401) {
      // 清除本地用户数据
      userStore.clearUserInfo()
    }
    // 2. 跳转至登录页
    router.replace('/login')
    return Promise.reject(e)
  }
)

export default http
