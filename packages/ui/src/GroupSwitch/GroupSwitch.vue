<script setup>
    import { UseColorMode } from '@vueuse/components'
    import { NavigationButton } from '@2fauth/formcontrols'
    import VueFooter from '../VueFooter/VueFooter.vue'
    
    const activeGroup = defineModel('activeGroup')
    const isVisible = defineModel('isVisible')

    const props = defineProps({
        groups: Array,
    })

    const emit = defineEmits(['active-group-changed'])

    /**
     * Sets the selected group
     */
    function setActiveGroup(id) {
        activeGroup.value = id
        isVisible.value = false

        emit('active-group-changed', id)
    }

</script>

<template>
    <div v-if="isVisible" id="groupSwitch" class="container groups">
        <div class="columns is-centered">
            <div class="column is-one-third-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-quarter-fullhd">
                <div class="columns is-multiline">
                    <UseColorMode v-slot="{ mode }">
                        <div class="column is-full" v-for="group in groups" :key="group.id">
                            <button type="button" class="button is-fullwidth" :class="{'is-dark has-text-light is-outlined': mode == 'dark'}" @click="setActiveGroup(group.id)">{{ group.name }}</button>
                        </div>
                    </UseColorMode>
                </div>
                <div v-if="$slots.default" class="columns is-centered">
                    <div class="column has-text-centered">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
        <VueFooter :show-buttons="true">
            <NavigationButton action="close" :use-link-tag="false" @closed="isVisible = false" />
        </VueFooter>
    </div>
</template>