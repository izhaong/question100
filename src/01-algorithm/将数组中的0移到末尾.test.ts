/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-05-28 15:01:04
 * @LastEditTime: 2022-05-28 15:06:37
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /question100/src/01-algorithm/将数组中的0移到末尾.test.ts
 */
import { moveZero2 } from './将数组中的0移到末尾';

describe('将数组中的0移到末尾', () => {
    it('正常情况', () => {
        const arr = [1, 0, 4, 0, 0, 9, 0, 0, 0, 13, 0];
        moveZero2(arr);
        expect(arr).toEqual([1, 4, 9, 13, 0, 0, 0, 0, 0, 0, 0]);
    });

    it('没有0的情况', () => {
        const arr = [1, 4, 9, 13];
        moveZero2(arr);
        expect(arr).toEqual([1, 4, 9, 13]);
    });

    it('全是0的情况', () => {
        const arr = [0, 0, 0, 0];
        moveZero2(arr);
        expect(arr).toEqual([0, 0, 0, 0]);
    });
});
