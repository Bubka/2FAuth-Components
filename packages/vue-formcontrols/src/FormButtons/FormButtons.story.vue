<script lang="ts" setup>
    import { logEvent } from 'histoire/client'
    import FormButtons from './FormButtons.vue'

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
            <FormButtons
                :submitLabel="state.submitLabel"
                :cancelLabel="state.cancelLabel"
                :showCancelButton="state.showCancelButton"
                @submit="logEvent('submit', $event)"
                @cancel="logEvent('cancel', $event)" />
        </template>
    </Story>
</template>