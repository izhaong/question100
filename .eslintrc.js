/*
 * @Author: δ»²η<izhaong@outlook.com>πΆπΆπΆ
 * @Date: 2022-05-06 19:12:05
 * @LastEditTime: 2022-05-31 18:33:48
 * @LastEditors: δ»²η<izhaong@outlook.com>πΆπΆπΆ
 * @Description: ζζ 
 * @FilePath: /question100/.eslintrc.js
 */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [
        {
            files: ['test/**', '*.test.*'],
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
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            version: require('jest/package.json').version,
        },
    },
    rules: {},
};
