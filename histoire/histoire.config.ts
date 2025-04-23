import { resolve } from 'node:path'
import { HstVue } from '@histoire/plugin-vue'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'histoire'

export default defineConfig({
    outDir: './dist',
    plugins: [
        HstVue()
    ],
    storyMatch: [
        // resolve(__dirname,'../packages/vue-formcontrols/src/**/*.story.vue'),
        // resolve(__dirname, './../test/*.story.vue'),
        './../packages/vue-formcontrols/src/**/*.story.vue'
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
        ],
        server: {
            fs: {
                allow: [
                    './..'
                ],
            },
        },
    },
})