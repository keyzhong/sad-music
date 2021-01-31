import require from '../utils/require'
/**
 * @method 手机登录
 * @params phone
 * @params password
 */
export const login = (phone, password) => {
  return require.get(`/login/cellphone?phone=${phone}&password=${password}`)
}

/**
 * @method 获取用户详情
 * @params id
 */
export const getUserInfo = (userId) => {
  return require.get(`/user/detail?uid=${userId}`)
}
