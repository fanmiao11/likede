import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from "@/store";
import { getToken, getTokenTime } from "@/utils/auth";
import router from "@/router";


// 判断token是否过期
function isTimeOut() {
  const currentTime = Date.now()
  const tokenTime = getTokenTime()
  const timeout = 3 * 60 * 60 * 1000
  // console.log(currentTime,tokenTime);
  // console.log(currentTime,tokenTime);
  return currentTime-tokenTime > timeout
}

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

// request interceptor 请求拦截
service.interceptors.request.use(
  async (config)=>{
    // 当前请求的配置
  // console.log(getToken());
    if(store.state.user.token){
      if (isTimeOut()) {
        await store.dispatch("user/logout");
        router.push("/login");
        return Promise.reject(new Error("登录过期"));
      } else {
        config.headers.Authorization = store.state.user.token;
      }
    }
    return config
  });

// // response interceptor 响应拦截
service.interceptors.response.use(
  (res) => {
    // if (res.config.url.indexOf("/api/user-service/user/imageCode") !== -1) {
    //   return res.data;
    // }
    if (res.config.url === "/api/user-service/user/login") {
      const { success, token, msg , userId } = res.data;
      if (success) {
        return {token , userId};
      } else {
        // 如果没有成功
        Message.error(msg);
        // console.log(msg);
        return Promise.reject(new Error(msg));
      }
    }else{
      return res.data;
    }
  },
  async (error) => {
    if(error?.response?.status === 401){
      Message.error('登录过期')
      await store.dispatch('user/logout')
      router.push('/login')
    }else{
      Message.error(error.message)
    }
    // Message.error("系统异常");
    return Promise.reject(error)
  }
);

export default service;
