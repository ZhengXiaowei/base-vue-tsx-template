import { Component, Vue } from "vue-property-decorator";
import { Component as tsc } from "vue-tsx-support";

import ZButton, { BType } from "@/components/Button/Button";
import FunLayout from "@/fun-components/fun-layout";

@Component
export default class HomeContainer extends tsc<Vue> {
  protected render() {
    return (
      <div>
        <ZButton type={BType.primary}>
          <p>替换组件默认slot</p>
          <p>替换组件默认slot</p>
          <p>替换组件默认slot</p>
          <p>替换组件默认slot</p>
          <p slot="com_name_slot">替换组件的具名slot</p>
        </ZButton>
        <FunLayout msg="内容" name="张三">
          <p>默认的slot</p>
          <p slot="name_slot">具名slot</p>
        </FunLayout>
      </div>
    );
  }
}
