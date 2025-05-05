<script lang="ts" setup>
    import Spinner from './Spinner.vue'

    function initStateRaw() {
        return {
            isVisible: true,
            type: 'raw',
            rawSize: 32
        }
    }
    function initStateListLoading() {
        return {
            isVisible: true,
            type: 'list-loading'
        }
    }
    function initStateFullscreen() {
        return {
            isVisible: true,
            type: 'fullscreen'
        }
    }
    function initStateFullscreenOverlay() {
        return {
            isVisible: true,
            type: 'fullscreen-overlay'
        }
    }
</script>

<template>
    <Story>
        <Variant title="Raw" :init-state="initStateRaw">
            <template #default="{ state }">
                <Spinner
                    :type="state.type"
                    :isVisible="state.isVisible"
                    :rawSize="state.rawSize"
                />
            </template>
        </Variant>
        <Variant title="List loading" :init-state="initStateListLoading">
            <template #default="{ state }">
                This text is not part of the component, it allows to view its positioning.<br />
                The List-loading spinner is to be displayed during data fecthing of a list.
                <Spinner
                    :type="state.type"
                    :isVisible="state.isVisible"
                />
                
            </template>
        </Variant>
        <Variant title="Fullscreen" :init-state="initStateFullscreen">
            <template #default="{ state }">
                This text is not part of the component.<br />
                The Fullscreen variant displays the spinner in a fullscreen centered opaque div whose background color is based on the active color scheme.
                <Spinner
                    :type="state.type"
                    :isVisible="state.isVisible"
                />
            </template>
        </Variant>
        <Variant title="Fullscreen Overlay" :init-state="initStateFullscreenOverlay">
            <template #default="{ state }">
                This text is not part of the component.<br />
                The Fullscreen Overlay variant displays the spinner in a fullscreen centered transparent div.
                <Spinner
                    :type="state.type"
                    :isVisible="state.isVisible"
                />
            </template>
        </Variant>
    </Story>
</template>