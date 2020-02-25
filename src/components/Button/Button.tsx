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

export enum ButtonType {
  default = "default",
  primary = "primary"
}

interface ButtonProps {
  type?: ButtonType;
  text?: String;
  btnClick: Function;
}

@Component
export default class ZButton extends tsc.Component<ButtonProps> {
  @Prop({ default: ButtonType.default }) public type!: ButtonType;
  @Prop() public text!: String;
  @systemStore.State("user") user!: SystemGetterUser;
  @systemStore.Action("userLogin") cacheUserInfo: any;

  protected btnClick(type?: Object): void {
    console.log("click:", type);
    this.cacheUserInfo({ name: "张三", phone: "13333333333" });
  }

  @api(demoApi)
  protected getResult(res?: string) {
    // 获取api调用结果
    console.log(res);
  }

  protected render() {
    let className = cx({
      "demo-button": this.type === ButtonType.default,
      "demo-button__primary": this.type === ButtonType.primary
    });
    return (
      <div>
        <p class={className}>user: {this.user.name}</p>
        <van-button type={this.type} onClick={() => this.getResult()}>
          {this.text || "我是按钮"}
        </van-button>
      </div>
    );
  }
}
