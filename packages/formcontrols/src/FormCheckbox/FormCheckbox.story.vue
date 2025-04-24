<script lang="ts" setup>
    import { logEvent } from 'histoire/client'
    import FormCheckbox from './FormCheckbox.vue'

    function initState() {
        return {
            model: true,
            label: 'Label',
            help: 'This is where comes the help text',
            fieldname: 'MyFieldName',
            isIndented: false,
            isLocked: false,
        }
    }
</script>

<template>
    <Story :init-state="initState">
        <template #default="{ state }">
            <FormCheckbox
                @update:model-value="logEvent('update:modelValue', $event)"
                v-model="state.model"
                :fieldName="state.fieldname"
                :label="state.label"
                :help="state.help"
                :isIndented="state.isIndented"
                :isLocked="state.isLocked" />
        </template>
    </Story>
</template>