/*
 * @Author: ZhengXiaowei
 * @Date: 2020-02-25 15:30:30
 * @LastEditors: ZhengXiaowei
 * @LastEditTime: 2020-02-25 17:10:26
 * @Description: system state
 * @FilePath: /src/store/modules/system/state.ts
 */
import { SystemState, SystemGetterUser } from "@/types/store-system";

const store = window.localStorage;

const state: SystemState<SystemGetterUser> = {
  roles: [],
  user: JSON.parse(store.getItem("user") || "{}")
};

export default state;
