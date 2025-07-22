<script setup>
    import { useIdGenerator, useValidationErrorIdGenerator } from '../helpers'
    import { LucideChevronRight, LucideLock } from 'lucide-vue-next'
    import { FormFieldError } from '../FormFieldError'
    import { LucideGenericIcon } from '@2fauth/ui'

    defineOptions({
        inheritAttrs: false
    })

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
        inputType: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        help: {
            type: String,
            default: ''
        },
        hasOffset: {
            type: Boolean,
            default: false
        },
        isDisabled: {
            type: Boolean,
            default: false
        },
        maxLength: {
            type: Number,
            default: null
        },
        isIndented: Boolean,
        isLocked: Boolean,
        leftIcon: {
            type: String,
            default: ''
        },
        rightIcon: {
            type: String,
            default: ''
        },
        iconSize: {
            type: Number,
            default: 20
        },
        iconColor: {
            type: String,
            default: 'currentColor'
        },
        iconStrokeWidth: {
            type: Number,
            default: 2
        },
        idSuffix: {
            type: String,
            default: ''
        },
    })

    const { inputId } = useIdGenerator(props.inputType, props.fieldName + props.idSuffix)
    const { valErrorId } = useValidationErrorIdGenerator(props.fieldName)
    const legendId = useIdGenerator('legend', props.fieldName).inputId
</script>

<template>
    <div class="mb-3" :class="{ 'pt-3' : hasOffset, 'is-flex' : isIndented }">
        <div v-if="isIndented" class="pr-1" :class="{ 'is-opacity-5' : isDisabled || isLocked }">
            <LucideChevronRight class="has-text-grey rotate-135" />
        </div>
        <div class="field">
            <label :for="inputId" class="label" :class="{ 'is-opacity-5' : isDisabled || isLocked }">
                <span class="icon-text">
                    <span>{{ $t(props.label) }}</span>
                    <span v-if="isLocked" class="icon">
                        <LucideLock class="icon-size-1" />
                    </span>
                </span>
            </label>
            <div class="control" :class="{ 'has-icons-left' : leftIcon, 'has-icons-right': rightIcon }">
                <input 
                    :disabled="isDisabled || isLocked" 
                    :id="inputId" 
                    :type="inputType" 
                    class="input" 
                    :value="modelValue" 
                    :placeholder="placeholder" 
                    v-bind="$attrs"
                    v-on:input="$emit('update:modelValue', $event.target.value)"
                    v-on:change="$emit('change:modelValue', $event.target.value)"
                    :maxlength="maxLength"
                    :aria-describedby="help ? legendId : undefined"
                    :aria-invalid="errorMessage != undefined"
                    :aria-errormessage="errorMessage != undefined ? valErrorId : undefined" 
                />
                <span v-if="leftIcon" class="icon is-small is-left">
                    <LucideGenericIcon :name="leftIcon" v-if="leftIcon" :stroke-width="iconStrokeWidth" :size="iconSize" :color="iconColor" />
                </span>
                <span v-if="rightIcon" class="icon is-small is-right">
                    <LucideGenericIcon :name="rightIcon" v-if="rightIcon" :stroke-width="iconStrokeWidth" :size="iconSize" :color="iconColor" />
                </span>
            </div>
            <FormFieldError v-if="errorMessage != undefined" :error="errorMessage" :field="fieldName" />
            <p :id="legendId" class="help" v-if="help">{{ $t(help) }}</p>
        </div>
    </div> 
</template>
