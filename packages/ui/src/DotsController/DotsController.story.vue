<script lang="ts" setup>
    import { reactive, useTemplateRef, watch } from 'vue'
    import { logEvent } from 'histoire/client'
    import DotsController from './DotsController.vue'
    import Dots from '../Dots/Dots.vue'

    const controller = useTemplateRef('controller')
    const state = reactive({
            period: 30,
            generated_at: Date.now(),
            isStarted: false,
            activeStep: -1
    })

    watch(
        () => state.isStarted,
        (newIsStarted) => {
            if (newIsStarted) {
                startStepping()
            }
            else stopStepping()
        }
    )

    function startStepping() {
        state.generated_at = Date.now()
        controller.value?.startStepping(state.generated_at)
    }

    function stopStepping() {
        controller.value?.reset()
    }

    function onSteppingStart(eventArg: any) {
        logEvent('stepping-started', { eventArg })
        state.activeStep = eventArg
    }

    function onStepUp(eventArg: any) {
        logEvent('stepped-up', { eventArg })
        state.activeStep = eventArg
    }

    function onSteppingEnd(eventArg: any) {
        logEvent('stepping-ended', { eventArg })
        state.isStarted = false
        state.activeStep = eventArg
    }
</script>

<template>
    <Story auto-props-disabled>
        <DotsController
            ref="controller"
            :autostart="false"
            :period="state.period"
            :generated_at="state.generated_at"
            v-on:stepping-started="onSteppingStart"
            v-on:stepped-up="onStepUp"
            v-on:stepping-ended="onSteppingEnd"
        >
        </DotsController>
        <Dots
            v-model="state.activeStep"
            :period="state.period"
        />
        <template #controls>
            <HstNumber v-model="state.period" title="Period" />
            <HstNumber v-model="state.generated_at" title="Generated_at" />
            <HstButton color="primary" class="htw-p-2" @click="state.isStarted = true" :style="'margin: 15px 7px;'" v-if="state.isStarted == false">
                Start stepping
            </HstButton>
            <HstButton color="primary" class="htw-p-2" @click="state.isStarted = false" :style="'margin: 0 7px;'" v-if="state.isStarted == true">
                Stop stepping
            </HstButton>
            <span>Active step: {{ state.activeStep }}</span>
      </template>
    </Story>
</template>