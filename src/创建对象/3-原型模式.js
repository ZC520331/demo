/**
 * prototype:Javascript 规定，每一个构造函数都有一个 prototype 属性，指向另一个对象(原型对象)。 这个对象的所有属性和方法，都会被构造函数的实例继承
 * 存在的问题：
 *      省略了构造函数传递初始化参数这一环节，所有的实例在默认情况下取得了相同的属性值
 *      最大的问题共享的本性所导致的
 *
 * */
function Person() {
}
Person.prototype.name = 'qw'
Person.prototype.age = 28
Person.prototype.job = 'test'
Person.prototype.friends = ['as', 'zs']
Person.prototype.sayName = function () {
    console.log(this.name)
}
let person1 = new Person()
person1.sayName() // qw

let person2 = new Person()
person2.sayName() // qw
console.log(person1.sayName() === person2.sayName()) // true 解决构造函数的内存浪费问题
console.log(person1.friends , person2.friends) // ['as', 'zs']， 引用类型的值被实例共享

// 更简单的原型语法
Person.prototype = {
    name: '',
    sayName: function () {
    }
}