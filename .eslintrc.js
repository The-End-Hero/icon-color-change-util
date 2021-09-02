module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:prettier/recommended", // 如果同时使用了eslint和prettier发生冲突了，会关闭掉与prettier有冲突的规则，也就是使用prettier认为对的规则
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "prettier", // eslint 会使用pretter的规则对代码格式化
    ],
    "rules": {
        'no-console': 'warn',
        'no-redeclare': 'error',
        "prettier/prettier": 2, // 这项配置 对于不符合prettier规范的写法，eslint会提示报错
    }
};
