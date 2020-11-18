<template>
  <div class="hello">
  </div>
</template>

<script>
import { factoryCreateObj, ConstructorCreateObj, Person } from "../util/createObject";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    // 创建对象
    this.createObject()
  },
  methods: {
    createObject() {
      // new Object() 创建对象
      let obj = new Object()
      obj.name = 'qwert'
      obj.print = function() {
        console.log('new object 创建对象', this.name)
      }
      // 字面量创建对象
      let obj1 = {
        name: '---',
        print: function () {
          console.log('字面量创建对象', this.name)
        }
      }
      console.log('obj1', obj1)
      // 工厂函数创建对象: 解决创建多个相似对象代码冗余的问题, 但却没有解决独享识别问题
      let factoryObj1 = factoryCreateObj('工厂函数 name1')
      let factoryObj2 = factoryCreateObj('工厂函数 name2')
      console.log('工厂函数创建的两个对象', factoryObj1, factoryObj2)
      // 构造函数创建对象
      let conObj1 = new ConstructorCreateObj('构造函数 name1')
      let conOnj2 = new ConstructorCreateObj('构造函数 name2')
      console.log('构造函数创建的两个对象', conObj1, conOnj2)
      console.log('浪费内存问题', conObj1.print === conOnj2.print) // false
      // 思考 构造函数和实例之间的关系 实例的constructor属性 instanceof操作符

      // prototype
      console.log('构造函数Person prototype属性,该属性是一个对象', Person.prototype)
      Person.prototype.type = 'human'
      Person.prototype.print = function () {
        console.log('prototype 上添加方法', this.name)
      }
      let p1 = new Person('p1')
      let p2 = new Person('p2')
      //这时所有实例的 type 属性和 Person() 方法， 其实都是同一个内存地址，指向 prototype 对象，因此就提高了运行效率
      console.log('prototype', p1.type === p2.type, p1.print === p2.print)
    },
    // 思考 构造函数 实例 原型之间的关系

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
  }
</style>
