import request from '@/utils/http'

// 请求头部导航列表
export const getCategoryAPI = () => request.get('/home/category/head')
