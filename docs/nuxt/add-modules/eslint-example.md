---
outline: deep
---

# Example eslint config for Nuxt

Here you can get a working example for the eslint config file for Nuxt. 

::: info 
This was used for Nuxt (<Badge type="tip" text="^3.15.1" />) and
eslint (<Badge type="tip" text="^0.7.5" />) (@nuxt/eslint).

If you have not set up your Nuxt project to work with eslint, you can check the 
[setup guide](/nuxt/add-modules/eslint-nuxt-module).
:::


## Prerequisites
Before the example above will work, you need to install some dependencies. Here is 
the list of what you will need:

### 1. Install core ESLint and Nuxt-specific configs:

```console
npm install --save-dev eslint @nuxt/eslint-config @rushstack/eslint-patch
```

### 2. Add Vue and TypeScript-specific plugins:

```console
npm install --save-dev eslint-plugin-vue @vue/eslint-config-typescript @vue/eslint-config-prettier
```

### 3. Install TypeScript ESLint plugins:

```console
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### 4. Install other recommended plugins:

This it not explicitly needed, but recommended and also used in the example above.

```console
npm install --save-dev eslint-plugin-import eslint-plugin-cypress eslint-config-prettier
```


## Example `eslint.config.mjs`
```js
// eslint.config.mjs
import { modernModuleResolution } from '@rushstack/eslint-patch';
modernModuleResolution();

import eslintRecommended from 'eslint/conf/eslint-recommended.js';
import vueEssential from 'eslint-plugin-vue/lib/configs/vue3-essential.js';
import vueTypescript from '@vue/eslint-config-typescript';
import vuePrettier from '@vue/eslint-config-prettier/skip-formatting.js';
import nuxtConfig from '@nuxt/eslint-config';
import cypressRecommended from 'eslint-plugin-cypress/lib/configs/recommended.js';

export default [
    eslintRecommended,
    vueEssential,
    vueTypescript,
    vuePrettier,
    nuxtConfig,
    {
        files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
        ...cypressRecommended,
    },
    {
        ignores: [
            '**/.vscode/*',
            '**/*.css',
            '**/*.min.js',
            '**/dist/*',
            '**/licenses/*',
            '**/locale/*',
            '**/misc/*',
            '**/node_modules/*',
            '**/cypress/*',
            '**/patches/*',
            '**/public/*',
            '**/src/assets/*',
            '**/src/vendor/*',
            '**/tests/*',
            'babel.config.js',
            'jest.config.js',
            'postcss.config.js',
            'tailwind.js',
            'vc-trade.ts',
            'vue.config.js',
        ],
    },
    {
        rules: {
            'vue/no-unsupported-features': ['error', { version: '3.3.11', ignores: [] }],
            'import/order': [
                'warn',
                {
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
            'import/no-unresolved': 'off',
            '@typescript-eslint/ban-ts-comment': 'warn',
            '@typescript-eslint/ban-types': 'warn',
            '@typescript-eslint/no-empty-interface': 'warn',
            '@typescript-eslint/no-inferrable-types': 'off',
            '@typescript-eslint/no-this-alias': 'warn',
            '@typescript-eslint/no-var-requires': 'warn',
            '@typescript-eslint/explicit-module-boundary-types': 'warn',
            '@typescript-eslint/explicit-function-return-type': [
                'warn',
                {
                    allowTypedFunctionExpressions: false,
                },
            ],
            '@typescript-eslint/no-shadow': ['error'],
            'space-before-function-paren': [
                'error',
                {
                    anonymous: 'never',
                    named: 'never',
                    asyncArrow: 'always',
                },
            ],
            'no-shadow': 'off',
            'getter-return': 'error',
            'max-len': [
                'error',
                200,
                {
                    ignorePattern: 'd="([\\s\\S]*?)"',
                    ignoreTrailingComments: true,
                    ignoreComments: true,
                },
            ],
            'no-console': 'error',
            'no-debugger': 'warn',
            'no-empty': 'error',
            'no-extra-boolean-cast': 'warn',
            'no-inferrable-types': 'off',
            'no-irregular-whitespace': 2,
            'no-prototype-builtins': 'error',
            'no-trailing-spaces': 'error',
            'no-undef': 'warn',
            'prefer-const': 'error',
            'vue/no-dupe-keys': 'warn',
            'prefer-spread': 'warn',
            'no-unreachable': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            'no-unused-vars': 'off',
            'no-useless-escape': 'error',
            'no-var': 'error',
            semi: 'error',
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: '*', next: 'switch' },
                { blankLine: 'always', prev: '*', next: 'if' },
                { blankLine: 'always', prev: 'block-like', next: '*' },
                { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
                { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            ],
            'vue/script-setup-uses-vars': 'error',
            'vue/no-parsing-error': 'error',
            'vue/no-use-v-if-with-v-for': 'error',
            'object-curly-spacing': [2, 'always'],
            'vue/object-curly-spacing': ['error', 'always'],
            'vue/require-v-for-key': 'error',
            'vue/no-multi-spaces': 'error',
            'vue/component-tags-order': [
                'warn',
                {
                    order: [['script', 'template'], 'style'],
                },
            ],
            'vue/padding-line-between-blocks': 'warn',
            'vue/valid-template-root': 'error',
            'vue/valid-v-for': 'warn',
            'vue/valid-v-text': 'error',
            quotes: ['error', 'single'],
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: 1,
                    multiline: {
                        max: 1,
                    },
                },
            ],
            'vue/first-attribute-linebreak': [
                'warn',
                {
                    singleline: 'ignore',
                    multiline: 'below',
                },
            ],
            'vue/script-indent': [
                'error',
                2,
                {
                    baseIndent: 1,
                    switchCase: 1,
                },
            ],
            'vue/component-name-in-template-casing': 'warn',
            'vue/multi-word-component-names': 'warn',
            'vue/no-useless-template-attributes': 'warn',
            'vue/html-closing-bracket-newline': [
                'warn',
                {
                    singleline: 'never',
                    multiline: 'never',
                },
            ],
            'vue/html-indent': [
                2,
                2,
                {
                    attribute: 1,
                    baseIndent: 1,
                    closeBracket: 0,
                    alignAttributesVertically: true,
                    ignores: [],
                },
            ],
            'vue/no-required-prop-with-default': ['error', { autofix: false }],
        },
    },
];
```