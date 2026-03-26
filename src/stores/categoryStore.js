import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryAPI } from '@/apis/Layout'

export const useCategoryStore = defineStore('category', () => {
  // 导航列表数据
  // 声明空数据用于存放请求回来的数据
  const categoryList = ref([])

  // 获取导航数据的方法
  const getCategory = async () => {
    // 请求数据
    const res = await getCategoryAPI()
    // 将数据存放于容器中
    categoryList.value = res.result
  }

  return {
    categoryList,
    getCategory
  }
})
