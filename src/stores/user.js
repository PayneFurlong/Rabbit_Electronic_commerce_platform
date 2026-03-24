import { getLoginAPI } from '@/apis/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    // 定义管理用户的 state
    const userInfo = ref({})

    // 定义获取接口数据的 action 函数
    const getUserInfo = async ({ account, password }) => {
      // 请求 user 信息
      const res = await getLoginAPI({ account, password })
      // 将数据存入 userInfo 中
      userInfo.value = res.result
    }

    // 退出时 清除本地用户数据
    const clearUserInfo = () => {
      userInfo.value = {}
    }

    // 以对象的形式将 state 和 action 返回出去
    return {
      userInfo,
      getUserInfo,
      clearUserInfo
    }
  },
  {
    persist: true
  }
)
