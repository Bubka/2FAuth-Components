import '@2fauth/styles'

import { defineSetupVue3 } from '@histoire/plugin-vue'
import WrapperGlobal from './Wrapper.vue'
import i18n from './i18n'

export const setupVue3 = defineSetupVue3(({ app, addWrapper }) => {
    
    // Localization
    app.use(i18n)

    addWrapper(WrapperGlobal)
})