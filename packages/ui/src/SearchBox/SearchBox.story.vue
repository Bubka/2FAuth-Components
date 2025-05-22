<script lang="ts" setup>
    import { logEvent } from 'histoire/client'
    import SearchBox from './SearchBox.vue'

    function initState() {
        return {
            keyword: 'keyword',
            isSmall: false,
            hasNoBackground: false,
            placeholder: 'placeholder',
        }
    }
</script>

<template>
    <Story :init-state="initState">
        <template #default="{ state }">
            <SearchBox
                v-model:keyword="state.keyword"
                ref="searchBox"
                :is-small="state.isSmall"
                :hasNoBackground="state.hasNoBackground"
                :placeholder="state.placeholder"
                @cleared="logEvent('cleared', $event)"
            />
        </template>
    </Story>
</template>