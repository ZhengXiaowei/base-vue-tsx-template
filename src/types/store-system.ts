/*
 * @Author: ZhengXiaowei
 * @Date: 2020-02-25 17:07:21
 * @LastEditors: ZhengXiaowei
 * @LastEditTime: 2020-02-25 17:11:49
 * @Description: system store type
 * @FilePath: /src/types/store-system.ts
 */
export interface SystemState<T> {
  roles: Array<string>;
  user: T;
}

export interface SystemMutationType {
  SET_USER_INFO: String;
}

export interface SystemGetterUser {
  name?: String;
  phone?: String;
}
