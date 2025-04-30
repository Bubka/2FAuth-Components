<script setup>    
    const props = defineProps({
        targetPagetitle: {
            type: String,
            default: ''
        },
        action: {
            type: String,
            default: 'close'
        },
        useLinkTag: {
            type: Boolean,
            default: true
        },
        isText: {
            type: Boolean,
            default: false
        },
        isCapture: {
            type: Boolean,
            default: false
        },
        isRounded: {
            type: Boolean,
            default: true
        },
        darkMode:  {
            type: Boolean,
            default: true
        },
    })

    const classes = 'button'
        + (props.darkMode == true && ! props.isText && ! props.isCapture ? ' is-dark' : '')
        + (props.isText ? ' is-text' : '')
        + (props.isCapture ? ' is-large is-warning' : '')
        + (props.isRounded ? ' is-rounded' : '')
</script>

<template>
    <!-- back / close / cancel button -->
    <p v-if="useLinkTag" class="control">
        <a
            v-if="action == 'close'"
            id="lnkClose"
            @click.prevent="$emit('closed')"
            :class="classes"
            tabindex="0"
            role="button"
            :aria-label="$t('message.close_the_x_page', { pagetitle: targetPagetitle })"
        >
            {{ $t('message.close') }}
        </a>
        <a
            v-else-if="action == 'back'"
            id="lnkBack"
            @click.prevent="$emit('goback')"
            :class="classes"
            :aria-label="$t('message.close_the_x_page', { pagetitle: targetPagetitle })"
        >
            {{ $t('message.back') }}
        </a>
        <a
            v-else-if="action == 'cancel'"
            id="lnkCancel"
            @click.prevent="$emit('canceled')"
            :class="classes"
        >
            {{ $t('message.cancel') }}
        </a>
    </p>
    <p v-else class="control">
        <button
            v-if="action == 'close'"
            id="btnClose"
            :class="classes"
            @click="$emit('closed')"
            type="button"
        >
            {{ $t('message.close') }}
        </button>
        <button
            v-if="action == 'cancel'"
            id="btnCancel"
            :class="classes"
            @click="$emit('canceled')"
            type="button"
        >
            {{ $t('message.cancel') }}
        </button>
    </p>
</template>