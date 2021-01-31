import axios from 'axios'
import baseUrl from '../api/config'
import qs from 'qs'
import { Message } from 'element-ui'
import router from '@/router/index.js'

const require = axios.create({
  baseURL: baseUrl,
  time: 1000 * 60
})

require.defaults.responseType = 'json'
// 表示跨域请求时是否需要使用凭证
require.defaults.withCredentials = true
//  `transformRequest` 允许在向服务器发送前，修改请求数据
require.defaults.transformRequest = [
  data => {
    return qs.stringify(data)
  }
]
// `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
// 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
require.defaults.validateStatus = function () {
  return true
}

// 请求拦截器
require.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 请求拦截器
require.interceptors.response.use(
  res => {
    const { data, status } = res
    if (status === 200) {
      return Promise.resolve(data)
    } else if (status === 301) {
      Message.error('请登录')
      router.replace('/login')
    } else {
      return Promise.reject(res)
    }
  }
)

export default require
