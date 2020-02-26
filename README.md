# base-vue-tsx-template

## 目录结构说明

```
|-- AboutStudy
    |-- .env.development  # 开发环境配置
    |-- .env.production   # 生成环境配置
    |-- .eslintrc.js
    |-- babel.config.js
    |-- jest.config.js
    |-- package.json
    |-- tsconfig.json
    |-- vue.config.js     # vue 配置
    |-- public
    |-- src
    |   |-- App.tsx
    |   |-- declaration.d.ts  # scss声明文件
    |   |-- main.ts           # 入口文件
    |   |-- shims-vue.d.ts    # vue声明文件
    |   |-- api               # api文件 包括axios配置
    |   |-- assets            # 资源文件
    |   |-- components        # 组件
    |   |-- decorator         # 装饰器
    |   |-- helper            # 常用工具方法
    |   |-- mixins            # vue mixin
    |   |-- router            # 路由
    |   |-- scss              # 通用样式 变量 mixin
    |   |-- store             # vuex
    |   |-- types             # 方法type interface
    |   |-- views             # 页面
    |-- tests                 # 测试

```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
