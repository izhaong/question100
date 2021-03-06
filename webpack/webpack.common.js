/*
 * @Author: δ»²η<izhaong@outlook.com>πΆπΆπΆ
 * @Date: 2022-05-21 14:13:24
 * @LastEditTime: 2022-05-28 12:44:50
 * @LastEditors: δ»²η<izhaong@outlook.com>πΆπΆπΆ
 * @Description: ζζ 
 * @FilePath: /question100/webpack/webpack.common.js
 */
const { srcPath, tplPath } = require("./paths");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(srcPath, "main"),
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: ['babel-loader'],
            //     include: srcPath,
            //     exclude: /node_modules/
            // },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
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
