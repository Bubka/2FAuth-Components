<script setup>
    const props = defineProps({
        useDesktopTableLayout: {
            type: Boolean,
            default: false,
        },
    })

</script>

<template>
    <table v-if="props.useDesktopTableLayout" class="table tfa-table is-fullwidth">
        <tbody>
            <slot />
        </tbody>
    </table>
    <slot v-else />
</template>
