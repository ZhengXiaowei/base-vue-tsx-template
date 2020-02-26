import { Component, Vue } from "vue-property-decorator";
import { Component as tsc } from "vue-tsx-support";

import ZButton, { BType } from "@/components/Button/Button";

@Component
export default class HomeContainer extends tsc<Vue> {
  protected render() {
    return <ZButton type={BType.primary}></ZButton>;
  }
}
