/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-06-01 18:22:03
 * @LastEditTime: 2022-06-01 18:23:45
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /question100/src/01-algorithm/_8.大小写互转.test.ts
 */
import { switchLetterCase1 as switchLetterCase } from './_8.大小写互转';

describe('大小写互转', () => {
    it('正常情况', () => {
        const s = '1231sdjfsjdf^^*';
        expect(switchLetterCase(s)).toBe('1231SDJFSJDF^^*');
    });
});
