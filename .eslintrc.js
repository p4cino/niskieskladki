module.exports = {
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
            tsx: true
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    plugins: ['simple-import-sort'],
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:sonarjs/recommended',
        'plugin:unicorn/recommended',
        'plugin:security/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    ignorePatterns: [
        '_document.tsx'
    ],
    rules: {
        'no-console': 'error',
        'no-unused-vars': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'simple-import-sort/imports': 'error',
        'unicorn/filename-case': 'off',
        'unicorn/no-null': 'warn',
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'jsx-a11y/anchor-is-valid': 'warn'
    }
};
