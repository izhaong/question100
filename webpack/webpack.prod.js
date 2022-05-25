/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-05-21 14:13:56
 * @LastEditTime: 2022-05-25 13:12:59
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /question100/webpack/webpack.prod.js
 */
const { merge } = require("webpack-merge");
const webpackCommonConf = require("./webpack.common.js");
module.exports = merge(webpackCommonConf, {
    mode: "production",
    devtool: 'source-map',
    output: {
        filename: 'bundle.[contenthash:8].js',  // 打包代码时，加上 hash 戳
        path: distPath,
        // publicPath: 'http://cdn.abc.com'  // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到
    },
});
