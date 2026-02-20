<script setup>

    const props = defineProps({
        isVerticalCentered: {
            type: Boolean,
            default: false
        },
        shouldGrow: {
            type: Boolean,
            default: true
        },
    })
</script>

<template>
    <div class="stack is-flex is-flex-direction-column" :class="{'is-max-height': shouldGrow}">
        <div v-if="$slots.header" class="stack-header">
            <slot name="header" />
        </div>
        <div v-if="$slots.subheader" class="stack-subheader">
            <slot name="subheader" />
        </div>
        <div v-if="$slots.content" class="stack-content-wrapper" :class="{'is-align-content-center': isVerticalCentered, 'is-flex-grow-1': shouldGrow}">
            <div class="stack-content">
                <slot name="content" />
            </div>
        </div>
        <div v-if="$slots.footer" class="stack-footer">
            <slot name="footer" />
        </div>
    </div>
</template>
