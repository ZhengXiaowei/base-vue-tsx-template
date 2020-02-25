// 增加tsx的支持
import "vue-tsx-support/enable-check";
import "@/scss/index.scss";
import "@/components";

import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
