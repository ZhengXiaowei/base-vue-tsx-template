import "./ui-component";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import vuex from "vuex";
import store from "@/store";
import ZButton from "@/components/Button/Button";

const localVue = createLocalVue();
localVue.use(vuex);

describe("按钮组件", () => {
  it("测试按钮组件传值是否显示", () => {
    const type = "primary";
    const text = "按钮2";
    // 此错误是因为组件里使用了vuex的原因
    const wrapper = shallowMount(ZButton, {
      localVue,
      store,
      propsData: { type, text }
    });
    expect(wrapper.text()).toMatch(text);
  });
});
