<script setup>
    import { ref } from 'vue'
    import { FormFieldError } from '../FormFieldError'
    import { useIdGenerator, useValidationErrorIdGenerator } from '../helpers'
    import { LucideChevronRight, LucideLock } from 'lucide-vue-next'

    const props = defineProps({
        modelValue: [String, Number, Boolean],
        label: {
            type: String,
            default: ''
        },
        fieldName: {
            type: String,
            default: '',
            required: true
        },
        errorMessage: [String],
        options: {
            type: Array,
            required: true
        },
        help: {
            type: String,
            default: ''
        },
        isIndented: Boolean,
        isDisabled: Boolean,
        isLocked: Boolean,
        idSuffix: {
            type: String,
            default: ''
        },
    })

    const selected = ref(props.modelValue)
    const { inputId } = useIdGenerator('select', props.fieldName + props.idSuffix)
    const { valErrorId } = useValidationErrorIdGenerator(props.fieldName)
    const legendId = useIdGenerator('legend', props.fieldName + props.idSuffix).inputId
</script>

<template>
    <div class="field is-flex">
        <div v-if="isIndented" class="pr-1" :class="{ 'is-opacity-5' : isDisabled || isLocked }">
            <LucideChevronRight class="has-text-grey rotate-135" />
        </div>
        <div>
            <label :for="inputId" class="label" :class="{ 'is-opacity-5' : isDisabled || isLocked }">
                {{ $t(props.label) }}<LucideLock v-if="isLocked" class="ml-2 icon-size-1" />
            </label>
            <div class="control">
                <div class="select">
                    <select
                        :id="inputId"
                        v-model="selected"
                        v-on:change="$emit('update:modelValue', $event.target.value)"
                        :disabled="isDisabled || isLocked"
                        :aria-describedby="help ? legendId : undefined"
                        :aria-invalid="errorMessage != undefined"
                        :aria-errormessage="errorMessage != undefined ? valErrorId : undefined" 
                    >
                        <option v-for="option in options" v-bind:key="option.value" :value="option.value">
                            {{ $t(option.text) }}
                        </option>
                    </select>
                </div>
            </div>
            <FormFieldError v-if="errorMessage != undefined" :error="errorMessage" :field="fieldName" />
            <p :id="legendId" class="help" v-html="$t(help)" v-if="help"></p>
        </div>
    </div>
</template>