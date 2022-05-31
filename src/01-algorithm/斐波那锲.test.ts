/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-05-28 13:00:57
 * @LastEditTime: 2022-05-28 13:13:34
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /question100/src/01-algorithm/斐波那锲.test.ts
 */

import { fibonacci } from './斐波那锲';

describe('斐波那锲', () => {
    it('开始情况 0 || 1', () => {
        expect(fibonacci(0)).toBe(0);
        expect(fibonacci(1)).toBe(1);
    });

    it('正常情况', () => {
        expect(fibonacci(2)).toBe(1);
        expect(fibonacci(3)).toBe(2);
        expect(fibonacci(4)).toBe(3);
    });

    it('异常情况 <0', () => {
        expect(fibonacci(-2)).toBe(0);
    });
});
