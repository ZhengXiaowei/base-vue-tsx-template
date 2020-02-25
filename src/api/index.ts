/*
 * @Author: ZhengXiaowei
 * @Date: 2020-02-24 19:03:56
 * @LastEditors: ZhengXiaowei
 * @LastEditTime: 2020-02-25 17:38:20
 * @Description: api
 * @FilePath: /src/api/index.ts
 */

// mock api
export const demoApi = () => {
  return new Promise(resolve => {
    resolve("back data");
  });
};
