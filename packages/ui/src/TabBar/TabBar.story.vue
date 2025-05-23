<script lang="ts" setup>
    import { reactive, watch } from 'vue'
    import { logEvent } from 'histoire/client'
    import TabBar from './TabBar.vue'

    const state = reactive({
        tabs: [        
            {
                'name' : 'Tab One',
                'view' : 'tab_one',
                'id'   : 'lnkTabOne'
            },
            {
                'name' : 'Tab Two',
                'view' : 'tab_two',
                'id'   : 'lnkTabTwo'
            },
            {
                'name' : 'Tab Three',
                'view' : 'tab_three',
                'id'   : 'lnkTabthree'
            }
        ],
        activeTab: 'tab_one',
        isResponsive: true
    })

    watch(
        () => state.activeTab,
        (newActiveTab) => {
            logEvent('tab-selected', { newActiveTab })
        }
    )
</script>

<template>
    <Story>
        <TabBar
            :tabs="state.tabs"
            :activeTab="state.activeTab"
            :is-responsive="state.isResponsive"
            @tab-selected="(routeName) => state.activeTab = routeName"
        />
    </Story>
</template>