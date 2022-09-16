/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-06-01 18:13:25
 * @LastEditTime: 2022-06-01 18:17:25
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /question100/src/01-algorithm/_8.大小写互转.ts
 */
export function switchLetterCase1(s: string): string {
    const regL = /[a-z]/;
    const regU = /[A-Z]/;

    let res = '';

    for (let i = 0; i < s.length; i++) {
        const e = s[i];
        if (regL.test(e)) {
            res += e.toUpperCase();
        } else if (regU.test(e)) {
            res += e.toLowerCase();
        } else {
            res += e;
        }
    }

    return res;
}

export function switchLetterCase2(s: string): string {
    let res = '';
    for (let i = 0; i < s.length; i++) {
        const e = s[i];
        const code = e.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            res += e.toLowerCase();
        } else if (code >= 97 && code <= 122) {
            res += e.toUpperCase();
        } else {
            res += e;
        }
    }

    return res;
}

// 功能测试
const s = '1231sdjfsjdf^^*';
const res1 = switchLetterCase1(s);
const res2 = switchLetterCase2(s);
console.log(res1, res2);

// 性能测试
// ..
