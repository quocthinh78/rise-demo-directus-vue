<template>
    <div class="pt-8 px-8 container">
        <!-- Business Information -->
        <div class="mb-4">
            <div class="text-lg font-bold mb-4">Business Information</div>
            <div class="mb-4">
                <InputForm type="text" v-model="companyName" :disabled="disabledForm" :id="company-name-text"  inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium" placeholder="Name of company" label="Company name" />
            </div>
            <div class="mb-4">
                <InputForm type="number" v-model="businessRegistrationNumber" :disabled="disabledForm" id="business-registration-text" inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium" placeholder="Business Registration Number" label="Business Registration Number" />
            </div>
            <div class="mb-4">
                <DatepickerForm 
                    id="incorporation-date" label="Incorporation date" right v-model="incorporationDate"
                    labelClass="block mb-2 text-sm font-medium" :disabled="disabledForm"
                    inputClass="bg-transparent block w-full rounded-lg p-2.5 pr-10 sm:text-sm h-10"
                    placeholder="DD/MM/YYYY">
                    <template #icon>
                        <svg aria-hidden="true" class="w-5 h-5 bg-transparent" fill="var(--v-icon-color)" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </template>
                </DatepickerForm>
            </div>
            <div class="mb-4">
                <InputForm type="text" :disabled="disabledForm" id="business-website" inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium" placeholder="https://" label="Business website" />
            </div>
        </div>

        <!-- Business Address -->
        <div class="mb-4">
            <div class="text-lg font-bold mb-4">Business Address</div>
            <div class="mb-4">
                <InputForm type="number" :disabled="disabledForm" id="postcode-text" inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium" placeholder="123456" label="Postcode" />
            </div>
            <div class="mb-4">
                <InputForm type="text" :disabled="disabledForm" id="address-line-1-text" inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium" placeholder="Business Registration Number" label="Address line 1" />
            </div>
            <div class="mb-4">
                <DatepickerForm id="address-line-2" label="Address line 2" right :value="text"
                    labelClass="block mb-2 text-sm font-medium"
                    :disabled="disabledForm"
                    inputClass="bg-transparent  block w-full rounded-lg p-2.5 pr-10 sm:text-sm h-10"
                    placeholder="DD/MM/YYYY">
                    <template #icon>
                        <svg aria-hidden="true" class="w-5 h-5 bg-transparent" fill="var(--v-icon-color)" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </template>
                </DatepickerForm>
            </div>
        </div>

        <!-- Business contact person -->
        <div class="mb-4">
            <div class="text-lg font-bold mb-4">Business contact person</div>
            <div class="mb-4 box-border">
                <label for="contact-number" class="block mb-2 text-sm font-medium">Contact number</label>
                <!-- dropdown -->
                <div class="relative w-full bg-[var(--background-input)] flex flex-row rounded-md border border-solid"
                    :class="isPhoneFocus ? 'ring-1 ring-[#1C64F2] border-[#1C64F2]' : 'border-[#6B7280]'">
                    <SelectForm :id="dropdown-button"
                        inputClass="flex items-center pl-2 py-2 text-sm font-medium rounded-l-lg bg-transparent h-10"
                        listContainerClass="rounded-lg shadow absolute inset-y-0 left-0 z-99"
                        listClass="py-2 px-0 text-sm  bg-black" :disabled="disabledForm"
                        itemClass="px-1 flex flex-shrink flex-wrap text-center overflow-hidden justify-start mb-2"
                        :listItem="countryCodeList" v-model:selected-value="countrySelected">
                        <template v-slot:button="{ selectedValue }">
                            <img alt="Flag" :src="selectedValue.img" class="h-3.5 w-5 mr-2">
                            <span class="text-sm leading-5" v-html="selectedValue.label"></span>
                        </template>
                        <template v-slot:item="{ item }">
                            <img alt="Flag" :src="item.img" class="h-3.5 w-5 mr-1">
                            <span class="text-sm leading-5" v-html="item.label"></span>
                        </template>
                    </SelectForm>
                    <input type="number" :disabled="disabledForm" id="contact-number" class="bg-transparent text-sm rounded-lg h-10 border-none border-transparent focus:border-transparent focus:ring-0 disabled:bg-[var(--background-subdued)] disabled:text-[var(--foreground-subdued)]" @focus="isPhoneFocus = true" @blur="isPhoneFocus = false"/>
                </div>
            </div>
            <div class="mb-4">
                <InputForm type="text" :disabled="disabledForm" id="business-website" inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium" placeholder="email" label="Email" />
            </div>
            <div class="mb-4">
                <UploadFileForm v-model="fileUploaded" multiple :disabled="disabledForm" id="documents-upload" inputClass="bg-transparent text-sm border rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium" placeholder="Upload files" label="Documents"/>
            </div>
        </div>

        <!-- Submit Button -->
        <div class="py-4">
            <button type="button"
                class="bg-[#1e74fd]
                focus:outline-none focus:ring-1 focus:ring-[#1e74fd] focus:border-[#1e74fd] text-[var(--v-button-color)]
                font-medium rounded-lg text-sm px-5 py-2.5 w-full items-center text-center disabled:bg-[var(--v-button-background-color-disabled)] disabled:cursor-default disabled:text-[var(--foreground-subdued)]"
                :disabled="disabledForm" @click="submitForm">
                Submit
            </button>
        </div>


    </div>
</template>

<script setup>
import InputForm from '../common/InputForm.vue'
import UploadFileForm from '../common/UploadFileForm.vue'
import DatepickerForm from '../common/DatepickerForm.vue'
import SelectForm from '../common/SelectForm.vue'
import { ref } from 'vue'


const countryCodeList = ref([
    {
        img: 'https://staging.tagrise.com/static/media/singapore_flag.975f4084ca809a9eca2106dfab7caceb.svg',
        label: '+65'
    },
    {
        img: 'https://staging.tagrise.com/static/media/hongkong_flag.743d25c48b17eac6d1a966ed462bf7d0.svg',
        label: '+852'
    },
    {
        img: 'https://staging.tagrise.com/static/media/korea_flag.2b4d800b17bf5c624a185da1c2966854.svg',
        label: '+82'
    },
    {
        img: 'https://staging.tagrise.com/static/media/taiwan_flag.ac6bcad0ad5f7095204dc7fe96735c88.svg',
        label: '+886'
    },
    {
        img: 'https://staging.tagrise.com/static/media/malaysia_flag.35a24d1284212d5967522b353e15d7e3.svg',
        label: '+60'
    },
    {
        img: 'https://staging.tagrise.com/static/media/indo_flag.f624e2c8444a7794b35736c30dd82dda.svg',
        label: '+62'
    },
    {
        img: 'https://staging.tagrise.com/static/media/philipine_flag.e215bab6b405d1afeff4e809f488ec41.svg',
        label: '+63'
    },
]);

var countrySelected = ref({
    img: 'https://staging.tagrise.com/static/media/singapore_flag.975f4084ca809a9eca2106dfab7caceb.svg',
    label: '+65'
});

var isPhoneFocus = ref(false);                              //variable to get input focus event

var disabledForm = ref(false);                               //disable form

const companyName = ref('asdfasfd');

const businessRegistrationNumber = ref(98237452);

const incorporationDate = ref('23/03/2023')

var fileUploaded = ref(null)

var submitForm = () => {
    console.log("submit");
    console.log("companyName", companyName.value);
    console.log("businessRegistrationNumber", businessRegistrationNumber.value);
    console.log("incorporationDate", incorporationDate.value);
    console.log("countrySelected", countrySelected.value);
    console.log(fileUploaded.value);
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
