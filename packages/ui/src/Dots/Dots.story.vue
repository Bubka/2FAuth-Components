<script lang="ts" setup>
    import Dots from './Dots.vue'

    function initState() {
        return {
            activeStep: 7,
            stepCount: 10,
            period: 30,
        }
    }
    function initStateCondensed() {
        return {
            activeStep: 7,
            stepCount: 10,
            period: 30,
            isCondensed: true
        }
    }
</script>

<template>
    <Story>
        <Variant title="Standard" :init-state="initState">
            <template #default="{ state }">
                <Dots
                    v-model="state.activeStep"
                    :stepCount="state.stepCount"
                    :period="state.period"
                />
            </template>
        </Variant>
        <Variant title="Condensed" :init-state="initStateCondensed">
            <template #default="{ state }">
                <Dots
                    v-model="state.activeStep"
                    :stepCount="state.stepCount"
                    :period="state.period"
                    :isCondensed="state.isCondensed"
                />
            </template>
        </Variant>
    </Story>
</template>