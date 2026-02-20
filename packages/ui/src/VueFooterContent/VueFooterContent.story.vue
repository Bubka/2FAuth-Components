<script lang="ts" setup>
    import { reactive } from 'vue'
    import { createRouter, createMemoryHistory } from 'vue-router'
    import VueFooter from './VueFooter.vue'
    
    function setupApp ({ app }) {
        const user = reactive({
            isAdmin: true,
            isAuthenticated: true,
            email: 'john.doe@example.com',
            preferences: {
                showEmailInFooter: true,
            },
            logout: function () { }
        })

        const $2fauth = reactive({
            context: 'webext',
            version: 'x.y.z',
            config: {
                proxyAuth: false,
                proxyLogoutUrl: null,
            }
        })

        app.provide('2fauth', $2fauth)
        app.provide('userStore', user)

        // Router mock
        app.use(createRouter({
            history: createMemoryHistory(),
            routes: [
                { path: '/about', name: 'about', component: { render: () => null }, meta: { showAbout: false }},
                { path: '/settings/options', name: 'settings.options', component: { render: () => null }, meta: { showAbout: false }},
                { path: '/admin/setup', name: 'admin.appSetup', component: { render: () => null }, meta: { showAbout: false }},
                { path: '/', name: 'home', component: { render: () => null }, meta: { showAbout: true }},
            ],
        }))
    }
</script>

<template>
    <Story :setup-app="setupApp">
        <Variant title="Default subpart">
            <VueFooter>
                <template #default>
                    <button class="button is-link">Some</button>
                    <button class="button is-link">grouped</button>
                    <button class="button is-link">buttons</button>
                </template>
            </VueFooter>
        </Variant>
        <Variant title="Custom subpart">
            <VueFooter>
                <template #default>
                    <button class="button is-link">Some</button>
                    <button class="button is-link">grouped</button>
                    <button class="button is-link">buttons</button>
                </template>
                <template #subpart>
                    any html content as custom subpart
                </template>
            </VueFooter>
        </Variant>
    </Story>
</template>