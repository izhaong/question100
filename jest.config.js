/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-05-25 19:42:56
 * @LastEditTime: 2022-05-31 18:29:38
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /question100/jest.config.js
 */

module.exports = {
    roots: ['<rootDir>'],
    testEnvironment: 'jsdom',
    testMatch: ['**/(*.)+(spec|test).+(ts|js|tsx)'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.js$': 'ts-jest',
    },
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.json',
        },
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: ['node_modules'],
};
