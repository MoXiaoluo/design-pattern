/**
 * 模块化
 * ES5的模块话必须在script 标签中使用，type要设置成module
 */

// import module, {increase,decrease,addFive} from './module'

/**
 * 闭包
 */
const obj = (function () {
  var count = 0;
  return {
    increase() {
      return ++count;
    },
    decrease() {
      return --count;
    },
  };
})();

// console.log(obj.increase());

// console.log(increase())
