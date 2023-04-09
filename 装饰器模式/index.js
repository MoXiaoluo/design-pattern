/**
 * 装饰器模式是对已有方法的扩展。不会对原有代码进行修改。
 * axios的拦截器也是基于装饰器模式的
 */


Function.prototype.before = function(beforeFn){
    var _this = this
    return function(){
        beforeFn.apply(this,arguments)
        return _this.apply(this, arguments)
    }
}

Function.prototype.after = function(afterFn){
    var _this = this
    return function(){
        var ret = _this.apply(this,arguments)
        afterFn.apply(this,arguments)
        return ret
    }
}

function test(){
    console.log("11111111111")
}

var test1 = test.before(function(){
    console.log("0000000000")
}).after(function(){
    console.log("2222222222")
})

test1()
