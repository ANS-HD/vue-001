<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="title"/>
  </div>
</template>

<script>
export default {
    //生命接受属性：更新函数属性
    props:{
      addTodo:{
        type:Function,
        required:true
        }
    },

    data(){
        return{
            title:''
        }
    },
    methods:{
        add(){
          const title= this.title.trim()
          //判断输入是否正常
          if(!title)return
          const todo={
            id:Date.now(),
            title,
            completed:false,
          }
          this.addTodo(todo)
          
            //根据输入的title封装一个todo对象
            
            //调用更新的函数，向todos中添加一个todo
            //清除输入
            //
            this.title=''
        }
    }

}
</script>

<style  scoped>
.todo-header input {
  width: 500px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}
.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>