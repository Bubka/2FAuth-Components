import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from "globals"

export default [
    {
        name: 'app/files-to-lint',
        files: ['**/*.{js,mjs,jsx,vue}']
    },

    {
        name: 'app/files-to-ignore',
        ignores: [],
    },

    js.configs.recommended,
    ...pluginVue.configs['flat/essential'],

    {
        name: 'app/global-rules-disabling',
        rules: {
            'vue/multi-word-component-names': 'off',
            'no-unused-vars': 'off',
        },
        languageOptions: {
            globals: {
                ...globals.browser,
            }
        }
    }
]
