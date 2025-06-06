<script setup>
    import { ref, computed } from 'vue'
    import { FormFieldError } from '../FormFieldError'
    import { useIdGenerator, useValidationErrorIdGenerator } from '../helpers'
    import { LucideEye, LucideEyeOff, LucideLock } from 'lucide-vue-next'

    defineOptions({
        inheritAttrs: true
    })

    const props = defineProps({
        modelValue: [String],
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
            default: 'password'
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
        showRules: {
            type: Boolean,
            default: false
        },
        idSuffix: {
            type: String,
            default: ''
        },
        isLocked: Boolean,
    })

    const { inputId } = useIdGenerator(props.inputType, props.fieldName + props.idSuffix)
    const { valErrorId } = useValidationErrorIdGenerator(props.fieldName)
    const legendId = useIdGenerator('legend', props.fieldName).inputId
    const currentType = ref(props.inputType)
    const hasCapsLockOn = ref(false)

    const hasLowerCase = computed(() => {
        return /[a-z]/.test(props.modelValue ?? '')
    })
    const hasUpperCase = computed(() => {
        return /[A-Z]/.test(props.modelValue ?? '')
    })
    const hasNumber = computed(() => {
        return /[0-9]/.test(props.modelValue ?? '')
    })
    const hasSpecialChar = computed(() => {
        return /[^A-Za-z0-9]/.test(props.modelValue ?? '')
    })
    const IsLongEnough = computed(() => {
        return props.modelValue?.length >= 8
    })

    function checkCapsLock(event) {
        if (typeof event.getModifierState === 'function') {
            hasCapsLockOn.value = event.getModifierState('CapsLock') ? true : false
        }
    }

    function setFieldType(event) {
        if (currentType.value != event) {
            currentType.value = event
        }
    }
</script>

<template>
    <div class="field" :class="{ 'pt-3' : hasOffset }">
        <label :for="inputId" class="label">
            <span class="icon-text">
                <span>{{ $t(props.label) }}</span>
                <span v-if="isLocked" class="icon">
                    <LucideLock class="icon-size-1" />
                </span>
            </span>
        </label>
        <div class="control has-icons-right">
            <input
                :disabled="isDisabled || isLocked"
                :id="inputId"
                :type="currentType" 
                class="input" 
                :value="modelValue" 
                :placeholder="placeholder" 
                v-bind="$attrs" 
                v-on:input="$emit('update:modelValue', $event.target.value)"
                v-on:keyup="checkCapsLock"
                :aria-describedby="help ? legendId : undefined"
                :aria-invalid="errorMessage != undefined"
                :aria-errormessage="errorMessage != undefined ? valErrorId : undefined" 
            />
            <span v-if="currentType == 'password'" role="button" id="btnTogglePassword" tabindex="0" class="icon is-small is-right is-clickable" @keyup.enter="setFieldType('text')" @click="setFieldType('text')" :title="$t('tooltip.reveal_password')">
                <LucideEyeOff />
            </span>
            <span v-else role="button" id="btnTogglePassword" tabindex="0" class="icon is-small is-right is-clickable" @keyup.enter="setFieldType('password')" @click="setFieldType('password')" :title="$t('tooltip.hide_password')">
                <LucideEye />
            </span>
        </div>
        <p class="help is-warning" v-if="hasCapsLockOn" v-html="$t('message.caps_lock_is_on')" />
        <FormFieldError v-if="errorMessage != undefined" :error="errorMessage" :field="fieldName" />
        <p class="help" v-html="$t(help)" v-if="help" />
        <div v-if="showRules" :id="legendId" class="columns is-mobile is-size-7 mt-0">
            <div class="column is-one-third">
                <span class="has-text-weight-semibold">{{ $t('message.mandatory_rules') }}</span><br />
                <span class="is-underscored" id="valPwdIsLongEnough" :class="{'is-dot' : IsLongEnough}"></span>{{ $t('message.is_long_enough') }}<br/>
            </div>
            <div class="column">
                <span class="has-text-weight-semibold">{{ $t('message.optional_rules_you_should_follow') }}</span><br />
                <span class="is-underscored" id="valPwdHasLowerCase" :class="{'is-dot' : hasLowerCase}"></span>{{ $t('message.has_lower_case') }}<br/>
                <span class="is-underscored" id="valPwdHasUpperCase" :class="{'is-dot' : hasUpperCase}"></span>{{ $t('message.has_upper_case') }}<br/>
                <span class="is-underscored" id="valPwdHasSpecialChar" :class="{'is-dot' : hasSpecialChar}"></span>{{ $t('message.has_special_char') }}<br/>
                <span class="is-underscored" id="valPwdHasNumber" :class="{'is-dot' : hasNumber}"></span>{{ $t('message.has_number') }}
            </div>
        </div>
    </div> 
</template>