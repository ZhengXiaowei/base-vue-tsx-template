/*
 * @Author: ZhengXiaowei
 * @Date: 2020-02-25 15:51:38
 * @LastEditors: ZhengXiaowei
 * @LastEditTime: 2020-02-25 17:08:25
 * @Description: system getter
 * @FilePath: /src/store/modules/system/getter.ts
 */
import { SystemState, SystemGetterUser } from "@/types/store-system";

export const userInfo = (state: SystemState<SystemGetterUser>) => {
  let user = state.user;
  if (user && typeof user === "string") user = JSON.parse(user);
  return user;
};
