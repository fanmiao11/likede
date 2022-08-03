import Cookies from 'js-cookie'

const TokenKey = 'likede_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 封装token时间戳
export function setTokenTime(){
  return Cookies.set('TokenTime',Date.now())
}

export function getTokenTime(){
  return Cookies.get('TokenTime')
}
