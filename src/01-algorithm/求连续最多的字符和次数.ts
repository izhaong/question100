/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-05-30 16:47:34
 * @LastEditTime: 2022-05-30 17:39:36
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /question100/src/01-algorithm/求连续最多的字符和次数.ts
 */
interface IRes {
    char: string;
    length: number;
}

/**
 * @description: 求连续最多的字符和次数(嵌套循环) O(n)
 * @author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @param {string} str
 * @return {*}
 */
export function findContinuousChar1(str: string): IRes {
    const res: IRes = {
        char: '',
        length: 0,
    };
    const length = str.length;
    if (!length) return res;

    let tempLength = 0;
    for (let i = 0; i < length; i++) {
        tempLength = 0;

        for (let j = i; j < length; j++) {
            if (str[i] === str[j]) {
                tempLength++;
            }

            if (str[i] !== str[j] || j === length - 1) {
                if (res.length < tempLength) {
                    res.char = str[i];
                    res.length = tempLength;
                }
                if (i < length - 1) {
                    i = j - 1; // 跳步
                }
                break;
            }
        }
    }
    return res;
}

/**
 * @description: 求连续最多的字符和次数(双指针) O(n)
 * @author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @param {string} str
 * @return {*}
 */
export function findContinuousChar2(str: string): IRes {
    const res: IRes = {
        char: '',
        length: 0,
    };
    const length = str.length;
    if (!length) return res;

    let tempLength = 0;

    let i = 0;
    let j = 0;

    for (; i < length; i++) {
        if (str[i] === str[j]) {
            tempLength++;
        }
        if (str[i] !== str[j] || i === length - 1) {
            if (tempLength > res.length) {
                res.char = str[i];
                res.length = tempLength;
            }

            tempLength = 0;
            if (i < length - 1) {
                j = i;
                i--;
            }
        }
    }

    return res;
}

// 功能测试
const str = 'feeefaaaacjj';
const res = findContinuousChar2(str);
console.log(res);
