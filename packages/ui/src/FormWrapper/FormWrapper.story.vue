<script lang="ts" setup>
    import FormWrapper from './FormWrapper.vue'

</script>

<template>
    <Story>
        <FormWrapper title="message.title" punchline="message.punchline" >
            [any html content passed using slot]
        </FormWrapper>
    </Story>
</template>