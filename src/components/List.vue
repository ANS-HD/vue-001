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
    <Item />
      <Item />
      <Item />
  </ul>
</template>

<script>
import Item from "./Item";
export default {
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