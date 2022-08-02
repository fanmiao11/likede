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

export function getInfo(id) {
  return request({
    url: `/api/user-service/user/${id}`,
  });
}

