<script setup>
    import { ref, computed, onMounted } from 'vue'
    import { useVisiblePassword } from '../useVisiblePassword'
    import Dots from '../Dots/Dots.vue'
    import { LucideCircleAlert, LucideCircleEllipsis, LucideCircleX, LucideEye, LucideEyeOff, LucideHistory, LucideLoaderCircle, LucideMenu, LucideQrCode, LucideStar, LucideUserCheck, LucideUserPen, LucideUserPlus, LucideUsers } from '@lucide/vue';

    const selectedTwofaccountIds = defineModel('selectedTwofaccountIds')

    const props = defineProps({
        storageRootPath: {
            type: String,
            default: '',
        },
        colorScheme: {
            type: String,
            default: 'dark',
        },
        inManagementMode: {
            type: Boolean,
            default: true,
        },
        enableSharing: {
            type: Boolean,
            default: true,
        },
        enableAllUsersSharingScope: {
            type: Boolean,
            default: true,
        },
        nextOtpOpacityClass: {
            type: String,
            default: 'is-opacity-0',
        },
        preferences: {
            type: Object,
            default(rawProps) {
                return {
                    displayMode: 'list',
                    enableFavorites: true,
                    showAccountsIcons: true,
                    getOtpOnRequest: true,
                    showOtpAsDot: false,
                    revealDottedOTP: false,
                    showNextOtp: true,
                    formatPassword: true,
                    formatPasswordBy: 0.5,
                    activeGroup: 0,
                }
            }
        },
        account: {
            type: Object,
            default(rawProps) {
                return {
                    id: null,
                    otp_type: 'totp',
                    service: '',
                    account: '',
                    period: null,
                    is_favorite: false,
                    icon: '',
                    is_borrowed: false,
                    borrowed_by: '',
                    is_shared: false,
                    is_shared_with_all: false,
                    otp: {
                        password: '',
                        next_password: ''
                    },
                }
            }
        },
    })

    const revealPassword = ref(null)
    const showActionsFor = ref(null)

    const buttonColor = computed(() => {
        return props.colorScheme == 'dark' ? 'is-dark' : 'is-white'
    })

    const emit = defineEmits([
        'update:selected-twofaccount-ids',
        'show-or-copy',
        'get-and-copy-otp',
        'copy-to-clipboard',
        'toggle-is-favorite',
        'show-otp'
    ])

</script>

<template>
    <div :class="[props.preferences.displayMode === 'grid' ? 'tfa-grid' : 'tfa-list']" class="column is-narrow">
        <div class="tfa-container">
            <!-- checkbox -->
            <transition name="slideCheckbox">
                <div class="tfa-min-height is-size-4-mobile is-size-3" v-if="props.preferences.enableFavorites && props.inManagementMode">
                    <span class="tfa-checkradio">
                        <input class="is-checkradio is-small" :class="props.colorScheme == 'dark' ? 'is-white':'is-info'" :id="'ckb_' + props.account.id" :value="props.account.id" type="checkbox" :name="'ckb_' + props.account.id" v-model="selectedTwofaccountIds"  />
                        <label tabindex="0" class="" :for="'ckb_' + props.account.id" v-on:keypress.space.prevent="selectAccount(account)"></label>
                    </span>
                    <span class="is-block is-size-6 is-size-7-mobile" role="button">
                        <LucideStar v-if="props.account.is_favorite" class="is-clickable" :class="props.colorScheme == 'dark' ? 'has-text-warning-dark' : 'has-text-warning-dark-invert'" @click="$emit('toggle-is-favorite', props.account.id)" :strokeWidth="1" fill="#ffb400" :title="$t('tooltip.remove_from_favorites')" />
                        <LucideStar v-else class="is-clickable" :class="props.colorScheme == 'dark' ? 'has-text-grey-dark' : 'has-text-grey-light'" @click="$emit('toggle-is-favorite', props.account.id)" :strokeWidth="1" :fill="colorScheme == 'dark' ? '#111' : '#f5f5f5'" :title="$t('tooltip.set_as_favorite')" />
                    </span>
                </div>
                <div class="tfa-cell tfa-checkbox" v-else-if="props.inManagementMode">
                    <div class="field">
                        <input class="is-checkradio is-small" :class="props.colorScheme == 'dark' ? 'is-white':'is-info'" :id="'ckb_' + props.account.id" :value="props.account.id" type="checkbox" :name="'ckb_' + props.account.id" v-model="selectedTwofaccountIds"  />
                        <label tabindex="0" :for="'ckb_' + props.account.id" v-on:keypress.space.prevent="selectAccount(account)"></label>
                    </div>
                </div>
            </transition>
            <!-- Account, service, sharing badges -->
            <div tabindex="0" class="tfa-cell tfa-content is-size-3 is-size-4-mobile" @click.exact="$emit('show-or-copy', account)" @keyup.enter="$emit('show-or-copy', account)" @click.ctrl="$emit('get-and-copy-otp', account)" role="button">  
                <div class="tfa-text has-ellipsis is-clickable">
                    <img v-if="props.account.icon && props.preferences.showAccountsIcons" role="presentation" class="tfa-icon" :src="storageRootPath + '/storage/icons/' + props.account.icon" alt="">
                    <img v-else-if="props.account.icon == null && props.preferences.showAccountsIcons" role="presentation" class="tfa-icon" :src="storageRootPath + '/storage/noicon.svg'" alt="">
                    {{ props.account.service ? props.account.service : $t('message.no_service') }}<LucideCircleAlert class="has-text-danger ml-2" v-if="props.account.account === $t('error.indecipherable')" />
                    <span class="is-block has-ellipsis is-family-primary is-size-6 is-size-7-mobile has-text-grey ">
                        <span v-if="props.enableSharing && props.account.is_borrowed" :title="$t('tooltip.this_account_is_shared_by_x_with_you', { username: props.account.borrowed_by })" class="tag p-1 mr-1" :class="props.colorScheme == 'dark' ? 'is-black is-opacity-4':'is-light is-white'" >
                            @{{ props.inManagementMode ? props.account.borrowed_by : '' }}
                        </span>
                        <span v-else-if="props.enableSharing && props.account.is_shared" :title="$t('tooltip.this_account_is_shared_with_specific_users')" class="tag p-1 mr-1" :class="props.colorScheme == 'dark' ? 'is-black is-opacity-4':'is-light is-white'" >
                            <LucideUserCheck class="icon-size-0-75" />
                        </span>
                        <span v-else-if="props.enableSharing && props.enableAllUsersSharingScope && props.account.is_shared_with_all" :title="$t('tooltip.this_account_is_shared_with_all')" class="tag p-1 mr-1" :class="props.colorScheme == 'dark' ? 'is-black is-opacity-4':'is-light is-white'" >
                            <LucideUsers class="icon-size-0-75" />
                        </span>
                        {{ props.account.account }}
                    </span>
                </div>
            </div>
            <!-- actions block -->
            <template v-if="props.enableSharing && props.preferences.getOtpOnRequest == false && !props.inManagementMode && showActionsFor === props.account.id">
                <transition name="popLater">
                    <div v-if="!props.inManagementMode" class="has-text-grey action-container" :class="{'mt-3': props.preferences.displayMode == 'grid'}">
                        <div v-if="props.account.is_shared || props.account.is_shared_with_all" class="py-1">
                            <router-link v-if="props.account.is_shared" :to="{ name: 'shareAccount', params: { twofaccountId: props.account.id } }" class="tag is-rounded mr-1" :class="buttonColor" :title="$t('tooltip.share_with_new_users')">
                                <LucideUserPlus class="icon-size-1" />
                            </router-link>
                            <router-link :to="{ name: 'accountSharing', params: { twofaccountId: props.account.id }}" class="tag is-rounded" :class="buttonColor" :title="$t('tooltip.edit_sharing')">
                                <LucideUserPen class="icon-size-1" />
                            </router-link>
                        </div>
                        <div v-else class="py-1">
                            <router-link :to="{ name: 'accountSharing', params: { twofaccountId: props.account.id } }" class="tag is-rounded mr-1" :class="buttonColor" :title="$t('tooltip.share_this_account')">
                                {{ $t('label.share') }}
                            </router-link>
                        </div>
                        <div>
                            <router-link id="lnkTransferOwnership" :to="{ name: 'transferOwnership', params: { twofaccountId: props.account.id }}" class="tag is-rounded" :class="buttonColor" :title="$t('link.transfer_ownership')">
                                {{ $t('label.transfer_ownership') }}
                            </router-link>
                        </div>
                    </div>
                </transition>
            </template>
            <template v-else>
                <!-- reveal password button -->
                <transition name="popLater" v-if="props.account.otp_type.includes('totp') && props.preferences.showOtpAsDot && props.preferences.revealDottedOTP">
                    <div v-show="props.preferences.getOtpOnRequest == false && !props.inManagementMode" class="has-text-right">
                        <button v-if="revealPassword == props.account.id" type="button" class="pr-0 button is-ghost has-text-grey-dark" @click.stop="revealPassword = null">
                            <LucideEye />
                        </button>
                        <button v-else type="button" class="pr-0 button is-ghost has-text-grey-dark" @click.stop="revealPassword = props.account.id">
                            <LucideEyeOff />
                        </button>
                    </div>
                </transition>
                <!-- always On TOTP or HOTP button -->
                <transition name="popLater">
                    <div v-show="props.preferences.getOtpOnRequest == false && !props.inManagementMode" :class="{'has-text-right': props.preferences.displayMode == 'list'}">
                        <template v-if="props.account.otp != undefined">
                            <div class="always-on-otp is-clickable has-nowrap has-text-grey is-size-5" :class="{'mt-4': props.preferences.displayMode == 'grid', 'ml-4': props.preferences.displayMode != 'grid', 'pt-2': props.preferences.showNextOtp}" @click="$emit('copy-to-clipboard', props.account.otp.password)" @keyup.enter="$emit('copy-to-clipboard', props.account.otp.password)"  :style="{ 'lineHeight': props.preferences.showNextOtp ? '1rem' : 'inherit'}" :title="$t('tooltip.copy_to_clipboard')">
                                {{ useVisiblePassword(
                                        props.account.otp.password,
                                        props.preferences.formatPassword,
                                        props.preferences.formatPasswordBy,
                                        props.preferences.showOtpAsDot,
                                        props.preferences.revealDottedOTP && revealPassword == props.account.id
                                    )
                                }}
                            </div>
                            <div v-if="props.account.otp_type.includes('totp')" class="has-nowrap" :style="{ 'lineHeight': props.preferences.showNextOtp ? '1rem' : 'inherit'}">
                                <slot name="dots" />
                            </div>
                            <div v-if="props.preferences.showNextOtp" class="has-nowrap pt-1" style="line-height: .8rem">
                                <span class="always-on-otp is-clickable has-nowrap has-text-grey is-size-7" :class="nextOtpOpacityClass" @click="$emit('copy-to-clipboard', props.account.otp.next_password)" @keyup.enter="$emit('copy-to-clipboard', props.account.otp.next_password)" :title="$t('tooltip.copy_next_password')">
                                    {{ useVisiblePassword(
                                            props.account.otp.next_password,
                                            props.preferences.formatPassword,
                                            props.preferences.formatPasswordBy,
                                            props.preferences.showOtpAsDot,
                                            props.preferences.revealDottedOTP && revealPassword == props.account.id
                                        )
                                    }}
                                </span>
                            </div>
                        </template>
                        <div v-else :class="{'mt-5': props.preferences.displayMode == 'grid'}">
                            <!-- get hotp button -->
                            <button type="button" class="button tag" :class="buttonColor" @click="$emit('show-otp', account)" :title="$t('tooltip.import_this_account')">
                                {{ $t('label.generate') }}
                            </button>
                        </div>
                    </div>
                </transition>
            </template>
            <!-- Manage mode buttons -->
            <transition name="fadeInOut">
                <div class="tfa-cell tfa-edit has-text-grey" v-if="props.inManagementMode && props.enableSharing && props.preferences.activeGroup == -2">
                    <!-- new user share button -->
                    <router-link v-if="props.account.is_shared" :to="{ name: 'shareAccount', params: { twofaccountId: props.account.id } }" class="tag is-rounded mr-1" :class="buttonColor" :title="$t('tooltip.share_with_new_users')">
                        <LucideUserPlus class="icon-size-1" />
                    </router-link>
                    <!-- manage sharing button -->
                    <router-link :to="{ name: 'accountSharing', params: { twofaccountId: props.account.id }}" class="tag is-rounded" :class="buttonColor" :title="$t('tooltip.edit_sharing')">
                        <LucideUserPen class="icon-size-1" />
                    </router-link>
                </div>
                <div class="tfa-cell tfa-edit has-text-grey" v-else-if="props.inManagementMode && ! props.account.is_borrowed">
                    <!-- edit button -->
                    <router-link :to="{ name: 'editAccount', params: { twofaccountId: props.account.id }}" class="tag is-rounded mr-1" :class="buttonColor">
                        {{ $t('link.edit') }}
                    </router-link>
                    <!-- show qrcode button -->
                    <router-link :to="{ name: 'showQRcode', params: { twofaccountId: props.account.id }}" class="tag is-rounded mr-1" :class="buttonColor" :title="$t('tooltip.show_qrcode')">
                        <LucideQrCode class="icon-size-1" />
                    </router-link>
                    <!-- log generation button -->
                    <router-link :to="{ name: 'otpLogs', params: { twofaccountId: props.account.id }}" class="tag is-rounded" :class="buttonColor" :title="$t('link.otp_generation_log')">
                        <LucideHistory class="icon-size-1" />
                    </router-link>
                </div>
            </transition>
            <!-- drag handle -->
            <transition name="fadeInOut">
                <div class="drag-handle tfa-cell tfa-dots has-text-grey" v-if="props.inManagementMode">
                    <LucideMenu />
                </div>
            </transition>
            <!-- actions block toggling -->
            <transition name="popLater">
                <div v-if="props.enableSharing && props.preferences.getOtpOnRequest == false && !props.inManagementMode && ! props.account.is_borrowed" class="tfa-cell has-text-grey-dark is-clickable" :class="props.preferences.displayMode == 'grid' ? 'mt-4' : 'ml-4'" style="min-width: 20px;">
                    <button v-if="showActionsFor == null || showActionsFor != props.account.id" @click="showActionsFor = props.account.id" class="button is-ghost p-0 has-text-grey-dark" :class="props.colorScheme == 'dark' ? 'has-text-grey-dark' : 'has-text-grey-light'">
                        <LucideCircleEllipsis />
                    </button>
                    <button v-if="showActionsFor == props.account.id" @click="showActionsFor = null" class="button is-ghost p-0" :class="props.colorScheme == 'dark' ? 'has-text-grey-dark' : 'has-text-grey-light'">
                        <LucideCircleX />
                    </button>
                </div>
            </transition>
        </div>
    </div>
</template>
