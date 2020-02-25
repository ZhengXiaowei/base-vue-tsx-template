/*
 * @Author: ZhengXiaowei
 * @Date: 2020-02-25 15:33:44
 * @LastEditors: ZhengXiaowei
 * @LastEditTime: 2020-02-25 16:03:46
 * @Description: system store index
 * @FilePath: /src/store/modules/system/index.ts
 */
import state from "./state";
import mutations from "./mutation";
import * as actions from "./action";
import * as getters from "./getter";

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
