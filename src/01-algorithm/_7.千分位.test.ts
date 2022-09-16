/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-06-01 17:44:04
 * @LastEditTime: 2022-06-01 17:47:26
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /question100/src/01-algorithm/_7.千分位.test.ts
 */
import { format1 as format } from './_7.千分位';

describe('千分位', () => {
    it('正常情况', () => {
        const n = 123456789;
        expect(format(n)).toBe('123,456,789');
    });
    it('0', () => {
        const n = 0;
        expect(format(n)).toBe('0');
    });
});
