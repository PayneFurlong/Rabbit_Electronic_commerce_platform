import request from '@/utils/http'

// 获取订单详情
export const getCheckInfoAPI = () => request.get('/member/order/pre')
