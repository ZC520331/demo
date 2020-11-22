/**
 * 组合使用构造函数 和 原型模式：构造函数用于定义实例属性，原型方法用于定义共享的属性和方法
 * 目前使用最广泛的
 * */

function Person(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    this.friends = ['a', 'b']
}

Person.prototype = {
    construct: Person,
    sayName: function () {
        console.log(this.name)
    }
}

let p1 = new Person('qw', '12', 'test')
let p2 = new Person('as', '24', 'dev')

p1.friends.push('c')
console.log(p1.friends) // a b c
console.log(p2.friends) // a b
console.log(p1.friends === p2.friends) // false
console.log(p2.sayName === p1.sayName) // true