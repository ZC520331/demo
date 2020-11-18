// 工厂函数创建对象
export const factoryCreateObj = function factoryCreateObj(name) {
    return {
        name: name,
        print: function () {
            console.log('工厂函数', this.name)
        }
    }
}
/**
 * 构造函数创建对象
 * 构造函数创建对象存在的问题
 *      浪费内存问题: 对于多个实例对象的print函数都是一模一样的东西,实例对象过多造成内存浪费
 *      解决方案 : 把需要共享的函数定义到函数外部
 * 带来新的问题:
 *      全局命名空间冲突的问题
 *      解决方案: 共享函数定义在对象里面
 * 构造函数带来的问题
 *      解决方案: prototype
 * */
export const ConstructorCreateObj = function ConstructorCreateObj(name) {
    this.name = name
    this.print = function () {
        console.log('constructorCreateObj', this.name)
    }
    this.print = print
    this.print = obj.print
}

function print(){
    console.log('解决内存泄漏问题-共享的函数定义到函数外部', this.name)
}

let obj = {
    print: function () {
        console.log('解决-全局命名空间冲突问题')
    }
}

/**
 * prototype:Javascript 规定，每一个构造函数都有一个 prototype 属性，指向另一个对象。 这个对象的所有属性和方法，都会被构造函数的实例继承
 *
 *
 *
 * */
export const Person = function Person(name) {
    this.name = name
}
