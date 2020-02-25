/*
 * @Author: ZhengXiaowei
 * @Date: 2020-02-24 19:54:19
 * @LastEditors: ZhengXiaowei
 * @LastEditTime: 2020-02-24 20:01:50
 * @Description: api返回type定义
 * @FilePath: /src/api/type.ts
 */

// 接口返回的基本格式
export interface baseResponse {
  code: number;
  data: any;
  msg: string;
}
