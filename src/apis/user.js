import request from '@/utils/http'

// 请求登录
export const getLoginAPI = (data) => request.post('/login', data)

// 请求猜你喜欢数据
export const getLikeListAPI = (limit = 4) =>
  request.get('/goods/relevant', {
    params: {
      limit
    }
  })
