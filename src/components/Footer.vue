<template>
  <div class="todo-footer">
    <label for="">
      <input type="checkbox" v-model="ischeckAll" />
    </label>
    <span>已完成{{ completeSize }}</span
    >/全部{{ todos.length }}
    <button
      class="btn btn-danger"
      v-show="completeSize > 0"
      @click="clearCompletedTtodos"
    >
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    clearCompletedTtodos: Function,
    checkAll: Function,
  },
  computed: {
    completeSize() {
      return this.todos.reduce(
        (preTotoal, todo, index) => preTotoal + (todo.completed ? 1 : 0),
        0
      );
    },
    ischeckAll: {
      get() {
        return this.todos.length === this.completeSize&& this.todos.length>0; //该属性值自动调用getter方法
      },
      set(value){
        //value代表当前勾选状态的布尔值
        this.checkAll(value)

      }
    },
  },
};
</script>

<style  scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>