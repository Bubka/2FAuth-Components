<script setup>
    import { LucideLoaderCircle } from 'lucide-vue-next';

    const props = defineProps({
        isVisible: Boolean,
        type: {
            type: String,
            default: 'raw',
            required: true
        },
        message: {
            type: String,
            default: '[[awaiting_message]]'
        },
        rawSize: {
            type: Number,
            default: 24
        },
    })
</script>

<template>
    <div v-if="isVisible">
        <div v-if="type == 'fullscreen'" class="spinner-container">
            <div class="spinner-wrapper">
                <span id="icnSpinnerFull" class="is-size-1 spinner">
                     <LucideLoaderCircle class="spinning icon-size-3" />
                </span>
                <span>{{ $t(message) }}</span>
            </div>
        </div>
        <div v-else-if="type == 'fullscreen-overlay'" class="spinner-overlay-container">
            <div class="spinner-wrapper">
                <span id="icnSpinnerFull" class="is-size-1 spinner">
                    <LucideLoaderCircle class="spinning icon-size-3" />
                </span>
                <span>{{ $t(message) }}</span>
            </div>
        </div>
        <LucideLoaderCircle v-else-if="type == 'raw'" class="spinning lucide-default-size" :size="rawSize"  />
        <div v-else-if="type == 'list-loading'" class="has-text-centered mt-6">
            <span id="icnSpinner" class="is-size-4">
                <LucideLoaderCircle class="spinning" />
            </span>
        </div>
    </div>
</template>
