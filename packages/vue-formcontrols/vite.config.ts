/// <reference types="vitest" />

import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        Vue()
    ],
    test: {
        globals: true,
        environment: 'jsdom',
    },
    build: {
        lib: {
            formats: ['es'],
            name: 'vue-formcontrols',
            fileName: (_,name) => `${name}.mjs`,
            entry: {
                index: resolve(__dirname,'src/index.js'),
            },
        },
        rollupOptions: {
            external: ['vue'],
        },
    },
})