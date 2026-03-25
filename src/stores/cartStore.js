import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from './user'
import { getNewCartListAPI, insertCartAPI } from '@/apis/cart'

// 购物车数据
export const useCartStore = defineStore(
  'cart',
  () => {
    // 获取用户数据仓库
    const userStore = useUserStore()
    // 获取 token 用来判断是否登录
    const isLogin = computed(() => userStore.userInfo.token)

    // 1. 定义 state
    const cartList = ref([])

    // 2. 定义 action
    const addCart = async (goods) => {
      const { skuId, count } = goods
      if (isLogin.value) {
        // 登录之后加入购物车
        await insertCartAPI({ skuId, count })
        // 获取最新的购物车列表
        const res = await getNewCartListAPI()
        // 覆盖 cartList
        cartList.value = res.result
      } else {
        // 添加购物车操作
        // 已经添加过为 count + 1
        // 没有添加过为 直接 push 进数组
        // 思路: 通过匹配传递过来的商品对象中的 skuId
        //      能不能再 cartList 中找到，找到了就是添加过
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
          // 找到了 直接 count++
          item.count += goods.count
        } else {
          // 没找到 直接 push 进数组
          cartList.value.push(goods)
        }
      }
    }

    // 删除购物车条目
    const delCart = (skuId) => {
      // 思路：
      // 1. 找到要删除项的下标值 - splice
      // const idx = cartList.value.findIndex((item) => item.skuId === skuId)
      // cartList.value.splice(idx, 1)
      // 2. 使用数组的过滤方法 - filter
      cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
    }

    // 单选功能
    const singleCheck = (skuId, selected) => {
      // 通过skuId找到要修改的那一项，然后把它的selected修改为传过来的selected
      cartList.value.find((item) => item.skuId === skuId).selected = selected
    }

    // 全选功能 set
    // 将 cartList 中每一项的 selected 都设置为当前的全选框状态
    const setAllCheck = (value) =>
      cartList.value.forEach((item) => (item.selected = value))

    // 计算属性
    // 1. 总的数量 所有项的 count 之和
    const totalCount = computed(() =>
      cartList.value.reduce((sum, item) => sum + item.count, 0)
    )
    // 2. 总的价格 所有项的 count * price 之和
    const totalPrice = computed(() =>
      cartList.value.reduce((sum, item) => sum + item.count * item.price, 0)
    )
    // 全选功能 get
    const getAllCheck = computed(() =>
      cartList.value.every((item) => item.selected)
    )
    // 已选择的商品总数
    const allCount = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((sum, item) => sum + item.count, 0)
    )
    // 已选择的商品总价
    const allPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((sum, item) => sum + item.count * item.price, 0)
    )

    return {
      cartList,
      addCart,
      delCart,
      totalCount,
      totalPrice,
      singleCheck,
      getAllCheck,
      setAllCheck,
      allCount,
      allPrice
    }
  },
  {
    persist: true
  }
)
