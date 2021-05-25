// 引入path
const path = require('path');
// 引入模板解析插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 暴露接口
module.exports = {
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
        "main": "./home/src/entry_client.js",
        "libs": ['vue', 'vuex', 'vue-router']
    },
    // 出口配置
    output: {
        // 出口设置在外面
        path: path.join(process.cwd(), './'),
        // 文件名
        filename: "./static/[name].js",
        // 将前端引用文件的路径修改为绝对路径
        publicPath: '/'
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
            // css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // scss
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    // 插件配置
    plugins: [
        // 处理模板
        new HtmlWebpackPlugin({
            // 模板位置
            template: './home/public/index.html',
            // 发布位置 --- 相对于output中的path进行设置
            filename: './view/index.html',
            // 添加指纹
            hash: true
        })
    ],
    // optimization与entry/plugins同级
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'libs',
                    chunks: "initial",
                    minChunks: 1
                }
            }
        }
    },
    // 模式
    mode: 'development'
}