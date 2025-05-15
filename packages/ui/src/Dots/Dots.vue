<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        activeStepIndex: {
            type: Number,
            default: -1,
            required: true
        },
        stepCount: {
            type: Number,
            default: 10
        },
        period: { // Used only to identify the dots component when accessed using refs
            type: Number,
            default: null
        },
        isCondensed: {
            type: Boolean
        }
    })

    const activeDot = computed(() => {
        return props.activeStepIndex < props.stepCount ? props.activeStepIndex + 1 : 1
    })

    const isOff = computed(() => {
        return props.activeStepIndex == -1
    })
</script>

<template>
    <ul class="dots" :class="{'off' : isOff, 'condensed': isCondensed}">
        <li v-for="n in stepCount" :key="n" :data-is-active="n == activeDot ? true : null"></li>
    </ul>
</template>