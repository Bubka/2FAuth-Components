<script setup>
    import { NavigationButton } from '@2fauth/formcontrols'
    import { useNotify } from '../Notify'
    import { VueFooter } from '../VueFooter'

    const isActive = defineModel()
    const props = defineProps({
        modelValue: Boolean,
        isFullHeight:  {
            type: Boolean,
            default: false
        }
    })

    function closeModal(event) {
        useNotify().clear()
        isActive.value = false
    }
</script>

<template>
    <div class="modal modal-otp" v-bind:class="{ 'is-active': isActive }">
        <div class="modal-background" @click.stop="closeModal"></div>
        <div v-if="isFullHeight" class="modal-content modal-with-footer">
            <div class="modal-slot p-4 has-text-centered">
                <slot></slot>
            </div>
        </div>
        <div v-else class="modal-content modal-with-footer">
            <section class="section">
                <div class="columns is-centered">
                    <div class="column is-three-quarters">
                        <div class="modal-slot has-text-centered is-shadowless">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <VueFooter>
            <template #default>
                <NavigationButton action="close" :useLinkTag="false" @closed="closeModal" />
            </template>
            <template #subpart>
                <router-link v-if="$route.name != 'accounts'" id="lnkBackToHome" :to="{ name: 'accounts' }" class="has-text-grey">{{ $t('message.back_to_home') }}</router-link>
                <span v-else>&nbsp;</span>
            </template>
            
        </VueFooter>
    </div>
</template>