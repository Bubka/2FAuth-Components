import i18n from '../i18n'
import { reactive } from 'vue'
import { useNotification } from '@kyvg/vue3-notification'

const notifyState = reactive({
    error: null,
    message: '',
    originalMessage: '',
    debug: '',
})

export const useNotify = (error) => {
    
    const { t } = i18n.global
    const { notify } = useNotification()

    function reset() {
        notifyState.error = null;
        notifyState.message = null;
        notifyState.originalMessage = null;
        notifyState.debug = null;
    }

    function parseError(error) {
        reset()
        notifyState.error = error

        // Hnalde axios response error
        if (error.response) {
            if (error.response.status === 407) {
                notifyState.message = t('errors.auth_proxy_failed'),
                notifyState.originalMessage = t('errors.auth_proxy_failed_legend')
            }
            else if (error.response.status === 403) {
                notifyState.message = t('errors.unauthorized'),
                notifyState.originalMessage = t('errors.unauthorized_legend')
            }
            else if(error.response.data) {
                notifyState.message = error.response.data.message,
                notifyState.originalMessage = error.response.data.originalMessage ?? null
                notifyState.debug = error.response.data.debug ?? null
            }
        } else {
            notifyState.message = error.message
            notifyState.debug = error.stack ?? null
        }
    }

    // function notFound(error) {
    //     router.push({ name: '404' })
    // }

    // function error(error) {
    //     parseError(error)
    //     router.push({ name: 'genericError' })
    // }

    const info = (notification) => {
        notify({ type: 'is-info', ...notification })
    }

    const success = (notification) => {
        notify({ type: 'is-success', ...notification })
    }

    const warn = (notification) => {
        notify({ type: 'is-warning', ...notification })
    }

    const alert = (notification) => {
        notify({ type: 'is-danger', ...notification })
    }

    const forbidden = () => {
        notify({ type: 'is-danger', text: t('error.invalid_or_unknown_token') })
    }

    const action = (notification) => {
        notify({ type: 'is-dark', ...notification })
    }

    const clear = () => {
        notify({ clean: true })
    }

    return {
        // notFound,
        // error,
        info,
        success,
        warn,
        alert,
        forbidden,
        action,
        clear
    }
}