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
                { text: 'label.pair_digit', value: 2, legend: 'label.pair', title: 'label.pair.legend' },
                { text: 'label.trio_digit', value: 3, legend: 'label.trio', title: 'label.trio.legend' },
                { text: 'label.half_digit', value: 0.5, legend: 'label.half', title: 'label.half.legend' },
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