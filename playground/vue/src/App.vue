<script setup>
    import { VueButton, VueFormButtons } from '@2fauth/vue-formcontrols'
</script>

<template>
    <main class="main-section">
        <div>
            <VueButton label="Hello World" />
            <VueButton label="Hello World" color="is-text" />
        </div>
        <div>
            <VueFormButtons submitLabel="Submit" cancelLabel="Cancel" showCancelButton="true" />
        </div>
    </main>
</template>