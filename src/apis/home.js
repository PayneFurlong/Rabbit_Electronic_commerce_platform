import http from '@/utils/http'

// 获取 banner 轮播图
export const getBannerAPI = () => http.get('/home/banner')
