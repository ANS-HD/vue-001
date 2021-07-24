<template>
  <div>
    <h2>Blog列表</h2>
    <ul>
        <Blog v-for="(blog,index) in blogs" :key="blog.id" :blog='blog'/>
        <!-- <Blog v-for="(blog,index) in blogs" key='blog.id' :blog="blog"/> -->
    </ul>
  </div>
</template>

<script >

// import Blog from "./Blog";
import Blog from './Blog.vue';
import moduleName from '@/App.vue'
export default {
 
     //注册局部组件，只能在当前组件使用
     data(){
         return{
             blogs:[
                 {id:1,title:"Blog11111"},
                 {id:2,title:"Blog22222"},
                 {id:3,title:"Blog33333"},
             ]
         }
     },
     components:{
         Blog
     }
  
 
};
</script>
<style scoped>
    h2{
        color: aqua;
    }
</style>