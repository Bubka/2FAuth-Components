<script setup>
    import { NavigationButton } from '@2fauth/formcontrols'
    import { useNotify } from '../Notify'
    import { VueFooterContent } from '../VueFooterContent'

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
        <div class="modal-card is-flex-grow-1">
            <section class="modal-card-body modal-slot py-0 is-align-content-center has-text-centered">
                <slot></slot>
            </section>
            <footer class="modal-card-foot is-flex-direction-column main">
                <VueFooterContent>
                    <template #default>
                        <NavigationButton action="close" :useLinkTag="false" @closed="closeModal" />
                    </template>
                    <template #subpart>
                        <router-link v-if="$route.name != 'accounts'" id="lnkBackToHome" :to="{ name: 'accounts' }" class="has-text-grey">{{ $t('link.back_to_home') }}</router-link>
                        <span v-else>&nbsp;</span>
                    </template>
                </VueFooterContent>
            </footer>
        </div>
    </div>
</template>