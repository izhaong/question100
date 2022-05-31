/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-05-31 17:38:29
 * @LastEditTime: 2022-05-31 18:20:34
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /question100/src/01-algorithm/_6.获取1-10000所有的回文数.test.ts
 */
import { findPalindromeNumbers1 as findPalindromeNumbers } from './_6.获取1-10000所有的回文数';

describe('获取1-10000所有的回文数', () => {
    it('正常情况', () => {
        const res = findPalindromeNumbers(10 * 1000);
        expect(res.length).toBe(199);
    });
    it('0 | 负数情况', () => {
        const res = findPalindromeNumbers(0);
        expect(res).toEqual([]);
    });
});
