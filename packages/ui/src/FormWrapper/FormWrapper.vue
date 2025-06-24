<script setup>
    const props = defineProps({
        title: {
            type: String,
            default: ''
        },
        punchline: {
            type: String,
            default: ''
        },
    })
</script>

<template>
    <ResponsiveWidthWrapper>
        <h1 v-if="title" class="title has-text-grey-dark">
            {{ $t(title) }}
        </h1>
        <div v-if="punchline" id="punchline" class="block">
            {{ $t(punchline) }}
        </div>
        <slot />
    </ResponsiveWidthWrapper>   
</template>