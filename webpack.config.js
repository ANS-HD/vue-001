// const path=require('path')
// const HtmlWebpackPlugin=require('html-webpack-plugin')
// /**
//  * ES6:export default import
//  * COmmomJS:module.exports/exports/require
//  */
// module.exports={
//     //模式：生产环境
//     mode:'production',
//     //入口
//     entry:{
//         app:path.resolve(__dirname,'src/index.js')
//     },
//     //出口（打包生成js）
//     output:{
//         filename:"static/js/[name].bundle.js",
//         path:path.resolve(__dirname,'dist')
//     },
//     //模块加载器
//     module:{
//         rules:[

//         ]
//     },
//     //插件
//     plugins:[
//         new HtmlWebpackPlugin({
//             template:'index.html',
//             filename:'index.html'
//         })
//     ]

// }
//引入
const  HtmlWebpackPlugin =require("html-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')

const path=require('path')//解析路径的模块
module.exports={
    //配置对象
    //入口
    entry:{
        xxx:path.resolve(__dirname,'src/index.js')
    },
    //出口
    output:{
        filename:"static/js/[name].bundle.js",//可以带路径
        path:path.resolve(__dirname,'dist')

    },
    //模块加载器
    module:{
        rules:[
            {
                test: /\.js$/,//用于匹配文件
                // exclude: /(node_modules|bower_components)/,
                include:[path.resolve(__dirname,'src')],//只针对那些处理
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],//预设包：包含多个常用插件包的一个大包
                    plugins:[

                    ]
                  }
                }
              },
              {
                test: /\.css$/i,
                use: ["vue-style-loader", "css-loader"],
              },
              //处理图片
              {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                      name:"static/img/[name].[hash:7].[ext]"
                    },
                  },
                ],
              },
              //处理Vue单文件
              {
                test: /\.vue$/,
                loader: 'vue-loader'
              }

        ]
    },
    //插件
    plugins:[
        new HtmlWebpackPlugin({
            template:"index.html",
            filename:'index.html'//是生成页面 在output指定的path下
        }),
        new VueLoaderPlugin()

    ],
    //开发服务器的配置
    devServer:{
        open:true,//自动打开浏览器
        // quiet:true//不做太多日志输出
    },
    //开启source-map调试
    // devtool:"cheap-module-eval-source-map",
    resolve:{//引入模块的解析
      extensions:['.js','.vue','.json'],
      alias:{
        'vue$':'vue/dist/vue.esm.js',//精准匹配  带vue编译器
        '@':path.resolve(__dirname ,'src')
      }
    }
}