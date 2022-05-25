/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-05-06 19:12:05
 * @LastEditTime: 2022-05-25 19:37:16
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description: 暂无
 * @FilePath: /question100/.eslintrc.js
 */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    overrides: [
        {
            files: ['test/**'],
            plugins: ['jest'],
            extends: ['plugin:jest/recommended'],
            rules: { 'jest/prefer-expect-assertions': 'off' },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        jest: {
            version: require('jest/package.json').version,
        },
    },
    rules: {},
};
