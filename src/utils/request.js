import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from "@/store";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

// request interceptor 请求拦截
service.interceptors.request.use(
  (config)=>{
    // 当前请求的配置
    // console.log(config);
    if(store.state.user.token){
      config.headers.Authorization = store.state.user.token
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
  (error) => {
    Message.error("系统异常");
    return Promise.reject(new Error(error));
  }
);

export default service;
