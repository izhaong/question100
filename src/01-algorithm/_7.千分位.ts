/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-06-01 17:26:19
 * @LastEditTime: 2022-06-01 17:43:12
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /question100/src/01-algorithm/_7.千分位.ts
 */
export function format1(n: number): string {
    n = Math.floor(n);

    const arr = n.toString().split('').reverse();
    return arr.reduce((prev, val, index) => {
        if (index % 3 === 0) {
            if (prev) {
                return val + ',' + prev;
            } else {
                return val;
            }
        } else {
            return val + prev;
        }
    }, '');
}

export function format2(n: number): string {
    n = Math.floor(n);

    const s = n.toString();
    const length = s.length;
    let res = '';
    for (let i = length - 1; i >= 0; i--) {
        if ((length - i) % 3 === 0) {
            if (i === 0) {
                res = s[i] + res;
            } else {
                res = ',' + s[i] + res;
            }
        } else {
            res = s[i] + res;
        }
    }
    return res;
}

// 功能测试
const n = 123456789;
console.log(format1(n));
console.log(format2(n));
