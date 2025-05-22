<script lang="ts" setup>
    import GroupSwitch from './GroupSwitch.vue'
    import { logEvent } from 'histoire/client'

    function initState() {
        return {
            groups: [
                {
                    id: 0,
                    name: 'My Group',
                },
                {
                    id: 1,
                    name: 'My Other Group',
                }
            ],
            activeGroup: 0,
            isVisible: true
        }
    }

</script>

<template>
    <Story>
        <Variant title="No slot content" :init-state="initState">
            <template #default="{ state }">
                <GroupSwitch
                    v-model:is-visible="state.isVisible"
                    v-model:active-group="state.activeGroup"
                    :groups="state.groups"
                    @active-group-changed="(newActiveGroupId) => logEvent('active-group-changed', { newActiveGroupId })"
                />
            </template>
        </variant>
        <Variant title="With slot content" :init-state="initState">
            <template #default="{ state }">
                <GroupSwitch
                    v-model:is-visible="state.isVisible"
                    v-model:active-group="state.activeGroup"
                    :groups="state.groups"
                    @active-group-changed="(newActiveGroupId) => logEvent('active-group-changed', { newActiveGroupId })">
                        <a href="#">Link defined in slot</a>
                </GroupSwitch>
            </template>
        </variant>
    </Story>
</template>