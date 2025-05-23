<script setup>
    import ResponsiveWidthWrapper from '../ResponsiveWidthWrapper/ResponsiveWidthWrapper.vue'
    
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
        <ResponsiveWidthWrapper :is-active="isResponsive">
            <nav class="tabs is-centered is-fullwidth">
                <ul role="menubar">
                    <li
                        v-for="tab in props.tabs"
                        :key="tab.view"
                        :class="{ 'is-active': tab.view === props.activeTab }"
                    >
                        <a :id="tab.id" @click="emit('tab-selected', tab.view)">{{ $t(tab.name) }}</a>
                    </li>
                </ul>
            </nav>
        </ResponsiveWidthWrapper>
    </div>
</template>