/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-05-31 14:16:38
 * @LastEditTime: 2022-05-31 18:22:00
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /question100/src/01-algorithm/_5.快速排序.test.ts
 */
import { quickSort2 as quickSort } from './_5.快速排序';
describe('快速排序', () => {
    it('正常情况', () => {
        const arr = [1, 3, 5, 2, 4, 6, 9, 7, 8];
        expect(quickSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('空数组', () => {
        expect(quickSort([])).toEqual([]);
    });
    it('已排序数组', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(quickSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('连续数组', () => {
        const arr = [5, 5, 5, 5, 5];
        expect(quickSort(arr)).toEqual([5, 5, 5, 5, 5]);
    });
});
