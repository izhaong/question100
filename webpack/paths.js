/*
 * @Author: δ»²η<izhaong@outlook.com>πΆπΆπΆ
 * @Date: 2022-05-21 14:34:27
 * @LastEditTime: 2022-05-21 17:56:52
 * @LastEditors: δ»²η<izhaong@outlook.com>πΆπΆπΆ
 * @Description: ζζ 
 * @FilePath: /question100/build/paths.js
 */
const path = require("path");

const srcPath = path.join(__dirname, "", "../src");
const tplPath = path.join(__dirname, "..", "tpl");
const distPath = path.join(__dirname, "..", "dist");
module.exports = {
    srcPath,
    tplPath,
    distPath,
};
