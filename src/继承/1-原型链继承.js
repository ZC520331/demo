// 原型链继承
function SuperType() {
    this.property = true
}

SuperType.prototype.getSuperValue = function () {
    return this.property
}

function  SubType() {
    this.subProperty = false
}

// SuperType() 的实例 赋值给 SubType.prototype 来实现的，本质是重写原型对象
SubType.prototype = new  SuperType()

SubType.prototype.getSubValue = function() {
    return this.subProperty
}

let instance = new SubType()
console.log(instance.getSuperValue())  // true

// 注意： 通过原型链实现继承,不能使用字面量创建原型方法，以为这样就会重写原型链
SubType.prototype = {
    getSubValue: function() {
      return this.subProperty
    },
    otherMethod: function () {
    }
}
let ins1 = new SubType()
alert(ins1.getSubValue()) // 这就会报错了

// 原型链继承存在的问题: 引用类型值得原型会被所有实例共享(原型模式创建对象已经说过了)
// 不能向父类传递参数
