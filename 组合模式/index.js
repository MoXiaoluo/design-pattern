/**
 * 组合模式（Composite Pattern），又叫部分整体模式，是用于把一组相似的对象当作一个单一的对象。组合模式依据树形结构来组合对象，用来表示部分以及整体层次。
 * 
 |- 根节点
    |- 首页
    |- 数据管理
        |- 订单查询
        |- 库存查询
 */
/**
 *
 * 未优化
 */
function Menu(name) {
  this.name = name;
  this.subMenu = [];
}
function SubMenu(name) {
  this.name = name;
  this.leafMenu = [];
}
function LeafMenu(name) {
  this.name = name;
}

/**
 * 优化 只使用menu构造函数
 */

const root = new Menu("根节点");
const home = new Menu("首页");
const data = new Menu("数据管理");
const order = new Menu("订单管理");
const stock = new Menu("库存管理");

// “树干插树枝”
root.children.push(home);
// “树枝插末枝”
home.children.push(data);
// "末枝插树叶"
data.children.push(order);
data.children.push(stock);
