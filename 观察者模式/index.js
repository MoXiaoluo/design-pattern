/**
 * 观察者模式包含观察目标和观察着两类对象。
 * 一个目标可以有多个观察者
 * 一旦观察者状态改变，观察者都会收到通知
 */

/**
 * @constructor
 * 被观察目标
 */
class Subject {
  constructor() {
    this.observers = [];
  }
  /**
   *
   * @param {Observer} observer
   */
  add(observer) {
    this.observers.push(observer);
  }
  /**
   *
   * @param {Observer} observer
   */
  remove(observer) {
    this.observers = this.observers.filter((item) => item != observer);
  }
  /**
   *
   * @param {number} val
   */
  notify(val) {
    this.observers.forEach((item) => {
      item.update(val);
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(val) {
    console.log("update", this.name, val);
  }
}

const subject = new Subject();
const o1 = new Observer("lee");
const o2 = new Observer("kerr");
subject.add(o1);
subject.add(o2);
subject.remove(o1);
subject.notify(100);
