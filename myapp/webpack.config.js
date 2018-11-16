const path = require('path');
const static = './public/';

module.exports = {
    mode: "development",
    // 入口文件，在该文件开始查找依赖
    entry: {
        app: static + "javascripts/index.js",
    },
    output: {
        // 资源（打包后的文件）输出的文件夹
        path: path.resolve(__dirname, static + "dist"),

        // entry输出的格式，允许使用占位符
        // name : entry 的 key 或 main
        // hash : 一次构建整个的hash，所有文件的 [hash] 都一致
        // chunkhash : 单个文件的hash，每个文件不一致
        filename: "bundle.js",
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }
}