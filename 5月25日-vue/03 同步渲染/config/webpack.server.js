// 引入path
const path = require('path');
// 第三步： 引入插件
const SSRPlugin = require('vue-server-renderer/server-plugin');


// 暴露接口
module.exports = {
    // 1、第一步： 告诉webpack编译的结果给谁
    target: 'node',
    // resolve配置webpack如何查找文件
    resolve: {
        // 扩展名
        extensions: ['.js', '.vue'],
        // 配置别名
        alias: {
            // 注意: 此时的/ 表示当前盘符
            vue$: 'vue/dist/vue.js',
            '@': path.join(process.cwd(), './home/src')
        }
    },
    // 入口文件
    entry: {
        "main": "./home/src/entry_server.js",
        "libs": ['vue', 'vuex', 'vue-router']
    },
    // 出口配置
    output: {
        // 出口设置在外面
        path: path.join(process.cwd(), './'),
        // 文件名
        filename: "[name].js",
        // 第二步：告诉编译器最终编译结果执行哪种规范
        libraryTarget: 'commonjs2'
    },
    // 模块
    module: {
        // 加载机
        rules: [
            // ES6
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // 排除文件夹
                exclude: '/node_modules',
                // 包含指定的文件夹
                include: path.join(process.cwd(), './src'),
                options: {
                    presets: ['env']
                }
            },
            // vue
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            // scss
            {
                test: /\.scss$/,
                use: ['css-loader', 'sass-loader']
            },
        ]
    },
    // 插件配置
    plugins: [
        new SSRPlugin({
            // 配置插件生成文件的路径
            filename: './bundle/vue-ssr-server-bundle.json'
        })
    ],
    // 模式
    mode: 'development'
}