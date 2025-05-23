<script setup>    
    const props = defineProps({
        isActive: {
            type: Boolean,
            default: true
        },
    })
</script>

<template>
    <div v-if="isActive" class="columns is-centered">
        <div class="form-column column is-two-thirds-tablet is-half-desktop is-half-widescreen is-one-third-fullhd">
            <slot />
        </div>
    </div>
    <slot v-else /> 
</template>