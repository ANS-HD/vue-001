<template>
    <li>
        <h2>

        {{blog.title}}
        </h2>
    </li>
</template>

<script>
//一个组件对象就是一个小小的vm，
//组件内回调函数的this是组件对象
//模板中获取数据读取组件 组件对象对应的属性值
export default {
    // extends
    //接受的所有标签属性都会成为组件对象的属性
    props:['blog'],

}
</script>

<style lang="scss" >

</style>