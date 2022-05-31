/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-05-28 13:33:57
 * @LastEditTime: 2022-05-29 21:31:20
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /question100/src/01-algorithm/将数组中的0移到末尾.ts
 */

/**
 * 如输入[1，0， 3，0， 11，0]，输出「1，3， 11，0， 0， 0]
 * 只移动0，其他顺序不变
 * 必须在原数组进行操作
 */

/**
 * @description: 时间复杂度O(n^2)
 * @author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @param {number} arr
 * @return {*}
 */
export function moveZero1(arr: number[]): void {
    const length = arr.length;
    if (!length) return;
    let zeroLen = 0;
    for (let i = 0; i < length - zeroLen; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1); // 本身时间复杂度为 O(n)
            arr.push(0);
            zeroLen++;
            i--;
        }
    }
}

/**
 * @description: 双指针 时间复杂度O(n)
 * @author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @param {number} arr
 * @return {*}
 */
export function moveZero2(arr: number[]): void {
    const length = arr.length;
    if (!length) return;

    let i = 0;
    let j = -1;
    for (i = 0; i < arr.length; i++) {
        const e = arr[i];
        if (e === 0) {
            if (j < 0) {
                j = i;
            }
        }
        if (e !== 0 && j >= 0) {
            const n = arr[j];
            arr[j] = arr[i];
            arr[i] = n;
            j++;
        }
    }
}

// 功能测试
// const arr = [1, 0, 4, 0, 0, 9, 0, 0, 0, 13, 0];
// moveZero(arr);
// console.log(arr);

// 性能测试
const arr1 = [];
for (let i = 0; i < 20 * 1000; i++) {
    if (i % 10) {
        arr1.push(0);
    } else {
        arr1.push(i);
    }
}
console.time('moveZero1');
moveZero1(arr1);
console.timeEnd('moveZero1');

const arr2 = [];
for (let i = 0; i < 20 * 1000; i++) {
    if (i % 10) {
        arr2.push(0);
    } else {
        arr2.push(i);
    }
}
console.time('moveZero2');
moveZero2(arr2);
console.timeEnd('moveZero2');
