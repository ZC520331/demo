/**
 * 动态原型模式:把所有的信息都封装在构造函数中，在必要的情况下初始化原型就可以了
 *
 * */

function Person(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    // 方法只有在不存在的情况下才会被添加到原型中, 初次调用构造函数时才会执行
    if (typeof this.sayName != "function") {
        Person.prototype.sayName = function () {
            console.log(this.name)
        }
    }
}
let p = new Person('qw', 23 , 'software engineer')
p.sayName()