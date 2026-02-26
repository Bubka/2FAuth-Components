<script setup>    
    const props = defineProps({
        isActive: {
            type: Boolean,
            default: true
        },
    })
</script>

<template>
    <div v-if="isActive" class="container form-column">
        <slot />
    </div>
    <slot v-else /> 
</template>