<script lang="ts" setup>
    import { logEvent } from 'histoire/client'
    import FormTextarea from './FormTextarea.vue'

    function initStateDefault() {
        return {
            model: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            fontSize: 'is-small',
            label: 'Label',
            row: 4,
            fieldname: 'MyFieldName',
            errorMessage: 'This is the validation error text',
            help: 'This is the help text',
            isIndented: false,
            isLocked: false,
        }
    }
</script>

<template>
    <Story :init-state="initStateDefault">
        <template #default="{ state }">
            <FormTextarea
                v-model="state.model"
                @update:model-value="logEvent('update:model-value', $event)"
                @change:model-value="logEvent('change:model-value', $event)"
                :rows="state.row"
                :fontSize="state.fontSize"
                :label="state.label"
                :fieldName="state.fieldname"
                :errorMessage="state.errorMessage"
                :help="state.help"
                :is-indented="state.isIndented"
                :is-locked="state.isLocked"
            />
        </template>
    </Story>
</template>