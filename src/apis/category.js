import request from '@/utils/http'

// 获取二级分类列表
export const getCategoryAPI = (id) =>
  request.get('/category', {
    params: {
      id
    }
  })
