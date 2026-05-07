<script setup>    
    const props = defineProps({
        isActive: {
            type: Boolean,
            default: true
        },
        isCompact: {
            type: Boolean,
            default: false
        },
    })
</script>

<template>
    <div v-if="isActive" class="container" :class="isCompact ? 'pt-3' : 'form-column'">
        <slot />
    </div>
    <slot v-else /> 
</template>