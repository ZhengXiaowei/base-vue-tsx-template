/*
 * @Author: ZhengXiaowei
 * @Date: 2020-02-24 17:19:06
 * @LastEditors: ZhengXiaowei
 * @LastEditTime: 2020-02-28 22:38:02
 * @Description: vue 全局配置
 * @FilePath: /vue.config.js
 */
const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");

const mergeConfig = config => {
  config.module
    .rule("ts")
    .use("ts-loader")
    .tap(options => {
      options = merge(options, {
        transpileOnly: true,
        getCustomTransformers: () => ({
          before: [
            tsImportPluginFactory({
              libraryName: "vant",
              libraryDirectory: "es",
              style: true
            })
          ]
        }),
        compilerOptions: {
          module: "es2015"
        }
      });
      return options;
    });
};

const externals = {
  vue: "Vue",
  vuex: "Vuex",
  "vue-lazyload": "VueLazyload",
  "vue-router": "VueRouter",
  vant: "vant",
  axios: "axios"
};

// * 资源配置
const cdns = {
  dev: {},
  build: {
    css: [],
    js: []
  }
};

const ossCDN = "./";

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? ossCDN : "/",
  assetsDir:
    process.env.NODE_ENV === "production"
      ? "static" + new Date().toLocaleDateString().replace(/\//g, "-")
      : "static",

  lintOnSave: false,
  productionSourceMap: true,
  parallel: false, // ts-loader不支持多线程 ts下打包会丢失三方组件样式
  devServer: {
    // * 接口跨域处理
    proxy: {
      "/api": {
        target: "http://114.55.43.33:8888/",
        changeOrigin: true
      }
    },
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // 单位适配 之后要改vw 直接用插件postcss-px-to-viewport替换pxtorem即可
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"]
          })
        ]
      },
      scss: {
        prependData: `@import "~@/scss/variables.scss";`
      }
    }
  },
  // * 打包忽略项
  configureWebpack: {
    devtool: "source-map",
    // externals: process.env.NODE_ENV === "production" ? externals : {},
    resolve: {
      extensions: [".js", ".vue", ".json", ".ts", ".tsx"] // 加入ts 和 tsx
    }
  },
  chainWebpack: config => {
    // ts-import-plugin 配置
    mergeConfig(config);
    // * 移除prefetch和preload
    config.plugins.delete("prefetch");
    config.plugins.delete("preload");
    if (process.env.NODE_ENV === "production") {
      config.entry("index").add("babel-polyfill");
      config.plugin("html").tap(args => {
        // 加上属性引号
        args[0].minify.removeAttributeQuotes = false;
        args[0].cdn = cdns.build;
        return args;
      });
    }
  }
};
