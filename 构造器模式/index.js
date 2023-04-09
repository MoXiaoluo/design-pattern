//函数方式
function User(name) {
    this.name = name
}

const user1 = new User("kerr")
console.log(user1)

//类方式
class Person{
    constructor(name){
        this.name = name
    }
}

const p1 = new Person("Lee")
console.log(p1)