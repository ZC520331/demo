/**
 * 工厂函数创建对象
 * 解决的问题:
 *      解决创建多个相似对象代码冗余的问题
 * 存在的问题：
 *      每次调用工厂函数创建的对象都是独立的object，不存在继承关系，显然，这样的面向对象编程失去了灵魂
 * */
function factoryCreateObj(name) {
    return {
        name: name,
        print: function () {
            console.log('工厂函数', this.name)
        }
    }
}

let factoryObj1 = factoryCreateObj('工厂函数 name1')
let factoryObj2 = factoryCreateObj('工厂函数 name2')
console.log('工厂函数创建的两个对象', factoryObj1, factoryObj2)