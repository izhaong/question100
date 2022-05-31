/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-05-28 12:28:13
 * @LastEditTime: 2022-05-28 13:06:42
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /question100/src/01-algorithm/斐波那锲.ts
 */

/**
 * @description: 递归 时间复杂度O(2^n)
 * @author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @param {number} n
 * @return {*}
 */
// function fibonacci(n: number): number {
//     if (n <= 0) return 0;
//     if (n === 1) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

/**
 * @description: 循环 O(n)
 * @author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @return {*}
 */
export function fibonacci(n: number): number {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let n1 = 1;
    let n2 = 0;
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res = n1 + n2;
        n2 = n1;
        n1 = res;
    }

    return res;
}

// 功能测试
// console.log(fibonacci(9));
