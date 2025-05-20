<script lang="ts" setup>
    import { reactive, useTemplateRef, watch } from 'vue'
    import Dots from './Dots.vue'

    const dotsRef = useTemplateRef('dots')
    const internalState = reactive({
        turnOn: false,
        turnOff: false
    })

    watch(
        () => internalState.turnOn,
        () => {
            dotsRef.value?.turnOn(4)
        }
    )

    watch(
        () => internalState.turnOff,
        () => {
            dotsRef.value?.turnOff()
        }
    )

    function initState() {
        return {
            initialIndex: 7,
            stepCount: 10,
            period: 30,
        }
    }
    function initStateCondensed() {
        return {
            initialIndex: 7,
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
                    ref="dots"
                    :initialIndex="state.initialIndex"
                    :stepCount="state.stepCount"
                    :period="state.period"
                />
            </template>
        </Variant>
        <Variant title="Condensed" :init-state="initStateCondensed">
            <template #default="{ state }">
                <Dots
                    ref="dots"
                    :initialIndex="state.initialIndex"
                    :stepCount="state.stepCount"
                    :period="state.period"
                    :isCondensed="state.isCondensed"
                />
            </template>
        </Variant>
        <template #controls>
            <HstButton color="primary" class="htw-p-2" @click="internalState.turnOn = !internalState.turnOn" :style="'margin: 15px 7px;'" >
                turnOn(4)
            </HstButton>
            <HstButton class="htw-p-2" @click="internalState.turnOff = !internalState.turnOff" :style="'margin: 7px;'" >
                turnOff()
            </HstButton>
      </template>
    </Story>
</template>