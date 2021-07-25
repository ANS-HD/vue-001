<template>
    <li :style="{background:bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" >
        <label for="">
            <input type="checkbox" v-model="isCompleted"/>
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" v-show="isShow" @click="deleteItem()">删除</button>
    </li>
</template>
/**
    1绑定事件监听
    2设计数据
    3在监听回调中更新数据
 */

<script>
export default {
    props:[//声明属性名和属性值的类型
        "todo",
        "deleteTodo",
        "index",
        "updateTodo"
    ],
    data(){
        return{
            bgColor:'white',
            isShow:false,
        }
    },
    computed:{
        isCompleted:{
            get(){
                return this.todo.completed

            },
            set(value){
                this.updateTodo(this.todo,value)
            }
        }
    },
    methods:{
        handleEnter(isEnter){
            if(isEnter){

                this.bgColor='aqua',
                this.isShow=true
            }else {
                this.bgColor='#fff',
                this.isShow=false

            }

        },
        deleteItem(){
            if(window.confirm("确定删除吗？")){
                this.deleteTodo(this.index)
            }
        }
    },
   
}
</script>

<style  scoped>
    li{
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
    li label{
        float: left;
        cursor: pointer;
    }
    li label li input{
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;

    }
    li button{
        float: right;
        /* display: none; */
        margin-top: 3px;
    }
    li:before{
        content: initial;
    }
    li:last-child{
        border-bottom: none;
    }
</style>