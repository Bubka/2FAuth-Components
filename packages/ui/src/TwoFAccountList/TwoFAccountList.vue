<script setup>
    const props = defineProps({
        layout: {
            type: String,
            default: 'list',
        },
    })

</script>

<template>
    <table v-if="props.layout == 'table'" class="table tfa-table is-fullwidth">
        <tbody>
            <slot />
        </tbody>
    </table>
    <slot v-else />
</template>
