<script setup>
    const props = defineProps({
        label: {
            type: String,
            default: '[[label]]'
        },
        color: {
            type: String,
            default: 'is-link'
        },
        isLoading: {
            type: Boolean,
            default: false
        },
        isDisabled: {
            type: Boolean,
            default: false
        },
        nativeType: {
            type: String,
            default: 'submit'
        }
    })
</script>

<template>
    <button 
        :type="nativeType"
        :disabled="isLoading || isDisabled"
        :class="{
            'button': true,
            [`${color}`]: true,
            'is-loading': isLoading,
        }">
        <slot>
            {{ label }}
        </slot>
    </button>
</template>