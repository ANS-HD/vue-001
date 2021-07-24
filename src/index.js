// import {sum} from './js/math'
// console.log("hello Webpack!",sum(2,5))
// document.getElementById('root').innerHTML='<h1>hello2221</h1>'
// import logo from './assets/imgs/logo.png'
// import './assets/css/my.css'
// const image = new Image()
// image.src = logo
// document.body.appendChild(image)
// document.getElementById('root').innerHTML = '<h1>Hello222</h1>'
// import Vue from "vue/dist/vue.esm.js"
import Vue from "vue"
import App from "./App.vue"//引入自定义组件
// import  './base.css'
//注册全局组件
//Vue.component("App",App)
new Vue({
    // el:"root",
    //注册局部组件
    components:{//注册组件 (后面才能写组件标签)
        App:App
    },
    template:"<App/>"

}).$mount("#root")