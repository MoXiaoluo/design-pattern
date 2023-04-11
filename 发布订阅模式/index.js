/**
 * 发布者与订阅着相互不知道，通过第三方实现，解耦了两者之间的关系。
 *
 */

const PubSub = {
  /**
   * 存储订阅的类型，以及对应类型的callback
   */
  message: {},
  /**
   *
   * @param {string} type
   * @param {string} val
   */
  publish: function (type, val) {
    this.message[type]?.forEach((item) => {
      item(val);
    });
  },
  /**
   *
   * @param {string} type
   * @param {Function} cb
   */
  subscribe: function (type, cb) {
    this.message[type]
      ? this.message[type].push(cb)
      : (this.message[type] = [cb]);
  },
  /**
   *
   * @param {string} type
   * @param {Function} cb
   */
  unSubscribe: function (type, cb) {
    if (!this.message[key]) return;
    if (!cb) {
      this.message[type] && (this.message[type].length = 0);
    } else {
      this.message[key] = this.message[key].filter((el) => {
        el != cb;
      });
    }
  },
};

function testA(val) {
  console.log("A", val);
}
function testB(val) {
  console.log("B", val);
}

PubSub.subscribe("A", testA);
PubSub.subscribe("A", testB);

PubSub.publish("B", "test");
