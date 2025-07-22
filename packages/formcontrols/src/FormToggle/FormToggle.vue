<script setup>
    import { UseColorMode } from '@vueuse/components'
    import { useIdGenerator, useValidationErrorIdGenerator } from '../helpers'
    import { FormFieldError } from '../FormFieldError'
    import { LucideLock } from 'lucide-vue-next'
    import { LucideGenericIcon } from '@2fauth/ui'

    const props = defineProps({
        modelValue: [String, Number, Boolean],
        choices: {
            type: Array,
            required: true
        },
        fieldName: {
            type: String,
            required: true
        },
        errorMessage: [String],
        hasOffset: Boolean,
        isDisabled: Boolean,
        isLocked: Boolean,
        label: {
            type: String,
            default: ''
        },
        help: {
            type: String,
            default: ''
        },
    })

    // defines what events our component emits
    const emit = defineEmits(['update:modelValue'])
    const { valErrorId } = useValidationErrorIdGenerator(props.fieldName)
    const legendId = useIdGenerator('legend', props.fieldName).inputId

    function setRadio(event) {
        emit('update:modelValue', event)
    }
    
</script>

<template>
    <div class="field" :class="{ 'pt-3': hasOffset }">
        <span v-if="label" class="label" :class="{ 'is-opacity-5' : isDisabled || isLocked }">
            {{ $t(props.label) }}<LucideLock v-if="isLocked" class="ml-2 icon-size-1" />
        </span>
        <div
            id="rdoGroup"
            role="radiogroup"
            :aria-describedby="help ? legendId : undefined"
            :aria-invalid="errorMessage != undefined"
            :aria-errormessage="errorMessage != undefined ? valErrorId : undefined" 
            class="is-toggle buttons"
        >
            <UseColorMode v-slot="{ mode }">
            <button
                v-for="choice in choices"
                :key="choice.value"
                :id="useIdGenerator('button',fieldName+choice.value).inputId"
                role="radio"
                type="button"
                class="button"
                :title="choice.title ? $t(choice.title) : $t(choice.text)"
                :aria-checked="modelValue===choice.value"
                :disabled="isDisabled || isLocked"
                :class="{
                    'is-link': modelValue===choice.value,
                    'is-dark': mode == 'dark',
                    'is-multiline': choice.legend,
                }"
                v-on:click.stop="setRadio(choice.value)">
                <input
                    :id="useIdGenerator('radio',choice.value).inputId"
                    type="radio"
                    class="is-hidden"
                    :checked="modelValue===choice.value"
                    :value="choice.value"
                    :disabled="isDisabled || isLocked"
                />
                <span v-if="choice.legend" class="is-block is-size-7">{{ $t(choice.legend) }}</span>
                <!-- <FontAwesomeIcon :icon="['fas',choice.icon]" v-if="choice.icon" class="mr-2" /> -->
                    <LucideGenericIcon :name="choice.icon" v-if="choice.icon" class="mr-2" />
                <label :for="useIdGenerator('button',fieldName+choice.value).inputId" class="is-clickable">
                    {{ $t(choice.text) }}
                </label>
            </button>
            </UseColorMode>
        </div>
        <FormFieldError v-if="errorMessage != undefined" :error="errorMessage" :field="fieldName" />
        <p :id="legendId" class="help" v-if="help">{{ $t(props.help) }}</p>
    </div>
</template>