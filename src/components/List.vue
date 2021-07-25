<template>
  <ul class="todo-main">
    <!-- <li>
      <label for="">
        <input type="checkbox" />
        <span>xxxxx</span>
      </label>
      <button class="btn btn-danger" style="display: none">删除</button>
    </li>
    <li>
      <label for="">
        <input type="checkbox" />
        <span>yyyy</span>
      </label>
      <button class="btn btn-danger" style="display: none">删除</button>
    </li> -->
    <Item  v-for="(todo,index) in todos" :key="todo.id" :todo="todo" :deleteTodo="deleteTodo" :index="index" :updateTodo="updateTodo"/>
      
  </ul>
</template>

<script>
import Item from "./Item";
export default {
  //生命接受属性;属性名==>组件对象多了一个todos属性
  props:['todos','deleteTodo',"updateTodo"],
  components: {
    Item,
  },
};
</script>

<style  scoped>
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}
.todo-main  li{
  list-style: none;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>