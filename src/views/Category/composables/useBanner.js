// 封装 banner 轮播图相关的业务代码
import { ref } from 'vue'
import { getBannerAPI } from '@/apis/home'

export const useBanner = () => {
  // banner 列表容器
  const bannerList = ref([])
  // 获取 banner 列表
  const getBanner = async () => {
    // 发送请求
    const res = await getBannerAPI({ distributionSite: '2' })
    // 存入 bannerList
    bannerList.value = res.result
  }
  getBanner()

  return {
    bannerList
  }
}
