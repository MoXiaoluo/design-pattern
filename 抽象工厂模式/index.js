/**
 * abstract class User, the other class must implement the function
 */
class abstractUser{
    constructor(name, role, pages){
        this.name = name
        this.role = role
        this.pages = pages
    }

    welcome(){
        console.log("common function from super class")
    }

    show(){
        throw new Error("the function must be overwrite")
    }
}

/**
 * extend from abstractUser
 */
class superAdmin extends abstractUser{
    /**
     * if only using the params from super class, this can be ignore declare.
     * @param {string} name 
     */
    constructor(name){
        super(name, "superAdmin", [
            "Home",
            "user-manage",
            "right-manage",
            "news-manage",
          ])
    }
    /**
     * overwrite the show() from super class
     */
    show(){
        console.log(`this is ${this.name}, my role is ${this.role}, my permission is ${this.pages} `)
    }
}

/**
 * extend from abstractUser
 */
class admin extends abstractUser{
    /**
     * if only using the params from super class, this can be ignore declare.
     * @param {string} name 
     */
    constructor(name){
        super(name, "admin", [
            "Home",
            "user-manage",
            "news-manage",
          ])
    }
    /**
     * overwrite the show() from super class
     */
    show(){
        console.log(`this is ${this.name}, my role is ${this.role}, my permission is ${this.pages} `)
    }
}

/**
 * extend from abstractUser
 */
class editor extends abstractUser{
    /**
     * if only using the params from super class, this can be ignore declare.
     * @param {string} name 
     */
    constructor(name){
        super(name, "editor", [
            "Home",
            "news-manage",
          ])
    }
    /**
     * overwrite the show() from super class
     */
    show(){
        console.log(`this is ${this.name}, my role is ${this.role}, my permission is ${this.pages} `)
    }
}


const sa = new superAdmin("super admin")
sa.show()
