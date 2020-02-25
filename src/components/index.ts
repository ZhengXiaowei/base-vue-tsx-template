/*
 * @Author: ZhengXiaowei
 * @Date: 2020-02-24 18:30:57
 * @LastEditors: ZhengXiaowei
 * @LastEditTime: 2020-02-24 20:22:53
 * @Description: 组件入口文件
 * @FilePath: /src/components/index.ts
 */

import Vue from "vue";
import { Button } from "vant";

import ZButton from "./Button/Button";

Vue.use(Button);

Vue.component(ZButton.name, ZButton);
