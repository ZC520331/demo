/**
 * 寄生组合式继承: 接受两个参数：子类构造函数 父类构造函数
 *
 * */
function inheritPrototype(subType, supertype) {
    // 创建父类原型的一个副本
    let prototype = supertype.prototype
    // 为副本添加constructor属性
    prototype.constructor = subType // 重写原型导致失去constructor属性
    // 将副本赋值给子类的原型，
    subType.prototype = prototype
}

function SuperType(name) {
    this.name = name
    this.color = ['red','blue', 'black']
}
SuperType.prototype.sayName = function () {
    console.log(this.name)
}
function SubType(name, age) {
    SuperType.call(this, name)
    this.age = age
}
// 调用inheritPrototype函数省掉前面例子中为子类原型赋值的句子了
inheritPrototype(SubType, SuperType)
SubType.prototype.sayAge = function () {
    console.log(this.age)
}