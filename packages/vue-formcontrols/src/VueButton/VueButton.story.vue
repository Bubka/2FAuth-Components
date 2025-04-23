<script lang="ts" setup>
    import { logEvent } from 'histoire/client'
    import VueButton from './VueButton.vue'

    function initState() {
        return {
            label: 'Label',
        }
    }
</script>

<template>
    <Story :init-state="initState">
        <template #default="{ state }">
            <VueButton :label="state.label" @click="logEvent('Click',$event)" />
        </template>
    </Story>
</template>