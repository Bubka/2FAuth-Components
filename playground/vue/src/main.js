import '@2fauth/styles'

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n'

const app = createApp(App)

// Localization
app.use(i18n)

app.mount('#app')
