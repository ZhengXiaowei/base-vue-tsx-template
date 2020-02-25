/*
 * @Author: ZhengXiaowei
 * @Date: 2020-02-25 15:35:13
 * @LastEditors: ZhengXiaowei
 * @LastEditTime: 2020-02-25 17:08:14
 * @Description: system mutation
 * @FilePath: /src/store/modules/system/mutation.ts
 */
import type from "./mutation-type";
import { SystemState, SystemGetterUser } from "@/types/store-system";

const mutations = {
  [type.SET_USER_INFO as string](
    state: SystemState<SystemGetterUser>,
    user: Object
  ) {
    state.user = user;
  }
};

export default mutations;
