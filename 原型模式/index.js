//函数方式
function User(name) {
    this.name = name
}

User.prototype.say = function(){
    console.log("User name", this.name)
}

const user1 = new User("kerr")
user1.say()
console.log(user1)

//类方式
class Person{
    constructor(name){
        this.name = name
    }
    //使用static关键字，不能在类的实例上调用静态方法，而应该通过类本身调用
    static say1(){
        console.log("Person name", this.name)
    }
    //绑定到原型对象上
    say(){
        console.log("Person name", this.name)
    }

}

const p1 = new Person("Lee")
console.log(p1)
p1.say()


Person.say1()