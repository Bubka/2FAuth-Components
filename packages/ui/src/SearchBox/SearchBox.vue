<script setup>
    import { useTemplateRef, onMounted, onUnmounted } from 'vue'
    import { LucideSearch } from 'lucide-vue-next'

    const keyword = defineModel('keyword')
    const props = defineProps({
        hasNoBackground: {
            type: Boolean,
            default: false
        },
        placeholder: String,
        isSmall: {
            type: Boolean,
            default: false
        },
    })
    const searchInputRef = useTemplateRef('searchInput')
    const emit = defineEmits(['cleared'])

    onMounted(() => {
        document.addEventListener('keydown', ctrlFHandler)
        document.addEventListener('keypress', anyPrintableKeyHandler)
    })

    onUnmounted(() => {
        document.removeEventListener('keydown', ctrlFHandler)
        document.removeEventListener('keypress', anyPrintableKeyHandler)
    })

    /**
     * Attach an event listen for ctrl+F
     */
    function ctrlFHandler(e) {
        if (e.key === "f" && (e.ctrlKey || e.metaKey)) {
            e.preventDefault()
            searchInputRef.value?.focus()
        }
    }

    /**
     * Clear the search field
     */
    function clearSearch() {
        keyword.value = ''
        emit('cleared')
    }

    /**
     * Attach an event listen for any key press to automatically focus on search
     * without having to ctrl+F
     */
    function anyPrintableKeyHandler(e) {
        if (e.key === 'Enter') {
            return
        }

        keyword.value = e.key
        searchInputRef.value?.setSelectionRange(1, 1)
        searchInputRef.value?.focus()
        e.preventDefault()
    }
</script>

<template>
    <div role="search" class="field">
        <div class="control has-icons-right">
            <input
                v-model="keyword"
                @keyup.esc.prevent="(event) => { clearSearch(); event.target.blur() }"
                @keyup.enter.prevent="(event) => event.target.blur()"
                @keypress.stop
                ref="searchInput"
                id="txtSearch"
                type="search"
                tabindex="1"
                :aria-label="$t('message.search')"
                :title="$t('message.search')"
                :placeholder="placeholder"
                class="input is-rounded is-search"
                :class="{ 'has-no-background': hasNoBackground, 'is-small': isSmall }">
            <span class="icon is-small is-right">
                <button type="button" v-if="keyword != ''" id="btnClearSearch" tabindex="1" :title="$t('message.clear_search')" class="clear-selection delete" @click="clearSearch"></button>
                 <LucideSearch v-else class="mr-2 icon-size-1" />
            </span>
        </div>
    </div>
</template>