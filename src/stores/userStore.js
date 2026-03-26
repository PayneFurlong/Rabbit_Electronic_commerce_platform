import { getLoginAPI } from '@/apis/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'

export const useUserStore = defineStore(
  'user',
  () => {
    // 获取购物车仓库
    const cartStore = useCartStore()

    // 定义管理用户的 state
    const userInfo = ref({})

    // 定义获取接口数据的 action 函数
    const getUserInfo = async ({ account, password }) => {
      // 请求 user 信息
      const res = await getLoginAPI({ account, password })
      // 将数据存入 userInfo 中
      userInfo.value = res.result
      // 合并购物车的操作
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count
          }
        })
      )
      // 获取最新列表
      cartStore.updateNewList()
    }

    // 退出时 清除本地用户数据
    const clearUserInfo = () => {
      // 清除本地用户信息
      userInfo.value = {}
      // 清除本地购物车信息
      cartStore.clearCartList()
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
