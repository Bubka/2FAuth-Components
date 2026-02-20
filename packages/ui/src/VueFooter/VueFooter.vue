<script setup>

    import { ref, inject } from 'vue'

    import VueFooterContent from '../VueFooterContent/VueFooterContent.vue'

    const $2fauth = inject('2fauth', {
        context: 'webapp',
        version: 'x.y.z',
        config: {
            proxyAuth: false,
            proxyLogoutUrl: null,
        }
    })

    const showMenu = ref(false)
</script>

<template>
    <footer v-if="$2fauth.context == 'webext'" class="main">
        <VueFooterContent>
            <template #default>
                <slot name="default" />
            </template>
            <template #subpart>
                <slot name="subpart" />
            </template>
        </VueFooterContent>
    </footer>
    <footer v-else-if="$2fauth.context == 'webapp'" class="main" :class="{ 'menu' : showMenu }">
        <VueFooterContent v-model:show-menu="showMenu">
            <template #default>
                <slot name="default" />
            </template>
            <template #subpart>
                <slot name="subpart" />
            </template>
        </VueFooterContent>
    </footer>
</template>
