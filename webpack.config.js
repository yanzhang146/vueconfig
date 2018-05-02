const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "main.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }, 
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            }, 
            {
                test: /\.(ttf)|(woff)|(woff2)|(eot)|(svg)$/,
                use: ["file-loader"]
            }, 
            {
                test: /\.(gif)|(jpg)|(png)|(jpeg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 800
                    }
                }]
            },
            {
                test: /\.js$/,
                use: ["babel-loader"]
            }
        ]
    },
    //配置webpack要用到的插件
    //1. html-webpack-plugin: 可以把index.html自动复制到dist目录，并且自动一如bundle.js
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        })
    ]
}