// 封装分类数据业务相关代码
import { getCategoryAPI } from '@/apis/category'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export const useCategory = () => {
  // 数据容器
  const categoryData = ref({})
  // 获取 route 实例对象
  const route = useRoute()
  // 获取二级分类列表
  const getCategory = async (id = route.params.id) => {
    // 发送请求
    const res = await getCategoryAPI(id)
    // 存入容器
    categoryData.value = res.result
  }
  getCategory()

  // 目标：路由参数变化的时候，可以把分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    // 存在问题是：使用最新的路由参数请求最新的分类数据
    // 重新渲染二级分类列表
    getCategory(to.params.id)
  })

  return {
    categoryData
  }
}
