import http from '@/utils/http'

export const getBannerAPI = () => http.get('/home/banner')
