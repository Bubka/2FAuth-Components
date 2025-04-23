<script lang="ts" setup>
    import { logEvent } from 'histoire/client'
    import VueFormButtons from './VueFormButtons.vue'

    function initState() {
        return {
            submitLabel: 'Submit',
            cancelLabel: 'Cancel',
            showCancelButton: true,
        }
    }
</script>

<template>
    <Story :init-state="initState">
        <template #default="{ state }">
            <VueFormButtons
                :submitLabel="state.submitLabel"
                :cancelLabel="state.cancelLabel"
                :showCancelButton="state.showCancelButton"
                @submit="logEvent('submit', $event)"
                @cancel="logEvent('cancel', $event)" />
        </template>
    </Story>
</template>