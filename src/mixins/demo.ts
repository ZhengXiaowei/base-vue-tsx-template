/*
 * @Author: ZhengXiaowei
 * @Date: 2020-02-24 20:30:22
 * @LastEditors: ZhengXiaowei
 * @LastEditTime: 2020-02-26 16:17:22
 * @Description: mixin demo
 * @FilePath: /src/mixins/demo.ts
 */
import { Component, Vue } from "vue-property-decorator";

// 要做声明，不然引入后会识别不到方法
declare module "vue/types/vue" {
  interface Vue {
    demo: string;
    demoNumber: number;
    demoMixin(): void;
  }
}

@Component
export default class DemoMixin extends Vue {
  public demo: string = "demo text";
  public demoNumber: number = 1;

  public demoMixin() {
    console.log("mixin");
  }
}
