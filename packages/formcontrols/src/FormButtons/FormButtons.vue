<script setup>
    import { VueButton } from '../VueButton'

    const props = defineProps({
            showCancelButton: {
                type: Boolean,
                default: false
            },
            isBusy: {
                type: Boolean,
                default: false
            },
            isDisabled: {
                type: Boolean,
                default: false
            },
            submitLabel: {
                type: String,
                default: '[[submit]]'
            },
            cancelLabel: {
                type: String,
                default: '[[cancel]]'
            },
            color: {
                type: String,
                default: 'is-link'
            },
            submitId: {
                type: String,
                default: 'btnSubmit'
            },
            cancelId: {
                type: String,
                default: 'btnCancel'
            },
    })

    const emit = defineEmits(['submit', 'cancel'])
</script>

<template>
    <div class="field is-grouped">
        <div class="control">
            <VueButton @click="emit('submit')" :id="submitId" nativeType="submit" :color="color" :isLoading="isBusy" :disabled="isDisabled" >
                {{ submitLabel }}
            </VueButton>
        </div>
        <div class="control" v-if="showCancelButton">
            <VueButton @click="emit('cancel')" :id="cancelId" nativeType="button" :color="'is-text'" >
                {{ cancelLabel }}
            </VueButton>
        </div>
    </div>
</template>