<script lang="ts" setup>
    import { logEvent } from 'histoire/client'
    import NavigationButton from './NavigationButton.vue'
    import { isDark } from 'histoire/client'

    const defaultState = {
        darkMode: isDark()
    }

    function initStateClose() {
        return {
            ...defaultState,
            action: 'close',
            targetPagetitle: 'MyPage',
        }
    }
    function initStateBack() {
        return {
            ...defaultState,
            action: 'back',
            targetPagetitle: 'MyPage',
        }
    }
    function initStateCancel() {
        return {
            ...defaultState,
            action: 'cancel',
        }
    }
    function initStateCapture() {
        return {
            ...defaultState,
            action: 'cancel',
            isCapture: true,
        }
    }
    function initStateIsText() {
        return {
            ...defaultState,
            action: 'cancel',
            isText: true,
        }
    }
    function initStateAsButtonTag() {
        return {
            ...defaultState,
            action: 'close',
            useLinkTag: false,
        }
    }

</script>

<template>
    <Story>
        <Variant title="Close" :init-state="initStateClose">
            <template #default="{ state }">
                <NavigationButton
                    :action="state.action"
                    @closed="logEvent('closed', $event)"
                    :darkMode="state.darkMode"
                />
            </template>
        </Variant>
        <Variant title="Back" :init-state="initStateBack">
            <template #default="{ state }">
                <NavigationButton
                    :action="state.action"
                    @goback="logEvent('goback', $event)"
                    :darkMode="state.darkMode"
                />
            </template>
        </Variant>
        <Variant title="Cancel" :init-state="initStateCancel">
            <template #default="{ state }">
                <NavigationButton
                    :action="state.action"
                    @canceled="logEvent('canceled', $event)"
                    :darkMode="state.darkMode"
                />
            </template>
        </Variant>
        <Variant title="Capture" :init-state="initStateCapture">
            <template #default="{ state }">
                <NavigationButton
                    :action="state.action"
                    :isCapture="state.isCapture"
                    @canceled="logEvent('canceled', $event)"
                    :darkMode="state.darkMode"
                />
            </template>
        </Variant>
        <Variant title="Is text" :init-state="initStateIsText">
            <template #default="{ state }">
                <NavigationButton
                    :action="state.action"
                    :isText="state.isText"
                    @canceled="logEvent('canceled', $event)"
                    :darkMode="state.darkMode"
                />
            </template>
        </Variant>
        <Variant title="As button tag" :init-state="initStateAsButtonTag">
            <template #default="{ state }">
                <NavigationButton
                    :action="state.action"
                    :useLinkTag="state.useLinkTag"
                    @closed="logEvent('closed', $event)"
                    :darkMode="state.darkMode"
                />
            </template>
        </Variant>
    </Story>
</template>