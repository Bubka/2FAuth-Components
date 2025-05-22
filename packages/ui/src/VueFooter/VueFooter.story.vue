<script lang="ts" setup>
    import VueFooter from './VueFooter.vue'

    function initStateForButtons() {
        return {
            showButton: true,
        }
    }

    function initStateGeneric() {
        return {
            showButton: false,
        }
    }
</script>

<template>
    <Story>
        <Variant title="Buttons" :init-state="initStateForButtons">
            <template #default="{ state }">
                <VueFooter :show-buttons="state.showButton">
                    <button class="button">Some</button>
                    <button class="button">grouped</button>
                    <button class="button">buttons</button>
                </VueFooter>
            </template>
        </Variant>
        <Variant title="Generic" :init-state="initStateGeneric">
            <template #default="{ state }">
                <VueFooter :show-buttons="state.showButton">
                    <p>This is a random html tag</p>
                </VueFooter>
            </template>
        </Variant>
    </Story>
</template>