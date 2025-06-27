<script lang="ts" setup>
    import { ref, watch, useTemplateRef, reactive, nextTick } from 'vue'
    import { logEvent } from 'histoire/client'
    import OtpDisplay from './OtpDisplay.vue'
    import twofaccountServiceStub from './twofaccountServiceStub'

    const otpDisplayRef = useTemplateRef('otpDisplay')
    const state = reactive({
        accountParams: {
            otp_type: 'totp',
            account: 'MyAccount',
            service: 'MyService',
            icon: 'iconfile.png',
            secret: 'XXXX====',
            digits: 6,
            algorithm: 'sha1',
            period: 30,
            counter: null,
            image: ''
        },
        uri: '',
        service: twofaccountServiceStub,
        preferences: {
            showOtpAsDot: false,
            revealDottedOTP: false,
            closeOtpOnCopy: false,
            copyOtpOnDisplay: false,
            clearSearchOnCopy: false,
            activeGroup: 0,
            kickUserAfter: 15,
            viewDefaultGroupOnCopy: false,
            defaultGroup: 0,
            formatPassword: false,
            formatPasswordBy: 0.5,
            getOtpOnRequest: false,
            autoCloseTimeout: 2,
            showNextOtp: false
        },
        can_showNextOtp: true,
        iconPathPrefix: '',
        showUsingParams: false,
        showUsingId: false,
        showUsingUri: false,
        clearOTP: false,
    })

    watch(
        () => state.showUsingId,
        () => {
            otpDisplayRef.value?.show(1)
        }
    )
    watch(
        () => state.showUsingUri,
        () => {
            state.uri = 'otpauth://totp/service:account?secret=A4GRFHVVRBGY7UIW'
            nextTick().then(() => {
                otpDisplayRef.value?.show()
            })
        }
    )
    watch(
        () => state.showUsingParams,
        () => {
            state.uri = ''
            nextTick().then(() => {
                otpDisplayRef.value?.show()
            })
        }
    )
    watch(
        () => state.clearOTP,
        () => {
            otpDisplayRef.value?.clearOTP()
        }
    )

</script>

<template>
    <Story>
        <Variant title="Standard">
            <!-- <template #default="{ state }"> -->
                <OtpDisplay
                    ref="otpDisplay"
                    :accountParams="state.accountParams"
                    :uri="state.uri"
                    :preferences="state.preferences"
                    :twofaccountService="state.service"
                    :can_showNextOtp="state.can_showNextOtp"
                    :iconPathPrefix="state.iconPathPrefix"
                    @otp-copied-to-clipboard="logEvent('otp-copied-to-clipboard', $event)"
                    @please-close-me="logEvent('please-close-me', $event)"
                    @please-clear-search="logEvent('please-clear-search', $event)"
                    @please-update-active-group="(newActiveGroupId) => logEvent('please-update-active-group', { newActiveGroupId })"
                    @kickme="logEvent('kickme', $event)"
                    @increment-hotp="(newParams) => logEvent('increment-hotp', newParams)"
                    @validation-error="(valError) => logEvent('validation-error', valError)"
                    @error="(err) => logEvent('error', err)"
                />
            <!-- </template> -->
            <template #controls>
                <HstButton color="primary" class="htw-p-2" @click="state.showUsingId = !state.showUsingId" :style="'margin: 7px;'">
                    Show(id)
                </HstButton>
                <HstButton color="primary" class="htw-p-2" @click="state.showUsingUri = !state.showUsingUri" :style="'margin: 7px;'">
                    Show(uri)
                </HstButton>
                <HstButton color="primary" class="htw-p-2" @click="state.showUsingParams = !state.showUsingParams" :style="'margin: 7px;'">
                    Show(params)
                </HstButton>
                <HstButton class="htw-p-2" @click="state.clearOTP = !state.clearOTP" :style="'margin: 7px;'">
                    clearOTP()
                </HstButton>
                <HstCheckbox v-model="state.preferences.formatPassword" title="formatPassword" />
                <HstSelect
                    v-model="state.preferences.formatPasswordBy"
                    v-if="state.preferences.formatPassword"
                    :title="'___formatPasswordBy'"
                    :options="[
                        { label: 'By half', value: 0.5 },
                        { label: 'By pair', value: 2 },
                        { label: 'By trio', value: 3 },
                    ]"
                />
                <HstCheckbox v-model="state.preferences.showOtpAsDot" title="showOtpAsDot" />
                <HstCheckbox v-model="state.preferences.revealDottedOTP" v-if="state.preferences.showOtpAsDot" title="___revealDottedOTP" />
                <HstCheckbox v-model="state.preferences.copyOtpOnDisplay" title="copyOtpOnDisplay" />
                <HstCheckbox v-model="state.preferences.showNextOtp" title="showNextOtp" />
                <HstCheckbox v-model="state.preferences.closeOtpOnCopy" title="closeOtpOnCopy" />
                <HstCheckbox v-model="state.preferences.clearSearchOnCopy" title="clearSearchOnCopy" />
                <HstCheckbox v-model="state.preferences.viewDefaultGroupOnCopy" title="viewDefaultGroupOnCopy" />
                <HstCheckbox v-model="state.preferences.getOtpOnRequest" title="getOtpOnRequest" />
                <HstNumber v-model="state.preferences.autoCloseTimeout" v-if="state.preferences.getOtpOnRequest" :step="1" title="___autoCloseTimeout" />
                <HstNumber v-model="state.preferences.kickUserAfter" :step="1" title="kickUserAfter" />
            </template>
        </Variant>
    </Story>
</template>