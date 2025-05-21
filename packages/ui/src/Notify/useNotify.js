import { useNotification } from '@kyvg/vue3-notification'

export const useNotify = () => {

    const { notify } = useNotification()

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

    const action = (notification) => {
        notify({ type: 'is-dark', ...notification })
    }

    const clear = () => {
        notify({ clean: true })
    }

    return {
        info,
        success,
        warn,
        alert,
        action,
        clear
    }
}