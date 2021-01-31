let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
  // baseUrl = 'http://localHost:3000'
  baseUrl = '/api' // 为了跨域
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://nicemusic-api.lxhcool.cn/'
}
export default baseUrl
