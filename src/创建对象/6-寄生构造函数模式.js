/**
 * 寄生构造函模式:创建一个函数，该函数的作用只是封装创建对象的代码，然后返回这个新的对象
 * 存在的问题：
 *      返回的对象与构造函数或者与构造函数的原型属性之间没有关系，
 *      能用其他的，就不要用这种模式
 * */

function Person(name, age) {
    let o = new Object()
    o.name = name
    o.age = age
    o.sayName = function () {
        console.log(this.name)
    }
    return o
}
let p = new Person('qw', 89)
p.sayName()

// 应用: 创建一个具有额外方法的数据
function SpecialArray() {
    let values = new Array()
    values.push.apply(values, arguments)
    values.toPopedString = function () {
        return this.join('|')
    }
    return values
}

let colors = new SpecialArray('red', 'blue', 'black')
console.log(colors.toPopedString()) // 'red|blue|black'