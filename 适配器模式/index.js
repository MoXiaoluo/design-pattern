/**
 * 在合并使用方法的时候，如果有方法的名字不匹配，可以重新创建一个Adapt来匹配名字。
 */

class BaiduMap{
    display(){
        console.log('baidu map')
    }
}

class Tencent{
    show(){
        console.log('tencent map')
    }
}

class TencentAdapt extends Tencent{
    display(){
        this.show()
    }
}

function renderMap(map){
    map.display()
}

const baiduMap = renderMap(new BaiduMap())
const tencentMap = renderMap(new TencentAdapt())