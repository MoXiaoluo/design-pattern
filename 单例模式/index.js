/**
 * 单例模式
 * 保证一个类仅有一个实例，并提供一个访问它的全局访问点
 * 主要解决一个类频繁的创建和销毁，会比较消耗内存
 * 该模式比较常用
 */

/**
 * 使用自执行函数以及闭包完成单例模式
 */
var singleton = (function () {
  var instance;
  function User(name, age) {
    this.name = name;
    this.age = age;
  }
  return function (name, age) {
    if (!instance) {
      //创建实例
      instance = new User(name, age);
    }
    return instance;
  };
})();

console.log(singleton("kerr1", 29));
console.log(singleton("kerr2", 30));

/**
 * 使用类方式定义单例模式
 */
class Singleton {
  constructor(name, age) {
    if(!Singleton.instance){
        this.name = name;
        this.age = age;
        Singleton.instance = this
    }
    return Singleton.instance
  }
}

console.log(new Singleton("kerr3", 29));
console.log(new Singleton("kerr4", 30));
