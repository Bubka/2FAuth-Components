<script lang="ts" setup>
    import { reactive, useTemplateRef, watch } from 'vue'
    import { logEvent } from 'histoire/client'
    import DotsController from './DotsController.vue'
    import Dots from '../Dots/Dots.vue'

    const dotsController = useTemplateRef('dotsController')
    const state = reactive({
            period: 30,
            generated_at: Math.floor(Date.now() / 1000),
            isStarted: false,
            activeStepIndex: -1,
            reset: true
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

    watch(
        () => state.reset,
        () => {
            state.isStarted = false
            state.activeStepIndex = -1
            stopStepping()
        }
    )

    function startStepping() {
        state.generated_at = Math.floor(Date.now() / 1000)
        dotsController.value?.startStepping(state.generated_at)
    }

    function stopStepping() {
        dotsController.value?.reset()
    }

    function onSteppingStart(eventArg: any) {
        logEvent('stepping-started', { eventArg })
        state.activeStepIndex = eventArg
    }

    function onStepUp(eventArg: any) {
        logEvent('stepped-up', { eventArg })
        state.activeStepIndex = eventArg
    }

    function onSteppingEnd() {
        logEvent('stepping-ended', null)
        state.isStarted = false
    }
</script>

<template>
    <Story auto-props-disabled>
        <DotsController
            ref="dotsController"
            :autostart="false"
            :period="state.period"
            :generated_at="state.generated_at"
            v-on:stepping-started="onSteppingStart"
            v-on:stepped-up="onStepUp"
            v-on:stepping-ended="onSteppingEnd"
        >
        </DotsController>
        <Dots
            :activeStepIndex="state.activeStepIndex"
            :period="state.period"
        />
        <template #controls>
            <HstNumber v-model="state.period" title="Period" />
            <HstNumber v-model="state.generated_at" title="Generated_at" />
            <HstButton color="primary" class="htw-p-2" @click="state.isStarted = true" :style="'margin: 15px 7px;'" v-if="state.isStarted == false">
                Start stepping
            </HstButton>
            <HstButton class="htw-p-2" @click="state.isStarted = false" :style="'margin: 15px 7px;'" v-if="state.isStarted == true">
                Pause stepping
            </HstButton>
            <span style="padding-left: 7px">Active step index: {{ state.activeStepIndex }}</span>
            <HstButton class="htw-p-2" @click="state.reset = !state.reset" :style="'margin: 15px 7px;'" v-if="state.activeStepIndex >= 0">
                Reset
            </HstButton>
      </template>
    </Story>
</template>