<script lang="ts" setup>
    import { logEvent } from 'histoire/client'
    import FormToggle from './FormToggle.vue'
    import { isDark } from 'histoire/client'

    function initStateIcon() {
        return {
            model: isDark() ? 'dark' : 'light',
            choices: [
                { text: 'message.light', value: 'light', icon: 'Sun' },
                { text: 'message.dark', value: 'dark', icon: 'Moon' },
                { text: 'message.automatic', value: 'system', icon: 'MonitorCheck' },
            ],
            label: 'Label',
            fieldname: 'MyFieldName',
            errorMessage: 'This is the validation error text',
            help: 'This is the help text',
            isIndented: false,
            isLocked: false,
        }
    }
    function initStateText() {
        return {
            ...initStateIcon(),
            model: 2,
            fieldname: 'MyOtherFieldName',
            choices: [
                { text: '12 34 56', value: 2, legend: 'message.pair', title: 'message.pair_legend' },
                { text: '123 456', value: 3, legend: 'message.trio', title: 'message.trio_legend' },
                { text: '1234 5678', value: 0.5, legend: 'message.half', title: 'message.half_legend' },
            ]
        }
    }
</script>

<template>
    <Story>
        <Variant title="default" :init-state="initStateIcon">
            <template #default="{ state }">
                <FormToggle
                    v-model="state.model"
                    :choices="state.choices"
                    @update:model-value="logEvent('update:model-value', $event)"
                    :label="state.label"
                    :fieldName="state.fieldname"
                    :errorMessage="state.errorMessage"
                    :help="state.help"
                    :is-indented="state.isIndented"
                    :is-locked="state.isLocked"
                />
            </template>
        </Variant>
        <Variant title="With text" :init-state="initStateText">
            <template #default="{ state }">
                <FormToggle
                    v-model="state.model"
                    :choices="state.choices"
                    @update:model-value="logEvent('update:model-value', $event)"
                    :label="state.label"
                    :fieldName="state.fieldname"
                    :errorMessage="state.errorMessage"
                    :help="state.help"
                    :is-indented="state.isIndented"
                    :is-locked="state.isLocked"
                />
            </template>
        </Variant>
    </Story>
</template>