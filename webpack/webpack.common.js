/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-05-21 14:13:24
 * @LastEditTime: 2022-05-21 17:43:08
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description: 暂无
 * @FilePath: /question100/build/webpack.common.js
 */
const { srcPath, tplPath } = require("./paths");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(srcPath, "main"),
    module: {
        rules: [],
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(tplPath, "index.html"),
            filename: "index.html",
        }),
    ],
};
