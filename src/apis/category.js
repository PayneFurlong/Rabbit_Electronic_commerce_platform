import request from '@/utils/http'

// 获取二级分类列表
export const getCategoryAPI = (id) =>
  request.get('/category', {
    params: {
      id
    }
  })

// 获取二级分类列表数据 id 为分类 id
export const getCategoryFilterAPI = (id) =>
  request.get('/category/sub/filter', {
    params: {
      id
    }
  })

// 获取导航数据
/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) =>
  request.post('/category/goods/temporary', data)
