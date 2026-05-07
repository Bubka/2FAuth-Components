<script setup>
    import ResponsiveWidthWrapper from '../ResponsiveWidthWrapper/ResponsiveWidthWrapper.vue'
    import { LucideGenericIcon } from '../LucideGenericIcon'
    
    const props = defineProps({
        tabs: {
            type: Array
        },
        activeTab: {
            type: String,
            default: ''
        },
        isResponsive: {
            type: Boolean,
            default: true
        }
    })

    const emit = defineEmits(['tab-selected'])
</script>

<template>
    <div class="options-header">
        <ResponsiveWidthWrapper :is-active="isResponsive" :is-compact="true">
            <nav class="tabs is-centered is-fullwidth">
                <ul role="menubar">
                    <li
                        v-for="tab in props.tabs"
                        :key="tab.view"
                        :class="{ 'is-active': tab.view === props.activeTab }"
                    >
                        <a :id="tab.id" @click="emit('tab-selected', tab.view)" class="is-flex-direction-column">
                            <span class="is-invisible-tablet">
                                <LucideGenericIcon :name="tab.icon" :strokeWidth="1" />
                            </span>
                            <span class="is-size-7-mobile">
                                {{ $t(tab.name) }}
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </ResponsiveWidthWrapper>
    </div>
</template>