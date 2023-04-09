/**
 * 业务中包含有类似的业务流程，通过建造者模式简化方法调用，在建造者类中已经定义好方法的执行流程。
 *
 */

class List1 {
  init() {
    console.log("List1 init");
  }

  getData() {
    console.log("List1 getData");
  }

  render() {
    console.log("List1 render");
  }
}

class List2 {
  init() {
    console.log("List2 init");
  }

  getData() {
    console.log("List2 getData");
  }

  render() {
    console.log("List2 render");
  }
}
/**
 * 创建建造者类
 */
class Builder {
  startBuilder(builder) {
    builder.init();
    builder.getData();
    builder.render();
  }
}

const builder = new Builder();
builder.startBuilder(new List1());
builder.startBuilder(new List2());
