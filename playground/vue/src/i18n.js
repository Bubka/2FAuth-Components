import { createI18n } from 'vue-i18n'
// import en from '../../../resources/lang/en.json'
// import fr from '../../../resources/lang/fr.json'
import messages from '@intlify/unplugin-vue-i18n/messages'

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    globalInjection: true,
    messages
    // messages: {
    //     en: { ...en },
    //     fr: { ...fr },
    // }
})

export default i18n