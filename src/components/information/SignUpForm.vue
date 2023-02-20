<template>
    <div class="pt-8 px-8 container">
        <!-- Sign Up Virtual Account -->
        <div class="mb-4">
            <div class="text-lg font-bold mb-4">Sign Up Virtual Account</div>
            <div class="mb-4">
                <InputForm type="text" v-model="firstName" :disabled="disabledForm" id="first-name"
                    inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium"
                    placeholder="First name" label="First name" />
                <ErrorMessage :message="errors.firstName" v-if="errors.firstName" />

            </div>
            <div class="mb-4">
                <InputForm type="text" v-model="lastName" :disabled="disabledForm" id="last-name"
                    inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium"
                    placeholder="Last name" label="Last name" />
                <ErrorMessage :message="errors.lastName" v-if="errors.lastName" />
            </div>
            <div class="mb-4 box-border relative">
                <label for="country-code" class="block mb-2 text-sm font-medium">Country</label>
                <!-- dropdown -->
                <SelectForm id="country-code"
                    inputClass="flex items-center px-2 py-2 text-sm font-medium rounded-lg bg-[var(--background-input)] w-full h-10 border border-solid"
                    listContainerClass="rounded-lg shadow absolute left-0 z-99 w-full"
                    listClass="py-2 px-0 text-sm bg-[var(--background-normal)]" :disabled="disabledForm"
                    itemClass="px-1 py-2 overflow-hidden justify-start" dropdownIcon :listItem="countryCodeList"
                    v-model:selected-value="countrySelected">
                    <template v-slot:button="{ selectedValue }">
                        <img alt="Flag" :src="selectedValue.img" class="h-3.5 w-5 mr-2">
                        <span class="text-sm leading-5">{{ selectedValue.label }}</span>
                    </template>
                    <template v-slot:item="{ item }">
                        <img alt="Flag" :src="item.img" class="h-3.5 w-5 mr-1">
                        <span class="text-sm leading-5">{{ item.label }}</span>
                    </template>
                </SelectForm>
            </div>
        </div>

        <!-- Submit Button -->
        <div class="py-4">
            <button type="button"
                class="bg-[#1e74fd] focus:outline-none focus:ring-1 focus:ring-[#1e74fd] focus:border-[#1e74fd] text-[var(--v-button-color)]
                font-medium rounded-lg text-sm px-5 py-2.5 w-full items-center text-center disabled:bg-[var(--v-button-background-color-disabled)] disabled:cursor-default disabled:text-[var(--foreground-subdued)]"
                :disabled="disabledForm" @click="submitForm">
                Submit
            </button>
        </div>
        <Loading v-if="loading" />

        <div id="alert-modal" tabindex="-1" class="fixed inset-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full justify-center items-center"
            :class="alertEKYC ? 'flex' : 'hidden'">
            <div class="relative w-full h-full max-w-md md:h-auto">
                <div class="relative bg-[var(--background-normal)] rounded-lg shadow">
                    <div class="p-6 space-y-6 flex-col ">
                        <div class="flex items-center justify-center">
                            <svg aria-hidden="true" class="mx-auto mb-4 text-white w-14 h-14" fill="bg-red-600" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div class="flex items-center justify-center"> 
                            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">You need to do ekyc before signing up</h3>
                        </div>
                        <div class="flex items-center justify-center m-0">
                            <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" @click="doEKYC">
                                Do ekyc now
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted, reactive } from 'vue'
import { useRouter } from "vue-router"
import AppApi from "../../apiConfig"
import InputForm from '../common/InputForm.vue'
import SelectForm from '../common/SelectForm.vue'
import Modal from '../common/Modal.vue'
import Loading from "../common/Loading.vue"
import ErrorMessage from "../common/ErrorMessage.vue"
import { hasKeyObject } from "./../../utils/commonUtils"

const router = useRouter();
const countryCodeList = ref([
    {
        img: 'https://staging.tagrise.com/static/media/singapore_flag.975f4084ca809a9eca2106dfab7caceb.svg',
        label: 'Singapore',
        value: 'SG'
    },
    {
        img: 'https://staging.tagrise.com/static/media/hongkong_flag.743d25c48b17eac6d1a966ed462bf7d0.svg',
        label: 'Hong Kong',
        value: 'HK'
    },
    {
        img: 'https://staging.tagrise.com/static/media/korea_flag.2b4d800b17bf5c624a185da1c2966854.svg',
        label: 'Korean',
        value: 'KR'
    },
    {
        img: 'https://staging.tagrise.com/static/media/taiwan_flag.ac6bcad0ad5f7095204dc7fe96735c88.svg',
        label: 'Taiwan',
        value: 'TW'
    },
]);

var countrySelected = ref({
    img: 'https://staging.tagrise.com/static/media/singapore_flag.975f4084ca809a9eca2106dfab7caceb.svg',
    label: 'Singapore',
    value: 'SG'
});

var disabledForm = ref(false);                               //disable form

const firstName = ref('');
const lastName = ref('');
const businessId = ref(null);
const loading = ref(false)
const errors = ref({})
const alertEKYC = ref(false)

onMounted(async () => {
    const res = await AppApi("get", "/business-auth/business-role", localStorage.getItem("rise_token"))
    if (res.data) {
        businessId.value = res.data.busUser.business_id;
    }
})

const doEKYC = () => {
    router.push('/verification/ekyc/eKyc-start')
}

const submitForm = async () => {
<<<<<<< HEAD
    const payload = {
        businessId: businessId.value,
        firstName: firstName.value,
        lastName: lastName.value,
        countryCode: countrySelected.value.value,
    }
    console.log("🚀 thinhvq ~ file: SignUpForm.vue:117 ~ submitForm ~ payload", payload)
    errors.value = {}
    if (!payload.firstName) {
        errors.value = { ...errors.value, firstName: "First name is required" }
    }
    if (!payload.lastName) {
        errors.value = { ...errors.value, lastName: "Last name is required" }
    }
    if (hasKeyObject(errors.value)) {
        return false;
    }
=======
    //check ekyc
    var resEKYC = null
    loading.value = true;
>>>>>>> ff5068f489a995bb8da903f1d2edc7d2aacd35ba
    try {
        resEKYC = await AppApi("get", "/wallex-business/kyc-raw-data", localStorage.getItem("rise_token"))
        if(resEKYC.data) {
            const payload = {
                businessId: businessId.value,
                firstName: firstName.value,
                lastName: lastName.value,
                countryCode: countrySelected.value.value,
            }
            errors.value = {}
            if (!payload.firstName) {
                errors.value = { ...errors.value, firstName: "First name is required" }
            }
            if (!payload.lastName) {
                errors.value = { ...errors.value, lastName: "Last name is required" }
            }
            if (hasKeyObject(errors.value)) {
                return false;
            }
            const res = await AppApi("post", "/wallex-business/signup", localStorage.getItem("rise_token"), payload)
            if (res.data) {
                const data = {
                    firstName: firstName.value,
                    lastName: lastName.value,
                    countryCode: countrySelected.value.value,
                }
                loading.value = false
                router.push({
                    name: "VerifyAdmin",
                    query: { ...data },
                })
            }

        }
    } catch (error) {
        console.log(error);
        loading.value = false
        disabledForm.value = true;
        alertEKYC.value = true;
    }
    
}
</script>

<style>
.container {
    width: 350px !important;
}

input {
    width: 100%;
}

ul {
    list-style-type: none;
}
</style>
