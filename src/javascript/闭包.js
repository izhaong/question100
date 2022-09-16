/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-05-31 23:07:12
 * @LastEditTime: 2022-06-01 11:02:20
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /question100/src/javascript/闭包.js
 */
function createCounter() {
    let counter = 0;
    const myFunction = function () {
        counter = counter + 1;
        return counter;
    };
    return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);

/**
 * @description: 1-100 每隔一秒 有序输出
 * @author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @return {*}
 */

for (let i = 1; i <= 100; i++) {
    ((j) => {
        setTimeout(() => {
            console.log(j);
        }, 1000 * j);
    })(i);
}
