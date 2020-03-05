/*
 * @Author: ZhengXiaowei
 * @Date: 2020-02-25 17:34:04
 * @LastEditors: ZhengXiaowei
 * @LastEditTime: 2020-03-05 09:42:51
 * @Description: 自定义装饰器方法
 * @FilePath: /src/decorator/index.ts
 */

// TODO 研究 vue-class-component中的createDecorator 看是否有借鉴的地方

export const api = (promise: Function) => {
  return (
    target: Object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<any>
  ): any => {
    let oldValue = descriptor.value;
    descriptor.value = async function() {
      try {
        let result = await promise();
        oldValue.call(this, ...arguments)(result);
      } catch (e) {
        oldValue.call(this, ...arguments)({}, e);
      }
    };
  };
};
