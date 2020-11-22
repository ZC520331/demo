/**
 * 构造函数创建对象
 * 构造函数创建对象存在的问题
 *      浪费内存问题: 对于多个实例对象的print函数都是一模一样的东西,实例对象过多造成内存浪费
 *      解决方案 : 把需要共享的函数定义到函数外部
 * 带来新的问题:
 *      全局命名空间冲突的问题
 *      解决方案: 共享函数定义在对象里面
 * 新问题的解决方案
 *      prototype
 * */
function ConstructorCreateObj(name) {
    this.name = name
    this.print = function () {
        console.log('constructorCreateObj', this.name)
    }
    // this.print = print
    // this.print = obj.print
}

function print(){
    console.log('解决内存泄漏问题-共享的函数定义到函数外部', this.name)
}

let obj = {
    print: function () {
        console.log('解决-全局命名空间冲突问题')
    }
}
// 构造函数创建对象
let conObj1 = new ConstructorCreateObj('构造函数 name1')
let conOnj2 = new ConstructorCreateObj('构造函数 name2')
console.log('构造函数创建的两个对象', conObj1, conOnj2)
console.log('浪费内存问题', conObj1.print === conOnj2.print) // false
// 思考 构造函数和实例之间的关系 实例的constructor属性

console.log(conObj1.constructor === ConstructorCreateObj) // true
console.log(conOnj2.constructor === ConstructorCreateObj) // true1
