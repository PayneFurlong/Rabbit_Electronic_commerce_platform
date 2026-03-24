import { defineStore } from 'pinia'
import { ref } from 'vue'

// 购物车数据
export const useCartStore = defineStore(
  'cart',
  () => {
    // 1. 定义 state
    const cartList = ref([])

    // 2. 定义 action
    const addCart = (goods) => {
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

    // 删除购物车条目
    const delCart = (skuId) => {
      // 思路：
      // 1. 找到要删除项的下标值 - splice
      // const idx = cartList.value.findIndex((item) => item.skuId === skuId)
      // cartList.value.splice(idx, 1)
      // 2. 使用数组的过滤方法 - filter
      cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
    }

    return {
      cartList,
      addCart,
      delCart
    }
  },
  {
    persist: true
  }
)
