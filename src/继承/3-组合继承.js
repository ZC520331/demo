/**
 * 组合继承 : 将原型链和借用构造函数的技术组合到一起
 * 解决了原型链和借用构造函数的缺点
 * 新的问题：调用两次父类的构造函数，call 和 new 各一次
 * */

function SuperType(name) {
    this.name = name
    this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.sayName = function () {
    console.log(this.name)
}

function SubType(name, age) {
    // 继承属性
    SuperType.call(this, name)
    this.age = age
}
// 继承方法
SubType.prototype = new  SuperType()
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function () {
    console.log(this.age)
}

let instance1 = new SubType('Ni', '22')
instance1.colors.push('black')
console.log(instance1.colors)
instance1.sayAge()
instance1.sayName()

let instance2 = new SubType('ha', '23')
console.log(instance2.colors)
instance2.sayName()
instance2.sayAge()


