<template>
<div class="todo-container">

  <div class="todo-wrap">
    <Header :addTodo="addTodo"/>
    <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
    <Footer 
    :todos="todos" 
    :clearCompletedTtodos="clearCompletedTtodos" 
    :checkAll="checkAll"
    />
  </div>
</div>
</template>
<script>
import  Header from '@/components/Header.vue'
import  List from '@/components/List.vue'
import  Footer from '@/components/Footer.vue'
import  {saveTodos,readTodos} from '@/utils/storageUtils.js'
// import { validate } from 'webpack'
export default {
  //配置对象
  // data() {
  //   return {
  //     title: "App组件2222",
  //   };
  // },
  data(){
    return{
      todos:[
        // {id:1,title:'唱歌',completed:false},
        // {id:2,title:'打联盟',completed:true},
        // {id:3,title:'吃饭',completed:false},
        // {id:4,title:'前端',completed:false},
      ]
    }

  },
  mounted(){
    setTimeout(() => {
      //模拟异步处理  读取local中保存的todos
      // this.todos= JSON.parse(localStorage.getItem('todos_key'))||[]
     this.todos= readTodos()
    }, 1000);
  },
  methods:{
    addTodo(todo){
      this.todos.unshift(todo)

    },
    deleteTodo(index){
      console.log(index)
      this.todos.splice(index,1)
    },
    clearCompletedTtodos(){
      this.todos= this.todos.filter((todo,index)=> !todo.completed)
    },
    checkAll(isCheckAll){
      this.todos.forEach(todo=>todo.completed=isCheckAll)

    },
    updateTodo(todo,isCheck){
      todo.completed=isCheck

    }
  },
    watch:{
      todos:{
        deep:true,//深度监视 本身和内部所有层次的数据
        // handler(value){//最新的todos值
        //   //将todos保存到local(以json形式)
        //   // localStorage.setItem('todos_key',JSON.stringify(value))
        //    saveTodos(value)

        // }
        handler:saveTodos
      }
    },
  components: {
    Header,
    List,
    Footer,
  },
};
</script>
<style  scoped>
  .todo-container{
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap{
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>