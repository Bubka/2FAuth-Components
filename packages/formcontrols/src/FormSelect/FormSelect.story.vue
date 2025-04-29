<script lang="ts" setup>
    import { logEvent } from 'histoire/client'
    import FormSelect from './FormSelect.vue'

    function initStateDefault() {
        return {
            model: 2,
            options: [
                { text: 'message.option_1', value: 1 },
                { text: 'message.option_2', value: 2 },
                { text: 'message.option_3', value: 3 },
            ],
            label: 'Password',
            fieldname: 'MyFieldName',
            errorMessage: 'This is the validation error text',
            help: 'This is the help text',
            isIndented: false,
            isLocked: false,
            showRules: true,
        }
    }
</script>

<template>
    <Story :init-state="initStateDefault">
        <template #default="{ state }">
            <FormSelect
                v-model="state.model"
                :options="state.options"
                @update:model-value="logEvent('update:model-value', $event)"
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