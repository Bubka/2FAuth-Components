import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VueI18nPlugin({
            include: [path.resolve(__dirname, '../../resources/lang/*.json')],

        })
    ],
})
