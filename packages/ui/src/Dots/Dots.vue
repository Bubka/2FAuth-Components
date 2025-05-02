<script setup>
    import { ref, computed, onMounted } from 'vue'

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
    })

    // const activeDot = ref(0)
    const isOff = computed(() => {
        return activeStep.value == -1
    })

    /**
     * Turns On dots
     */
    // function turnOn(index) {
    //     activeDot.value = index < props.stepCount ? index + 1 : 1
    // }

    /**
     * Turns Off all dots
     */
    // function turnOff() {
    //     activeDot.value = -1
    // }

    // onMounted(() => {
    //     if (! isNaN(activeStep)) {
    //         turnOn(props.initialIndex)
    //     }
    // })

    // defineExpose({
    //     turnOn,
    //     turnOff,
    //     props
    // })

</script>

<template>
    <ul class="dots" :class="{'off' : isOff}">
        <li v-for="n in stepCount" :key="n" :data-is-active="n == activeStep ? true : null"></li>
    </ul>
</template>