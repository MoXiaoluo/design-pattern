/**
 * 命令模式（Command Pattern）是一种数据驱动的设计模式，它属于行为型模式。
 * 请求以命令的形式包裹在对象中，并传给调用对象。调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令。
 */

// class Editor {
//     constructor() {
//         this.content= ''
//     }
//     write(content) {
//         this.content+=content
//         return this
//     }
//     read() {
//         console.log(this.content)
//         return this
//     }
//     space() {
//         this.content+= ' '
//         return this
//     }
// }

// const editor = new Editor()

// editor.write('hello').space().write('zkk!').read() // => 'hello zkk!'

class Editor {
  constructor() {
    this.content = "";
    this.operator = [];
  }
  write(content) {
    this.content += content;
  }
  read() {
    console.log(this.content);
  }
  space() {
    this.content += " ";
  }
  readOperator() {
    console.log(this.operator);
  }
  run(...args) {
    this.operator.push(args[0]);
    this[args[0]].apply(this, args.slice(1));
    return this;
  }
}

const editor = new Editor();

editor.run("write", "hello").run("space").run("write", "zkk!").run("read"); // => 'hello zkk!'

// 输出操作队列
editor.readOperator(); // ["write", "space", "write", "read"]
