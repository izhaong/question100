/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-05-30 16:47:34
 * @LastEditTime: 2022-05-30 17:30:53
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /question100/src/01-algorithm/求连续最多的字符和次数.test.ts
 */
import { findContinuousChar1 as findContinuousChar } from './求连续最多的字符和次数';

describe('求连续最多的字符和次数', () => {
    it('正常情况', () => {
        const str = 'feeefaaaacjj';
        const res = findContinuousChar(str);
        expect(res).toEqual({ char: 'a', length: 4 });
    });

    it('空字符串', () => {
        expect(findContinuousChar('')).toEqual({ char: '', length: 0 });
    });
    it('无连续字符', () => {
        expect(findContinuousChar('qwerty')).toEqual({ char: 'q', length: 1 });
    });
    it('全是连续字符', () => {
        expect(findContinuousChar('aaaaa')).toEqual({ char: 'a', length: 5 });
    });
});
