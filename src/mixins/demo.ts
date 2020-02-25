/*
 * @Author: ZhengXiaowei
 * @Date: 2020-02-24 20:30:22
 * @LastEditors: ZhengXiaowei
 * @LastEditTime: 2020-02-24 20:32:09
 * @Description: mixin demo
 * @FilePath: /src/mixins/demo.ts
 */
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DemoMixin extends Vue {
  public demo: string = "demo text";
  public demoNumber: number = 1;
}
