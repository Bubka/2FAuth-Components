<script setup>
    import { ref } from 'vue'
    import { VueButton, FormButtons, FormPasswordField } from '@2fauth/formcontrols'

    const model = ref('pwd')
</script>

<template>
    <main class="main-section">
        <!-- <div>
            <VueButton label="Hello World" />
            <VueButton label="Hello World" color="is-text" />
        </div>
        <div>
            <FormButtons submitLabel="Submit" cancelLabel="Cancel" showCancelButton="true" />
        </div> -->
        <div>
            <FormPasswordField
                v-model="model"
                :label="'Label'"
                :fieldName="'myField'"
                :help="'help'"
                :showRules="true"
            />
        </div>
    </main>
</template>