<template>
  <div class="hello">
  </div>
</template>

<script>

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

      // // prototype
      // console.log('构造函数Person prototype属性,该属性是一个对象', Person.prototype)
      // Person.prototype.type = 'human'
      // Person.prototype.print = function () {
      //   console.log('prototype 上添加方法', this.name)
      // }
      // let p1 = new Person('p1')
      // let p2 = new Person('p2')
      // //这时所有实例的 type 属性和 Person() 方法， 其实都是同一个内存地址，指向 prototype 对象，因此就提高了运行效率
      // console.log('prototype', p1.type === p2.type, p1.print === p2.print)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
  }
</style>
