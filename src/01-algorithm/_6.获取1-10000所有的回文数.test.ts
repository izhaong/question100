/*
 * @Author: δ»²η<izhaong@outlook.com>πΆπΆπΆ
 * @Date: 2022-05-31 17:38:29
 * @LastEditTime: 2022-05-31 18:20:34
 * @LastEditors: δ»²η<izhaong@outlook.com>πΆπΆπΆ
 * @Description:
 * @FilePath: /question100/src/01-algorithm/_6.θ·ε1-10000ζζηεζζ°.test.ts
 */
import { findPalindromeNumbers1 as findPalindromeNumbers } from './_6.θ·ε1-10000ζζηεζζ°';

describe('θ·ε1-10000ζζηεζζ°', () => {
    it('ζ­£εΈΈζε΅', () => {
        const res = findPalindromeNumbers(10 * 1000);
        expect(res.length).toBe(199);
    });
    it('0 | θ΄ζ°ζε΅', () => {
        const res = findPalindromeNumbers(0);
        expect(res).toEqual([]);
    });
});
