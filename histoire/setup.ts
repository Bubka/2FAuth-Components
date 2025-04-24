import '@2fauth/styles'

import { defineSetupVue3 } from '@histoire/plugin-vue'
import WrapperGlobal from './Wrapper.vue'

export const setupVue3 = defineSetupVue3(({ addWrapper }) => {
    addWrapper(WrapperGlobal)
})