import request from '@/utils/http'

// 请求登录
export const getLoginAPI = (data) => request.post('/login', data)
