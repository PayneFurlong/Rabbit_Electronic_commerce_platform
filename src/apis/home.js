import request from '@/utils/http'

// 获取 banner 轮播图
export const getBannerAPI = () => request.get('/home/banner')

// 获取新鲜好物
export const getNewAPI = () => request.get('/home/new')

// 获取人气推荐
export const getHotAPI = () => request.get('/home/hot')

// 获取所有商品列表模块
export const getGoodsAPI = () => request.get('/home/goods')
