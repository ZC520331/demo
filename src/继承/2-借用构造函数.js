/**
 * 借用构造函数解决原型链的问题
 *       引用类型被实例共享问题
 *       向父类传递参数
 * 新的问题
 *       方法都在构造函数中定义了，函数复用无从谈起
 * */

function SuperType() {
    this.colors = ['red', 'blue', 'green']
}

function SubType() {
    // 使用call 或 apply 继承SuperType
    SuperType.call(this)
}

let instance1 = new SubType()
instance1.colors.push('black')
console.log(instance1.colors)  // ['red', 'blue', 'green', 'black']

let instance2 = new SubType()
console.log(instance2.colors)  //['red', 'blue', 'green']

// 传递参数
function SuperPerson(name) {
    this.name = name
}
function SubPerson() {
    SubPerson.call(this, 'hahahha')
    this.age = 29
}
let p1 = new SubPerson()
console.log(p1.name, p1.age)