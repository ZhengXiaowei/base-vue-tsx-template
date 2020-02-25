/*
 * @Author: ZhengXiaowei
 * @Date: 2020-02-24 19:28:06
 * @LastEditors: ZhengXiaowei
 * @LastEditTime: 2020-02-24 20:02:42
 * @Description: axios 配置
 * @FilePath: /src/api/axios.ts
 */
import axios, { AxiosResponse } from "axios";
import { baseResponse } from "./type";

// TODO 拦截器ts配置

const instance = axios.create({
  baseURL: "/api"
});

// axios 请求拦截器
instance.interceptors.request.use((config: any) => {
  return config;
});

// axios 响应拦截器
instance.interceptors.response.use(
  (res: any): AxiosResponse<baseResponse> => {
    return res;
  }
);

export default instance;
