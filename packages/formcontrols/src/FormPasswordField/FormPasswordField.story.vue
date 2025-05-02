<script lang="ts" setup>
    import { logEvent } from 'histoire/client'
    import FormPasswordField from './FormPasswordField.vue'

    function initStateDefault() {
        return {
            model: 'pwd',
            label: 'Password',
            fieldname: 'MyFieldName',
            errorMessage: 'This is the validation error text',
            help: 'This is the help text',
            isLocked: false,
            showRules: true,
        }
    }
</script>

<template>
    <Story :init-state="initStateDefault">
        <template #default="{ state }">
            <FormPasswordField
                v-model="state.model"
                @update:model-value="logEvent('update:model-value', $event)"
                :label="state.label"
                :fieldName="state.fieldname"
                :errorMessage="state.errorMessage"
                :help="state.help"
                :is-locked="state.isLocked"
                :showRules="state.showRules"
            />
        </template>
    </Story>
</template>