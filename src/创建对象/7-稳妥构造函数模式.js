/**
 * 稳妥构造函数模式: 改造寄生构造函数模式
 *
 * */
function Person(name, age) {
    // 创建要返回的对象
    let o = new Object()
    // 添加方法
    o.sayName = function () {
        console.log(name)
    }
    return o
}
// p 中保存的是一个稳妥对象，除了调用sayName，没有其他方式可以访问其数据成员
let p = new Person('千万', 34)
p.sayName() // 千万