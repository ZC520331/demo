// 原型式继承: 借助原型基于已有的对象创建新的对象
function object(o) {
    function F() {}
    F.prototype = o
    return new F()
}

let person = {
    name: 'q',
    friends: ['w', 'e']
}

let anotherPerson = object(person)
// 对得到的对象加以修改就可以了
anotherPerson.name = 'qqqq'
anotherPerson.friends.push('y')

let yetAnotherPerson = object(person)
yetAnotherPerson.name = 'www'
yetAnotherPerson.friends.push('a')
console.log(person.friends) // ['w', 'e', 'y', 'a']

// ES5 Object.create() 规范化了原型式继承
let anotherPerson1 = Object.create(person)
anotherPerson1.name = 'qqqq'
anotherPerson1.friends.push('y')

let yetAnotherPerson2 = Object.create(person)
yetAnotherPerson2.name = 'www'
yetAnotherPerson2.friends.push('a')
console.log(person.friends) // ['w', 'e', 'y', 'a']