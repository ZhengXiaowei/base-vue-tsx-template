/*
 * @Author: ZhengXiaowei
 * @Date: 2020-02-25 15:46:07
 * @LastEditors: ZhengXiaowei
 * @LastEditTime: 2020-02-25 15:48:55
 * @Description: system action
 * @FilePath: /src/store/modules/system/action.ts
 */
import type from "./mutation-type";
import { Commit } from "vuex";

const store = window.localStorage;

export const userLogin = async (context: { commit: Commit }, user: object) => {
  context.commit(type.SET_USER_INFO as string, user);
  store.setItem("user", JSON.stringify(user));
};
