<script setup>
    import { ref, computed, onMounted } from 'vue'

    const props = defineProps({
        stepCount: {
            type: Number,
            default: 10
        },
        initialIndex: {
            type: Number,
            default: null
        },
        period: { // Used only to identify the dots component when accessed using refs
            type: Number,
            default: null
        },
        isCondensed: {
            type: Boolean
        }
    })

    const activeDot = ref(0)
    
    const isOff = computed(() => {
        return activeDot.value == -1
    })

    /**
     * Turns On dots
     */
    function turnOn(index) {
        activeDot.value = index < props.stepCount ? index + 1 : 1
    }

    /**
     * Turns Off all dots
     */
    function turnOff() {
        activeDot.value = -1
    }

    onMounted(() => {
        if (! isNaN(props.initialIndex)) {
            turnOn(props.initialIndex)
        }
    })

    defineExpose({
        turnOn,
        turnOff,
        props
    })

</script>

<template>
    <ul class="dots" :class="{'off' : isOff, 'condensed': isCondensed}">
        <li v-for="n in stepCount" :key="n" :data-is-active="n == activeDot ? true : null"></li>
    </ul>
</template>