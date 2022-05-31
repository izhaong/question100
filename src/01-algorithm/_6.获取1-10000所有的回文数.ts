/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-05-31 17:38:29
 * @LastEditTime: 2022-05-31 18:17:05
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /question100/src/01-algorithm/_6.获取1-10000所有的回文数.ts
 */

/**
 * @description: api
 * @author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @param {number} max
 * @return {*}
 */
export function findPalindromeNumbers1(max: number): number[] {
    const res: number[] = [];
    if (max <= 0) return res;

    for (let i = 0; i < max; i++) {
        const s = i.toString();
        if (s === s.split('').reverse().join('')) {
            res.push(i);
        }
    }
    return res;
}

/**
 * @description: 字符串
 * @author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @param {number} max
 * @return {*}
 */
function findPalindromeNumbers2(max: number): number[] {
    const res: number[] = [];
    if (max <= 0) return res;

    for (let i = 0; i < max; i++) {
        const s = i.toString();
        let start = 0;
        let end = s.length - 1;
        let flag = true;
        while (start < end) {
            if (s[start] !== s[end]) {
                flag = false;
                break;
            } else {
                start++;
                end--;
            }
        }
        if (flag) res.push(i);
    }
    return res;
}

/**
 * @description: 数字
 * @author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @param {number} max
 * @return {*}
 */
function findPalindromeNumbers3(max: number): number[] {
    const res: number[] = [];
    if (max <= 0) return res;

    for (let i = 0; i < max; i++) {
        let n = i; // 123 12 1 0
        let rev = 0; // 0 3 32 321

        while (n > 0) {
            // t t t t f
            rev = rev * 10 + (n % 10); // 0+3 30+2 320+1
            n = Math.floor(n / 10); // 12 1 0
        }
        if (rev === i) res.push(i);
    }
    return res;
}

// 功能测试
console.log(findPalindromeNumbers1(10 * 1000));
console.log(findPalindromeNumbers2(10 * 1000));
console.log(findPalindromeNumbers3(10 * 1000));

// 性能测试
const num = 1000 * 1000;
console.time('findPalindromeNumbers1');
findPalindromeNumbers1(num);
console.timeEnd('findPalindromeNumbers1'); // 284ms

console.time('findPalindromeNumbers2');
findPalindromeNumbers2(num);
console.timeEnd('findPalindromeNumbers2'); // 48ms

console.time('findPalindromeNumbers3');
findPalindromeNumbers3(num);
console.timeEnd('findPalindromeNumbers3'); // 34ms
