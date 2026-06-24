<script setup>
    import { LucideChevronDown } from '@lucide/vue'
    import { UseColorMode } from '@vueuse/components'

    const showGroupSwitch = defineModel('showGroupSwitch')

    const props = defineProps({
        currentGroup: {
            type: String,
            default: null
        },
        activeGroup: {
            type: Number,
            default: 0
        },
        filteredCount: {
            type: Number,
            default: null
        },
        useShare: {
            type: Boolean,
            default: false
        },
    })

</script>

<template> 
    <UseColorMode v-slot="{ mode }">                       
    <button type="button" id="btnShowGroupSwitch" :title="$t('tooltip.show_group_selector')" tabindex="1" class="button is-text is-like-text has-text-grey-dark" :class="{'has-text-grey' : mode != 'dark'}" @click.stop="showGroupSwitch = !showGroupSwitch">
        <template v-if="parseInt(activeGroup) == -1">
            {{ $t('label.group_less') }} ({{ filteredCount }})&nbsp;
        </template>
        <template v-else-if="useShare && parseInt(activeGroup) == -2">
            {{ $t('label.shared_by_me') }} ({{ filteredCount }})&nbsp;
        </template>
        <template v-else-if="useShare && parseInt(activeGroup) == -3">
                {{ $t('label.shared_with_me') }} ({{ filteredCount }})&nbsp;
        </template>
        <template v-else-if="currentGroup">
            {{ currentGroup }} ({{ filteredCount }})&nbsp;
        </template>
        <template v-else>
            {{ $t('label.all') }} ({{ filteredCount }})&nbsp;
        </template>
        <LucideChevronDown class="mt-1" />
    </button>
    </UseColorMode>
</template>