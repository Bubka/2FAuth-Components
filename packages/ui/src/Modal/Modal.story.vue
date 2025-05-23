<script lang="ts" setup>
    import Modal from './Modal.vue'

    function initState() {
        return {
            isVisible: true,
            isFullHeight: false
        }
    }

</script>

<template>
    <Story :init-state="initState">
        <template #default="{ state }">
            <Modal
                v-model="state.isVisible"
                :is-fFull-height="state.isFullHeight">
                <p>This is a paragraph passed in the modal slot</p>
            </Modal>
        </template>
    </Story>
</template>