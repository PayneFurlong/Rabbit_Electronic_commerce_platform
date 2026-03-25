import request from '@/utils/http'

// 加入购物车
export const insertCartAPI = (data) => request.post('/member/cart', data)

// 获取最新的购物车列表
export const getNewCartListAPI = () => request.get('/member/cart')
