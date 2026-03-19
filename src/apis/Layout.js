import http from '@/utils/http'

// 请求头部导航列表
export const getCategoryAPI = () => http.get('/home/category/head')
