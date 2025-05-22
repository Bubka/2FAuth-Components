/// <reference types="vitest" />

import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    plugins: [
        Vue(),
        VueI18nPlugin({
            include: [path.resolve(__dirname, '../../resources/lang/*.json')],

        })
    ],
    test: {
        globals: true,
        environment: 'jsdom',
    },
    build: {
        lib: {
            formats: ['es'],
            name: 'ui',
            fileName: (_,name) => `${name}.mjs`,
            entry: {
                index: resolve(__dirname,'src/index.js'),
            },
        },
        rollupOptions: {
            external: [
                '@2fauth/formcontrols',
                'vue',
                'vue-i18n',
                '@vueuse/core',
                '@vueuse/components',
                'lucide-vue-next',
                '@kyvg/vue3-notification'
            ],
        },
    },
})