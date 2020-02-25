import Vue from "vue";
import Vuex from "vuex";
import system from "./modules/system";

import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

// TODO 等待寻找更优的vuex解决方式
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    system
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
