<script setup>
    import { useAttrs, computed } from 'vue'
    import { useIdGenerator } from '../helpers'
    import { LucideChevronRight, LucideLock } from 'lucide-vue-next'

    defineOptions({
        inheritAttrs: false
    })

    const props = defineProps({
        modelValue: Boolean,
        fieldName: {
            type: String,
            default: '',
            required: true
        },
        label: {
            type: String,
            default: ''
        },
        labelClass: {
            type: String,
            default: ''
        },
        help: {
            type: String,
            default: ''
        },
        isIndented: Boolean,
        isDisabled: Boolean,
        isLocked: Boolean,
    })

    const emit = defineEmits(['update:modelValue'])
    const legendId = useIdGenerator('legend', props.fieldName).inputId
    const attrs = useAttrs()
    const model = computed({
        get() {
            return props.modelValue;
        },
        set(value) {
            emit("update:modelValue", value);
        },
    })

    function toggleModel() {
        if (attrs['disabled'] != true) {
            model.value = !model.value
        }
    }
</script>

<template>
    <div class="field is-flex">
        <div v-if="isIndented" class="pr-1" :class="{ 'is-opacity-5' : isDisabled || isLocked }">
            <LucideChevronRight class="has-text-grey rotate-135" />
        </div>
        <div>
            <input
                :id="fieldName"
                type="checkbox"
                :name="fieldName"
                class="is-checkradio is-info"
                v-model="model"
                :disabled="isDisabled || isLocked"
                :aria-describedby="help ? legendId : undefined"
            />
            <label tabindex="0" :for="fieldName" class="label" :class="labelClass" v-on:keypress.space.prevent="toggleModel">
                <span class="icon-text">
                    <span>{{ $t(props.label) }}</span>
                    <span v-if="isLocked" class="icon">
                        <LucideLock class="icon-size-1" />
                    </span>
                </span>
            </label>
            <p :id="legendId" class="help" v-html="$t(help)" v-if="help" />
        </div>
    </div>
</template>