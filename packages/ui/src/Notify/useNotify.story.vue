<script lang="ts" setup>
    import { reactive, watch } from 'vue'
    import { useNotify } from './useNotify'
    import { useI18n } from 'vue-i18n'
    
    const { t } = useI18n()

    const state = reactive({
        message: 'This is my message',
        notify: ''
    })

    watch(
        () => state.notify,
        (newNotification) => {
            switch (newNotification) {
                case 'success':
                    useNotify().success({ text: t('test.success') })
                    break
                case 'info':
                    useNotify().info({ text: t('test.info') })
                    break
                case 'warn':
                    useNotify().warn({ text: t('test.warn') })
                    break
                case 'alert':
                    useNotify().alert({ text: t('test.alert') })
                    break
                case 'action':
                    useNotify().action({ text: t('test.action') })
                    break
                case 'clear':
                    useNotify().clear()
                    break
            }
        }
    )
</script>

<template>
    <Story auto-props-disabled >
        <notifications
            id="vueNotification"
            role="alert"
            width="100%"
            position="top"
            :duration="4000"
            :speed="0"
            :max="1"
            classes="notification notification-banner is-radiusless" />
        <template #controls>
            <HstButton color="primary" class="htw-p-2" @click="state.notify = 'info'" :style="'margin: 15px 7px 7px 7px;'">
                Info
            </HstButton>
            <HstButton color="primary" class="htw-p-2" @click="state.notify = 'success'" :style="'margin: 7px 7px;'">
                Success
            </HstButton>
            <HstButton color="primary" class="htw-p-2" @click="state.notify = 'warn'" :style="'margin: 7px 7px;'">
                Warn
            </HstButton>
            <HstButton color="primary" class="htw-p-2" @click="state.notify = 'alert'" :style="'margin: 7px 7px;'">
                Alert
            </HstButton>
            <HstButton color="primary" class="htw-p-2" @click="state.notify = 'action'" :style="'margin: 7px 7px;'">
                Action
            </HstButton>
            <HstButton color="primary" class="htw-p-2" @click="state.notify = 'clear'" :style="'margin: 7px 7px;'">
                Clear()
            </HstButton>
      </template>
    </Story>
</template>