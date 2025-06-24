<script lang="ts" setup>
    import { reactive } from 'vue'
    import { createRouter, createMemoryHistory } from 'vue-router'
    import Modal from './Modal.vue'

    function initState() {
        return {
            isVisible: true,
            isFullHeight: false
        }
    }

    function setupApp ({ app }) {
        // Router mock
        app.use(createRouter({
            history: createMemoryHistory(),
            routes: [
                { path: '/accounts', name: 'accounts', component: { render: () => null }, meta: { showAbout: false }},
                { path: '/', name: 'home', component: { render: () => null }, meta: { showAbout: false }},
            ],
        }))
    }
</script>

<template>
    <Story :init-state="initState" :setup-app="setupApp">
        <template #default="{ state }">
            <Modal
                v-model="state.isVisible"
                :is-fFull-height="state.isFullHeight">
                <p>This is a paragraph passed in the modal slot</p>
            </Modal>
        </template>
    </Story>
</template>