<script lang="ts" setup>
    import { logEvent } from 'histoire/client'
    import FormProtectedField from './FormProtectedField.vue'
    import { isDark } from 'histoire/client'

    function initStateDefault() {
        return {
            model: 'secret',
            label: 'Protected field',
            fieldname: 'MyFieldName',
            errorMessage: 'This is the validation error text',
            help: 'This is the help text',
            isIndented: false,
            isLocked: false,
            enableProtection: true,
            darkMode: isDark()
        }
    }
</script>

<template>
    <Story :init-state="initStateDefault">
        <template #default="{ state }">
            <FormProtectedField
                v-model="state.model"
                @update:model-value="logEvent('update:model-value', $event)"
                inputType="text"
                :enableProtection="state.enableProtection"
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