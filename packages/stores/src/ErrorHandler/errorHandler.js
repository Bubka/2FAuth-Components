import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useErrorHandler = defineStore('errorHandler', () => {

    // STATE

    const lastError = ref(null)
    const message = ref(null)
    const originalMessage = ref(null)
    const debug = ref(null)

    // ACTIONS

    function $reset() {
        lastError.value = null;
        message.value = null;
        originalMessage.value = null;
        debug.value = null;
    }

    function parse(error) {
        $reset
        lastError.value = error

        // Hanlde axios response error
        if (error.response) {
            if (error.response.status === 407) {
                message.value = this.$i18n.t('error.auth_proxy_failed'),
                originalMessage.value = this.$i18n.t('error.auth_proxy_failed.legend')
            }
            else if (error.response.status === 403) {
                message.value = this.$i18n.t('error.unauthorized'),
                originalMessage.value = this.$i18n.t('error.unauthorized.legend')
            }
            else if(error.response.data) {
                message.value = error.response.data.message,
                originalMessage.value = error.response.data.originalMessage ?? null
                debug.value = error.response.data.debug ?? null
            }
        } else {
            message.value = error.message
            debug.value = error.stack ?? null
        }
    }

    return {
        lastError,
        message,
        originalMessage,
        debug,
        parse,
    }
})