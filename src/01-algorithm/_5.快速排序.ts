/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-05-31 12:59:40
 * @LastEditTime: 2022-05-31 17:40:50
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /question100/src/01-algorithm/快速排序.ts
 */

export function quickSort1(arr: number[]): number[] {
    const length = arr.length;
    if (!length) return [];

    const midIndex = Math.floor(length / 2);
    const midValue = arr.splice(midIndex, 1)[0];

    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if (e > midValue) {
            right.push(e);
        } else {
            left.push(e);
        }
    }
    return quickSort1(left).concat([midValue], quickSort1(right));
}

export function quickSort2(arr: number[]): number[] {
    const length = arr.length;
    if (length === 0) return arr;

    const midIndex = Math.floor(length / 2);
    const midValue = arr.slice(midIndex, midIndex + 1)[0];
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < length; i++) {
        if (i !== midIndex) {
            const n = arr[i];
            if (n < midValue) {
                left.push(n);
            } else {
                right.push(n);
            }
        }
    }

    return quickSort2(left).concat([midValue], quickSort2(right));
}

// 功能测试
const arr = [1, 3, 5, 2, 4, 6, 9, 7, 8];
// console.log(quickSort1(arr));
console.log(quickSort2(arr));
