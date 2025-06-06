<script setup>
    import { ref, computed, onMounted, onUnmounted } from 'vue'

    const props = defineProps({
        step_count: {
            type: Number,
            default: 10
        },
        period : {
            type: Number,
            default: 30
        },
        generated_at: Number,
        autostart: {
            type: Boolean,
            default: true
        },
    })

    const generatedAt = ref(null)
    const remainingTimeout = ref(null)
    const initialStepToNextStepTimeout = ref(null)
    const stepToStepInterval = ref(null)
    const stepIndex = ref(null)

    //                              |<----period p----->|
    //     |                        |                   |
    //     |------- ··· ------------|--------|----------|---------->
    //     |                        |        |          |
    //  unix T0                 Tp.start   Tgen_at    Tp.end
    //                              |        |          |
    //  elapsedTimeInCurrentPeriod--|<------>|          |
    //  (in ms)                     |        |          |
    //                              ● ● ● ● ●|● ◌ ◌ ◌ ◌ |
    //                              | |      ||         |
    //                              | |      |<-------->|--remainingTimeBeforeEndOfPeriod (for remainingTimeout)
    //    durationBetweenTwoSteps-->|-|<     ||         
    //   (for stepToStepInterval)   | |     >||<---durationFromInitialToNextStep (for initialStepToNextStepTimeout)
    //                                        |
    //                                        |
    //                                    stepIndex

    const elapsedTimeInCurrentPeriod = computed(() => {
        return generatedAt.value % props.period
    })

    const remainingTimeBeforeEndOfPeriod = computed(() => {
        return props.period - elapsedTimeInCurrentPeriod.value
    })

    const durationBetweenTwoSteps = computed(() => {
        return props.period / props.step_count
    })

    const initialStepIndex = computed(() => {
        let relativePosition = (elapsedTimeInCurrentPeriod.value * props.step_count) / props.period

        return (Math.floor(relativePosition) + 0)
    })

    const emit = defineEmits(['stepping-started', 'stepping-ended', 'stepped-up'])

    /**
     * Starts stepping
     */
    const startStepping = (generated_at = 0) => {
        reset()
        generatedAt.value = generated_at != 0 ? generated_at : props.generated_at

        emit('stepping-started', initialStepIndex.value)

        stepIndex.value = initialStepIndex.value

        // Main timeout that runs until the end of the period
        remainingTimeout.value = setTimeout(function() {
            reset()
            emit('stepping-ended')
        }, remainingTimeBeforeEndOfPeriod.value * 1000);

        // During the remainingTimeout countdown we emit an event every durationBetweenTwoSteps seconds,
        // except for the first next dot
        let durationFromInitialToNextStep =  (Math.ceil(elapsedTimeInCurrentPeriod.value / durationBetweenTwoSteps.value) * durationBetweenTwoSteps.value) - elapsedTimeInCurrentPeriod.value

        initialStepToNextStepTimeout.value = setTimeout(function() {
            if( durationFromInitialToNextStep > 0 ) {
                stepIndex.value += 1
                emit('stepped-up', stepIndex.value)
            }
            stepToStepInterval.value = setInterval(function() {
                stepIndex.value += 1
                emit('stepped-up', stepIndex.value)
            }, durationBetweenTwoSteps.value * 1000)
        }, durationFromInitialToNextStep * 1000)
    }

    /**
     * Resets all timers and internal vars
     */
    const reset = () => {
        clearTimeout(remainingTimeout.value)
        clearTimeout(initialStepToNextStepTimeout.value)
        clearInterval(stepToStepInterval.value)
        stepIndex.value = generatedAt.value = null
    }

    onMounted(() => {
        if (props.autostart == true) {
            startStepping()
        }
    })

    onUnmounted(() => {
        reset()
    })

    defineExpose({
        startStepping,
        reset,
        props
    })

</script>

<template>
    <div>
    </div>
</template>