<script setup>
    import { LucideAtSign, LucideSquareSlash, LucideUserCheck, LucideUsers } from '@lucide/vue'
    import { UseColorMode } from '@vueuse/components'
    
    const activeGroup = defineModel('activeGroup')
    const isVisible = defineModel('isVisible')

    const props = defineProps({
        groups: Array,
        useShare: {
            type: Boolean,
            default: false
        },
        useShareAllScope: {
            type: Boolean,
            default: false
        },
    })

    const emit = defineEmits(['active-group-changed'])

    /**
     * Sets the selected group
     */
    function setActiveGroup(id) {
        isVisible.value = false
        activeGroup.value = id
        emit('active-group-changed', id)
    }

</script>

<template>
    <div v-if="isVisible" id="groupSwitch">
        <StackLayout :should-grow="false">
            <template #content>
                <div class="columns is-centered m-0">
                    <div class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen is-one-quarter-fullhd">
                        <div class="columns is-multiline m-0">
                            <UseColorMode v-slot="{ mode }">
                                <div class="column is-full">
                                    <button type="button" class="button is-fullwidth" :class="{'is-dark has-text-light is-outlined': mode == 'dark'}" @click="setActiveGroup(0)">
                                        {{ $t('label.all_accounts') }}
                                    </button>
                                </div>
                                <div v-if="groups.length > 1" class="column is-full">
                                    <button type="button" class="button is-fullwidth" :class="{'is-dark has-text-light is-outlined': mode == 'dark'}" @click="setActiveGroup(-1)">
                                        {{ $t('label.group_less_accounts') }}<span class="ml-2 button tag"><LucideSquareSlash class="icon-size-1 has-text-grey" /></span>
                                    </button>
                                </div>
                                <div v-if="useShare" class="column is-full">
                                    <button type="button" class="button is-fullwidth" :class="{'is-dark has-text-light is-outlined': mode == 'dark'}" @click="setActiveGroup(-2)">
                                        {{ $t('label.accounts_I_m_sharing') }}<span class="ml-2 button tag">
                                        <template v-if="useShareAllScope">
                                            <LucideUsers class="icon-size-1 mr-1 has-text-grey" />|
                                        </template>
                                        <LucideUserCheck class=" icon-size-1 has-text-grey" :class="{'ml-1' : useShareAllScope }" /></span>
                                    </button>
                                </div>
                                <div v-if="useShare" class="column is-full">
                                    <button type="button" class="button is-fullwidth" :class="{'is-dark has-text-light is-outlined': mode == 'dark'}" @click="setActiveGroup(-3)">
                                        {{ $t('label.accounts_shared_with_me') }}<span class="ml-2 button tag"><LucideAtSign class="icon-size-1 has-text-grey" /></span>
                                    </button>
                                </div>
                                <div v-if="groups.length > 1" class="column has-text-centered">
                                    {{ $t('message.or_filter_by_group') }}
                                </div>
                                <template v-for="group in groups" :key="group.id">
                                    <div v-if="group.id > 0" class="column is-full">
                                        <button type="button" class="button is-fullwidth" :class="{'is-dark has-text-light is-outlined': mode == 'dark'}" @click="setActiveGroup(group.id)">
                                            {{ group.name }}
                                        </button>
                                    </div>
                                </template>
                            </UseColorMode>
                        </div>
                        <div v-if="$slots.default" class="columns is-centered mt-0">
                            <div class="column has-text-centered">
                                <slot />
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </StackLayout>
    </div>
</template>