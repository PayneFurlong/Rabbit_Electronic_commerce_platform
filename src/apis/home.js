import http from '@/utils/http'

// 获取 banner 轮播图
export const getBannerAPI = () => http.get('/home/banner')

// 获取新鲜好物
export const getNewAPI = () => http.get('/home/new')
