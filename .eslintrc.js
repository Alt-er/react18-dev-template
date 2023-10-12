module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    overrides: [
        {
            // 这几个文件单独一个配置, 因为他们用的是node环境, 而不是浏览器环境
            files: ['webpack.config.js', '.eslintrc.js', 'postcss.config.js'],
            env: {
                node: true,
            },
            rules: {
                // 允许使用 require("./xx");
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:@typescript-eslint/recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'],
                moduleDirectory: ['node_modules', 'src/'],
            },
            // "alias": {
            //     "map": ["@", "./src/"],
            //     "extensions": [".js", ".jsx"]
            // }
            webpack: {
                config: 'webpack.config.js', // 加载webpack的配置 这里可以解决路径别名eslint不能识别的问题
            },
        },
    },
    plugins: ['@typescript-eslint', 'react', 'prettier'],
    globals: {
        __webpack_init_sharing__: true,
        __webpack_share_scopes__: true,
        process: true,
    },
    rules: {
        // 自定义规则可以在这里添加
        // 禁用prop-types检查
        'react/prop-types': 'off',
        // 开启eslint-plugin-prettier中的prettier规则
        // 开启这条规则后，会将prettier的校验规则传递给eslint，这样eslint就可以按照prettier的方式来进行代码格式的校验
        'prettier/prettier': 'error',
    },
};
