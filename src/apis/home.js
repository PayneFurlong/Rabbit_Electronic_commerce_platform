import request from '@/utils/http'

// 获取 banner 轮播图
export const getBannerAPI = (params = {}) => {
  // 默认值为 1，商品为 2
  const { distributionSite = '1' } = params
  // 发送请求
  return request.get('/home/banner', {
    params: {
      distributionSite
    }
  })
}

// 获取新鲜好物
export const getNewAPI = () => request.get('/home/new')

// 获取人气推荐
export const getHotAPI = () => request.get('/home/hot')

// 获取所有商品列表模块
export const getGoodsAPI = () => request.get('/home/goods')
