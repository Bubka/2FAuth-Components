<script setup>
    import { ref, inject, computed } from 'vue'
    import { UseColorMode } from '@vueuse/components'
    import { LucideMenu, LucideX } from 'lucide-vue-next'

    // This is a lot of injects just for a footer
    // TODO : Try to reduce dependencies
    const appSettings = inject('appSettingsStore', {
        latestRelease: null,
        checkForUpdate: true,
    })
    const user = inject('userStore', {
        isAdmin: false,
        isAuthenticated: false,
        email: null,
        preferences: {
            showEmailInFooter: true,
        },
        logout: function () { }
    })
    const $2fauth = inject('2fauth', {
        context: 'webapp',
        version: 'x.y.z',
        config: {
            proxyAuth: false,
            proxyLogoutUrl: null,
        }
    })
    const showMenu = ref(false)
    const showReleaseFlag = computed(() => appSettings.latestRelease && appSettings.checkForUpdate)
    const showLogout = computed(() => !$2fauth.config.proxyAuth || ($2fauth.config.proxyAuth && $2fauth.config.proxyLogoutUrl))

    /**
     * 
     */
    function logout(message) {
        if(confirm(message)) {
            user.logout()
        }
    }

</script>

<template>
    <footer v-if="$2fauth.context == 'webext'" class="main">
        <!-- action buttons -->
        <div v-if="$slots.default" class="columns is-gapless">
            <div class="column has-text-centered">
                <div class="field is-grouped">
                    <slot name="default" />
                </div>
            </div>
        </div>
        <!-- sub-links -->
        <div v-else class="content has-text-centered">
            <slot name="default" />
        </div>
    </footer>
    <footer v-else-if="$2fauth.context == 'webapp'" class="main" :class="{ 'menu' : showMenu }">
        <!-- action buttons -->
        <div class="columns is-gapless" v-if="$slots.default && ! showMenu">
            <div class="column has-text-centered">
                <div class="field is-grouped">
                    <slot name="default" />
                </div>
            </div>
        </div>
        <!-- sub part -->
        <div class="content has-text-centered">
            <slot name="subpart">
                <div v-if="$route.meta.showAbout === true">
                    <!-- about link -->
                    <router-link v-if="$route.name != 'about'" id="lnkAbout" :to="{ name: 'about' }" class="has-text-grey">
                        <span v-if="user.isAuthenticated && $route.meta.watchedByKicker" class="has-text-weight-bold">2FAuth – v{{ $2fauth.version }}</span>
                        <span v-else class="">{{ $t('message.about') }}</span>
                    </router-link>
                    <span v-else>&nbsp;</span>
                </div>
                <!-- legacy links -->
                <div v-else-if="user.preferences.showEmailInFooter == false">
                    <!-- settings link -->
                    <router-link id="lnkSettings" :to="{ name: 'settings.options' }" class="has-text-grey">
                        {{ $t('message.settings.settings') }}
                    </router-link>
                    <!-- admin link -->
                    <span v-if="user.isAdmin"> -
                        <router-link id="lnkAdmin" :to="{ name: 'admin.appSetup' }" class="has-text-grey">
                            {{ $t('message.admin.admin') }}<span v-if="showReleaseFlag" class="release-flag"></span>
                        </router-link>
                    </span>
                    <!-- sign-out button -->
                    <span v-if="showLogout">
                        - <button type="button" id="lnkSignOut" class="button is-text is-like-text has-text-grey" @click="logout($t('message.auth.confirm.logout'))">{{ $t('message.auth.sign_out') }}</button>
                    </span>
                </div>
                <!-- email + menu links -->
                <div v-else>
                    <ul v-if="showMenu == true" class="ml-0 mt-1">
                        <!-- settings link -->
                        <li class="column">
                            <router-link id="lnkSettings" :to="{ name: 'settings.options' }">
                                {{ $t('message.settings.settings') }}
                            </router-link>
                        </li>
                        <!-- admin link -->
                        <li v-if="user.isAdmin" class="column">
                            <router-link id="lnkAdmin" :to="{ name: 'admin.appSetup' }" >
                                <span v-if="showReleaseFlag" class="release-flag"></span>
                                {{ $t('message.admin.admin_panel') }}
                            </router-link>
                        </li>
                        <!-- sign-out button -->
                        <li v-if="showLogout" class="column">
                            <UseColorMode v-slot="{ mode }">
                                <button type="button" id="lnkSignOut" class="button is-text is-like-text" :class="mode == 'dark' ? 'has-text-grey-lighter' : 'has-text-grey-darker'" @click="logout($t('message.auth.confirm.logout'))">
                                    {{ $t('message.auth.sign_out') }}
                                </button>
                            </UseColorMode>
                        </li>
                    </ul>
                    <!-- email call to action -->
                    <button type="button" id="btnEmailMenu" @click="showMenu = !showMenu" class="button is-text is-like-text has-text-grey" style="width: 100%;">
                        <span v-if="user.isAdmin && showReleaseFlag" class="release-flag"></span>
                        <span class="mx-2 has-ellipsis">{{ user.email }}</span>
                        <LucideMenu v-if="!showMenu" class="mr-2" />
                        <LucideX v-else class="mr-2" />
                    </button>
                </div>
            </slot>
        </div>
    </footer>
</template>
