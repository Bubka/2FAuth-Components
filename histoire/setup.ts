import '@2fauth/styles/src/app.scss'

import { defineSetupVue3 } from '@histoire/plugin-vue'
import WrapperGlobal from './Wrapper.vue'
import i18n from './i18n'
import Notifications from '@kyvg/vue3-notification'

export const setupVue3 = defineSetupVue3(({ app, addWrapper }) => {
    
    // Localization
    app.use(i18n)
    
    // Notifications
    app.use(Notifications)

    addWrapper(WrapperGlobal)
})