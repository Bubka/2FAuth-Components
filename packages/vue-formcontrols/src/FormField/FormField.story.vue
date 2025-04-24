<script lang="ts" setup>
    import { logEvent } from 'histoire/client'
    import FormField from './FormField.vue'

    function initStateDefault() {
        return {
            model: '',
            label: 'Label',
            fieldname: 'MyFieldName',
            errorMessage: 'This is the validation error text',
            placeholder: 'your placeholder...',
            help: 'This is the help text',
            isIndented: false,
            isLocked: false,
        }
    }
    function initStateWithIcon() {
        return {
            ...initStateDefault(),
            leftIcon: 'Slash',
            rightIcon: 'Slash',
        }
    }
</script>

<template>
    <Story>
        <Variant title="default" :init-state="initStateDefault">
            <template #default="{ state }">
                <FormField
                    v-model="state.model"
                    @update:model-value="logEvent('update:model-value', $event)"
                    @change:model-value="logEvent('change:model-value', $event)"
                    inputType="text"
                    :label="state.label"
                    :fieldName="state.fieldname"
                    :errorMessage="state.errorMessage"
                    :placeholder="state.placeholder"
                    :help="state.help"
                    :is-indented="state.isIndented"
                    :is-locked="state.isLocked"
                />
            </template>
        </Variant>
        <Variant title="With icons" :init-state="initStateWithIcon">
            <template #default="{ state }">
                <FormField
                    v-model="state.model"
                    inputType="text"
                    :label="state.label"
                    :fieldName="state.fieldname"
                    :errorMessage="state.errorMessage"
                    :placeholder="state.placeholder"
                    :help="state.help"
                    :is-indented="state.isIndented"
                    :is-locked="state.isLocked"
                    :leftIcon="state.leftIcon"
                    :rightIcon="state.rightIcon"
                />
            </template>
        </Variant>
    </Story>
</template>