import classNames from "classnames/bind";
import * as tsc from "vue-tsx-support";
import { Component, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";

import { SystemGetterUser } from "@/types/store-system";
import { api } from "@/decorator";
import { demoApi } from "@/api";

import styles from "./button.module.scss";

const cx = classNames.bind(styles);
const systemStore = namespace("system");

export enum BType {
  default = "default",
  primary = "primary"
}

interface ButtonProps {
  type?: BType;
  text?: String;
  btnClick?: Function;
}

@Component
export default class ZButton extends tsc.Component<ButtonProps> {
  @Prop({ default: "primary" }) public type!: string;
  @Prop() public text!: String;
  @systemStore.State("user") user!: SystemGetterUser;
  @systemStore.Action("userLogin") cacheUserInfo: any;

  protected btnClick(type?: Object): void {
    console.log("click:", type);
    this.cacheUserInfo({ name: "张三", phone: "13333333333" });
  }

  @api(demoApi)
  protected getResult() {
    // 获取api调用结果
    return (res?: string) => {
      console.log(res);
    };
  }

  protected render() {
    let className = cx({
      "demo-button": this.type === BType.default,
      "demo-button__primary": this.type === BType.primary
    });
    return (
      <div>
        <p class={className}>user: {this.user.name}</p>
        {this.$slots.default || "组件默认slot内容"}
        {this.$slots.com_name_slot || "组件中的具名slot"}
        <van-button type={this.type} onClick={() => this.getResult()}>
          {this.text || "我是按钮"}
        </van-button>
      </div>
    );
  }
}
