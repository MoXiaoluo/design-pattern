/**
 * 代理对象 proxy
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
 *
 * handler.apply() 方法用于拦截函数的调用。
 * handler.construct() 方法用于拦截 new 操作符。为了使 new 操作符在生成的 Proxy 对象上生效，用于初始化代理的目标对象自身必须具有 [[Construct]] 内部方法（即 new target 必须是有效的）。
 * handler.defineProperty() 用于拦截对象的 Object.defineProperty() 操作。
 * handler.deleteProperty() 方法用于拦截对对象属性的 delete 操作。
 * handler.get() 方法用于拦截对象的读取属性操作。
 * handler.getOwnPropertyDescriptor() 方法是 Object.getOwnPropertyDescriptor() 的钩子。
 * handler.getPrototypeOf() 是一个代理（Proxy）方法，当读取代理对象的原型时，该方法就会被调用。
 * handler.has() 方法是针对 in 操作符的代理方法。
 * handler.isExtensible() 方法用于拦截对对象的 Object.isExtensible()。
 * handler.ownKeys() 方法用于拦截 Reflect.ownKeys().
 * handler.preventExtensions() 方法用于设置对Object.preventExtensions()的拦截
 * handler.set() 方法是设置属性值操作的捕获器。
 * handler.setPrototypeOf() 方法主要用来拦截 Object.setPrototypeOf().
 */
let obj = {
  name: "lee",
  age: 20,
  say: function () {
    console.log("say function");
  },
};

let proxy = new Proxy(obj, {
  /**
   *
   * @param {object} target
   * @param {string} property
   * @returns {string}
   */
  get(target, property) {
    console.log("get function");
    return target[property];
  },
  /**
   *
   * @param {object} target
   * @param {string} property
   * @param {string} newValue
   */
  set(target, property, newValue) {
    console.log("set function");
    target[property] = newValue;
  },
  defineProperty(target, property, descriptor) {
    console.log("defineProperty function", property);
    return Reflect.defineProperty(target, property, descriptor);
  },
  /**
   *
   * @param {object} target
   * @param {string} property
   * @returns {boolean}
   */
  deleteProperty(target, property) {
    console.log("delete", property);
    return delete target[property];
  },
  /**
   * @todo complete the function
   */
  has(target, property) {
    console.log("has function");
    return property in target;
  },
  apply(target, thisArg, argArr) {
    console.log("apply function");
    return target(thisArg, argArr);
  },
});

Object.defineProperty(proxy, "working", {
  value: false,
  writable: true,
  enumerable: true,
  configurable: false,
});

proxy;
