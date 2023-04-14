<template>
  <h1>我是App。。组件</h1>
  <h2>我的名字是：{{ person.name }}</h2>
  <h2>我的年龄是：{{ person.age }}</h2>
  <button @click="gai">修改</button>
</template>

<script>
import {reactive, watch} from "vue";

export default {
  name: 'App',
  components: {},
  setup() {
    //数据
    let person = reactive({
      name: '张三',
      age: 23
    })
    function gai(){
      return person.age=person.age*10

    }
    watch(person, (newValue, oldValue) => {
      console.log('person变化了',newValue,oldValue)
    })
    //方法
    return {
      person,
      gai

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
