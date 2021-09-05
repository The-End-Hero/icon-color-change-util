// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // 如果同时使用了eslint和prettier发生冲突了，会关闭掉与prettier有冲突的规则，也就是使用prettier认为对的规则
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier', // eslint 会使用pretter的规则对代码格式化
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'warn',
    'no-redeclare': 'error',
    'prettier/prettier': 2, // 这项配置 对于不符合prettier规范的写法，eslint会提示报错
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-angle-bracket-type-assertion': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/ban-ts-comment': 0,
  },
};
