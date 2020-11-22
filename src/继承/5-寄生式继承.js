// 寄生式继承: 创建一个用来封装继承过程的函数,
function createAnother(original) {
    // 通过调用函数创建一个新的对象, 是与原型式继承紧密相关的一种思路
    let clone = object(original)
    // 以某种方式来增强这个对象
    clone.sayHi = function () {
        console.log('hi')
    }
    // 返回这个对象
    return clone
}

let person = {
    name: 'q',
    friends: ['a', 'z']
}
let anotherPerson = createAnother(person)
anotherPerson.sayHi()  // hi