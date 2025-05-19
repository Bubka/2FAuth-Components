<script lang="ts" setup>
    import { logEvent } from 'histoire/client'
    import NavigationButton from './NavigationButton.vue'

    function initStateClose() {
        return {
            action: 'close',
            targetPagetitle: 'MyPage',
        }
    }
    function initStateBack() {
        return {
            action: 'back',
            targetPagetitle: 'MyPage',
        }
    }
    function initStateCancel() {
        return {
            action: 'cancel',
        }
    }
    function initStateCapture() {
        return {
            action: 'cancel',
            isCapture: true,
        }
    }
    function initStateIsText() {
        return {
            action: 'cancel',
            isText: true,
        }
    }
    function initStateAsButtonTag() {
        return {
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
                />
            </template>
        </Variant>
        <Variant title="Back" :init-state="initStateBack">
            <template #default="{ state }">
                <NavigationButton
                    :action="state.action"
                    @goback="logEvent('goback', $event)"
                />
            </template>
        </Variant>
        <Variant title="Cancel" :init-state="initStateCancel">
            <template #default="{ state }">
                <NavigationButton
                    :action="state.action"
                    @canceled="logEvent('canceled', $event)"
                />
            </template>
        </Variant>
        <Variant title="Capture" :init-state="initStateCapture">
            <template #default="{ state }">
                <NavigationButton
                    :action="state.action"
                    :isCapture="state.isCapture"
                    @canceled="logEvent('canceled', $event)"
                />
            </template>
        </Variant>
        <Variant title="Is text" :init-state="initStateIsText">
            <template #default="{ state }">
                <NavigationButton
                    :action="state.action"
                    :isText="state.isText"
                    @canceled="logEvent('canceled', $event)"
                />
            </template>
        </Variant>
        <Variant title="As button tag" :init-state="initStateAsButtonTag">
            <template #default="{ state }">
                <NavigationButton
                    :action="state.action"
                    :useLinkTag="state.useLinkTag"
                    @closed="logEvent('closed', $event)"
                />
            </template>
        </Variant>
    </Story>
</template>