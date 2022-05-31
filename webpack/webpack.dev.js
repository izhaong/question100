/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-05-21 14:13:33
 * @LastEditTime: 2022-05-30 17:39:15
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description: 暂无
 * @FilePath: /question100/webpack/webpack.dev.js
 */
const { merge } = require("webpack-merge");
const webpackCommonConf = require("./webpack.common.js");
module.exports = merge(webpackCommonConf, {
    mode: "development",
    // plugins: webpack.DefinePlugin({
    //     ENV: JSON.stringify(process.env.NODE_ENV),
    // }),
    devServer: {
        port: 3020,
        client: {
            overlay: {
                errors: true,
                warnings: true,
            },
            progress: true,
        },
        compress: true,
    },
});
