<script lang="ts" setup>
    import Dots from './Dots.vue'

    function initState() {
        return {
            activeStep: 7,
            stepCount: 10,
            period: 30,
        }
    }
</script>

<template>
    <Story :init-state="initState">
        <template #default="{ state }">
            <Dots
                v-model="state.activeStep"
                :stepCount="state.stepCount"
                :period="state.period"
            />
        </template>
    </Story>
</template>