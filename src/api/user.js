import request from '@/utils/request'

/**
 * 获取验证码图片
 * @param {Number} clientToken 随机数
 * @returns Promise
 */
export function getimageCode(clientToken){
  return request({
    url: `/api/user-service/user/imageCode/${clientToken}`,
    responseType:'blob'
  });
}

/**
 * 登录判断
 * @param {Object} data 
 * @returns Prommise
 */
export function login(data) {
  return request({
    url: "/api/user-service/user/login",
    method: "post",
    data,
  });
}

// export function getInfo(token) {
//   return request({
//     url: '/vue-admin-template/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

// export function logout() {
//   return request({
//     url: '/vue-admin-template/user/logout',
//     method: 'post'
//   })
// }
