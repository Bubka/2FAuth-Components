<script setup>
    import { ref, computed } from 'vue'
    import { useIdGenerator, useValidationErrorIdGenerator } from '../helpers'
    import { LucideChevronRight, LucideLock, LucideLockOpen } from 'lucide-vue-next'
    import { FormFieldError } from '../FormFieldError'

    defineOptions({
        inheritAttrs: false
    })
    
    const props = defineProps({
        modelValue: String,
        modelModifiers: { default: () => ({}) },
        enableProtection: {
            type: Boolean,
            default: false
        },
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
        isExpanded: {
            type: Boolean,
            default: true
        },
        maxLength: {
            type: Number,
            default: null
        },
        idSuffix: {
            type: String,
            default: ''
        },
        isIndented: Boolean,
        isLocked: Boolean,
        darkMode:  {
            type: Boolean,
            default: true
        },
    })

    const { inputId } = useIdGenerator(props.inputType, props.fieldName + props.idSuffix)
    const { valErrorId } = useValidationErrorIdGenerator(props.fieldName)
    const legendId = useIdGenerator('legend', props.fieldName).inputId

    const isProtected = ref(props.enableProtection)
    const hasBeenTrimmed = ref(false)
    const componentKey = ref(0);

    const disabled = computed(() => {
        return (props.isDisabled || props.isLocked || (props.enableProtection == true && isProtected.value == true)) ? true : false
    })

    const emit = defineEmits(['update:modelValue'])

    /**
     * Removes spaces from the input string
     */
    function emitValue(e) {
        const value = e.target.value.replace(/\s+/g, '')
        
        emit('update:modelValue', value)
    }

    function alertOnSpace(e) {
        let value = e.target.value
        hasBeenTrimmed.value = value.includes(' ')

        emit('update:modelValue', value)
    }

    function forceRefresh(e) {
        hasBeenTrimmed.value = e.target.value.includes(' ')
        componentKey.value += 1
    }

</script>

<template>
    <div class="field is-flex">
        <div v-if="isIndented" class="pr-1" :class="{ 'is-opacity-5' : isDisabled || isLocked }">
            <LucideChevronRight class="has-text-grey rotate-135" />
        </div>
        <div>
            <label :for="inputId" class="label" :class="{ 'is-opacity-5' : isDisabled || isLocked }">
                {{ label }}<LucideLock v-if="isLocked" class="ml-2 icon-size-1" />
            </label>
            <div class="field has-addons mb-0" :class="{ 'pt-3' : hasOffset }">
                <div class="control" :class="{ 'is-expanded': isExpanded }">
                    <input 
                        :key="componentKey"
                        :disabled="disabled" 
                        :id="inputId" 
                        :type="inputType" 
                        class="input" 
                        :value="modelValue" 
                        :placeholder="placeholder" 
                        v-bind="$attrs"
                        v-on:input="alertOnSpace"
                        v-on:change="emitValue"
                        v-on:blur="forceRefresh"
                        :maxlength="maxLength" 
                        :aria-describedby="help ? legendId : undefined"
                        :aria-invalid="errorMessage != undefined"
                        :aria-errormessage="errorMessage != undefined ? valErrorId : undefined" 
                    />
                </div>
                <template v-if="enableProtection && ! isLocked">
                    <div class="control" v-if="isProtected">
                        <button type="button" class="button field-lock" :class="{'is-dark' : darkMode}" @click.stop="isProtected = false" :title="$t('message.unlock.title')">
                            <span class="icon">
                                <LucideLock />
                            </span>
                        </button>
                    </div>
                    <div class="control" v-else>
                        <button type="button" class="button field-unlock" :class="{'is-dark' : darkMode}" @click.stop="isProtected = true" :title="$t('message.lock.title')">
                            <span class="icon has-text-danger">
                                <LucideLockOpen />
                            </span>
                        </button>
                    </div>
                </template>
            </div>
            <FormFieldError v-if="hasBeenTrimmed" :error="$t('message.spaces_are_ignored')" :field="'spaces'" :alertType="'is-warning'" />
            <FormFieldError v-if="errorMessage != undefined" :error="errorMessage" :field="fieldName" />
            <p :id="legendId" class="help" v-html="help" v-if="help"></p>
        </div>
    </div>
</template>
