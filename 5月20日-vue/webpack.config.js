// 暴露接口
module.exports = {
    // resolve配置webpack如何查找文件
    resolve: {
        // 扩展名
        // extensions: ['.js', '.scss', '.es', '.css', '.less'],
        extensions: ['.js'],
        // 配置别名
        alias: {
            // 注意此时的 '/'为E盘
            vue$: '/node_modules/vue/dist/vue.js',
            // vuex: '/node_modules/vuex/dist/vuex.js'
        }
    },
    // 入口文件
    entry: {
        "01": "./modules/01.js",
        "02": "./modules/02.js",
        "03": "./modules/03.js",
        "04": "./modules/04.js",
        "05": "./modules/05.js",
        "06": "./modules/06.js"
    },
    // 出口配置
    output: {
        // 文件名
        filename: "[name].js"
    },
    // 加载机
    module: {
        // 匹配规则
        rules: [
            // ES6
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // 排除文件夹
                exclude: '/node_modules',
                // 包含指定的文件夹
                include: '/modules',
                options: {
                    presets: ['env']
                }
            },
            // css
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader'
                use: ['style-loader', 'css-loader']
            },
            // scss
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // less
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    // 模式
    mode: 'development'
}