import { resolve } from 'node:path'
import { HstVue } from '@histoire/plugin-vue'
import Vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { defineConfig } from 'histoire'
import path from 'path'

export default defineConfig({
    outDir: './dist',
    plugins: [
        HstVue()
    ],
    storyMatch: [
        // resolve(__dirname,'../packages/formcontrols/src/**/*.story.vue'),
        // resolve(__dirname, './../test/*.story.vue'),
        './../packages/formcontrols/src/**/*.story.vue',
        './../packages/ui/src/**/*.story.vue'
    ],
    setupFile: './setup.ts',
    theme: {
        title: 'histoire @2FAuth',
    },
    backgroundPresets: [
        {
            label: 'Dark gray',
            color: '#242424',
            contrastColor: '#ccc'
        },
        {
          label: 'Light gray',
          color: '#f5f5f5',
          contrastColor: '#eee'
        },
        {
          label: 'Transparent',
          color: 'transparent',
          contrastColor: '#333'
        }
    ],
    vite: {
        plugins: [
            Vue(),
            VueI18nPlugin({
                include: [path.resolve(__dirname, '../resources/lang/*.json')],
    
            })
        ],
        server: {
            fs: {
                allow: [
                    './..'
                ],
            },
        },
    },
    tree: {
        groups: [
            {
                id: 'formcontrols',
                title: '@2FAuth/formcontrols',
                include: file => file.path.includes('packages/formcontrols'),
            },
            {
                id: 'ui',
                title: '@2FAuth/ui',
                include: file => file.path.includes('packages/ui'),
            },
        ],
    },
})