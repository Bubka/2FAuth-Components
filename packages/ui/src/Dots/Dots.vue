<script setup>
    import { computed } from 'vue'

    const activeStep = defineModel()
    const props = defineProps({
        stepCount: {
            type: Number,
            default: 10
        },
        period: { // Used only to identify the dots component in Accounts.vue
            type: Number,
            default: null
        },
        isCondensed: {
            type: Boolean
        }
    })

    const isOff = computed(() => {
        return activeStep.value == -1
    })
</script>

<template>
    <ul class="dots" :class="{'off' : isOff, 'condensed': isCondensed}">
        <li v-for="n in stepCount" :key="n" :data-is-active="n == activeStep ? true : null"></li>
    </ul>
</template>