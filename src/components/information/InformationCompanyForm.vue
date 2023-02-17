<template>
    <div class="pt-8 px-8 container">
        <!-- Business Information -->
        <div class="mb-4">
            <div class="text-lg font-bold mb-4">Business Company Information</div>
            <div class="mb-4">
                <InputForm type="text" v-model="companyName" :disabled="disabledForm" id="company-name-text" inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium" placeholder="Your company name" label="Company Name" />
            </div>
            <div class="mb-4">
                <label for="dropdown-country-of-incorporation-button" class="block mb-2 text-sm font-medium">Country of Incorporation</label>
                <SelectForm id="dropdown-country-of-incorporation-button" class="w-full" placeholder="Select country of incorporation" dropdownIcon
                    inputClass="flex items-center p-2 text-sm font-medium rounded-lg bg-transparent h-10 w-full border border-solid border-gray-500"
                    listContainerClass="rounded-lg shadow absolute z-10 w-full"
                    listClass="p-2 text-sm bg-[var(--background-normal)]" :disabled="disabledForm"
                    itemClass="px-1 flex flex-shrink flex-wrap text-center overflow-hidden justify-start mb-2"
                    :listItem="countryList" v-model:selected-value="countryOfIncorporationSelected">
                </SelectForm>
            </div>
            <div class="mb-4">
                <label for="dropdown-country-of-operations-button" class="block mb-2 text-sm font-medium">Country of Operations</label>
                <SelectForm id="dropdown-country-of-operations-button" class="w-full" placeholder="Select country of operations" dropdownIcon
                    inputClass="flex items-center p-2 text-sm font-medium rounded-lg bg-transparent h-10 w-full border border-solid border-gray-500"
                    listContainerClass="rounded-lg shadow absolute z-10 w-full"
                    listClass="p-2 text-sm bg-[var(--background-normal)]" :disabled="disabledForm"
                    itemClass="px-1 flex flex-shrink flex-wrap text-center overflow-hidden justify-start mb-2"
                    :listItem="countryList" v-model:selected-value="countryOfOperationsSelected">
                </SelectForm>
            </div>
            <div class="mb-4">
                <label for="dropdown-business-type-button" class="block mb-2 text-sm font-medium">Business Type</label>
                <SelectForm id="dropdown-business-type-button" class="w-full" placeholder="Select business type" dropdownIcon
                    inputClass="flex items-center p-2 text-sm font-medium rounded-lg bg-transparent h-10 w-full border border-solid border-gray-500"
                    listContainerClass="rounded-lg shadow absolute z-10 w-full"
                    listClass="p-2 text-sm bg-[var(--background-normal)]" :disabled="disabledForm"
                    itemClass="px-1 flex flex-shrink flex-wrap text-center overflow-hidden justify-start mb-2"
                    :listItem="businessTypeList" v-model:selected-value="businessTypeSelected">
                </SelectForm>
            </div>
            <div class="mb-4">
                <InputForm type="text" v-model="companyAddress" :disabled="disabledForm" id="company-address-text" inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium" placeholder="Your company address" label="Company Address" />
            </div>
            <div class="mb-4">
                <InputForm type="text" v-model="postalCode" :disabled="disabledForm" id="postal-code-text"  inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium" placeholder="Your postal code" label="Postal Code" />
            </div>
            <div class="mb-4">
                <InputForm type="text" v-model="companyState" :disabled="disabledForm" id="company-state-text"  inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium" placeholder="Company state" label="Company State" />
            </div>
            <div class="mb-4">
                <InputForm type="text" v-model="companyCity" :disabled="disabledForm" id="company-city-text"  inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium" placeholder="Company city" label="Company City" />
            </div>            
            <div class="mb-4">
                <InputForm type="text" v-model="registrationNumber" :disabled="disabledForm" id="registration-number-text"  inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium" placeholder="Company registration number" label="Company Registration Number" />
            </div>
            <div class="mb-4">
                <DatepickerForm 
                    id="incorporation-date" label="Incorporation date" right v-model="incorporationDate"
                    labelClass="block mb-2 text-sm font-medium" :disabled="disabledForm"
                    inputClass="bg-transparent block w-full rounded-lg p-2.5 pr-10 sm:text-sm h-10"
                    placeholder="DD-MM-YYYY" formatDate="dd-mm-yyyy">
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

        <div class="mb-4">
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
import AppApi from "../../apiConfig"
import { ref, onMounted } from 'vue'

const companyName = ref(null);
const countryList = ref([
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

const countryOfIncorporationSelected = ref(null);
const countryOfOperationsSelected = ref(null);

const businessTypeList = ref([
    {
        label: 'Accommodation and Food Service',
        value: 'Accommodation and Food Service',
    },
    {
        label: 'Accounting/Audit/Consulting',
        value: 'Accounting/Audit/Consulting',
    },
    {
        label: 'Administrative and Support Service',
        value: 'Administrative and Support Service',
    },
    {
        label: 'Agriculture',
        value: 'Agriculture',
    },
    {
        label: 'Agriculture and Fishing',
        value: 'Agriculture and Fishing',
    },
    {
        label: 'Antiques & Art piece',
        value: 'Antiques & Art piece',
    },
    {
        label: 'Arts, Entertainment and Recreation',
        value: 'Arts, Entertainment and Recreation',
    },
    {
        label: 'Banking/Financial/Insurance',
        value: 'Banking/Financial/Insurance',
    },
    {
        label: 'Construction & Development',
        value: 'Construction & Development',
    },
    {
        label: 'Domestic Personnel Employment',
        value: 'Domestic Personnel Employment',
    },
    {
        label: 'Education',
        value: 'Education',
    },
    {
        label: 'Electricity, Gas and Steam',
        value: 'Electricity, Gas and Steam',
    },
    {
        label: 'Engineering',
        value: 'Engineering',
    },
    {
        label: 'Entertainment & Recreation',
        value: 'Entertainment & Recreation',
    },
    {
        label: 'Extra-Territorial Organizations',
        value: 'Extra-Territorial Organizations',
    },
    {
        label: 'Financial and Insurance',
        value: 'Financial and Insurance',
    },
    {
        label: 'Food & Beverages',
        value: 'Food & Beverages',
    },
    {
        label: 'Forestry & Logging',
        value: 'Forestry & Logging',
    },
    {
        label: 'Government Bodies',
        value: 'Government Bodies',
    },
    {
        label: 'Health and Social Services',
        value: 'Health and Social Services',
    },
    {
        label: 'Hotel & Lodging',
        value: 'Hotel & Lodging',
    },
    {
        label: 'Information Technology',
        value: 'Information Technology',
    },
    {
        label: 'Information and Communications',
        value: 'Information and Communications',
    },
    {
        label: 'Legal & Judiciary',
        value: 'Legal & Judiciary',
    },
    {
        label: 'Logistics',
        value: 'Logistics',
    },
    {
        label: 'Manufacturing',
        value: 'Manufacturing',
    },
    {
        label: 'Media & Communications',
        value: 'Media & Communications',
    },
    {
        label: 'Medical & Healthcare',
        value: 'Medical & Healthcare',
    },
    {
        label: 'Mining & Quarrying',
        value: 'Mining & Quarrying',
    },
    {
        label: 'Money Lending',
        value: 'Money Lending',
    },
    {
        label: 'Non-Profit Organization',
        value: 'Non-Profit Organization',
    },
    {
        label: 'Oil & Gas',
        value: 'Oil & Gas',
    },
    {
        label: 'Other Service Activities',
        value: 'Other Service Activities',
    },
    {
        label: 'Others',
        value: 'Others',
    },
    {
        label: 'Pawnshop',
        value: 'Pawnshop',
    },
    {
        label: 'Professional Services Firm',
        value: 'Professional Services Firm',
    },
    {
        label: 'Professional, Scientific and Technical',
        value: 'Professional, Scientific and Technical',
    },
    {
        label: 'Public Administration and Defence',
        value: 'Public Administration and Defence',
    },
    {
        label: 'Real Estate',
        value: 'Real Estate',
    },
    {
        label: 'Trading/Retail/Wholesale',
        value: 'Trading/Retail/Wholesale',
    },
    {
        label: 'Transportation and Storage',
        value: 'Transportation and Storage',
    },
    {
        label: 'Travel/Tourism',
        value: 'Travel/Tourism',
    },
    {
        label: 'Unknown - Unknown',
        value: 'Unknown - Unknown',
    },
    {
        label: 'Utilities',
        value: 'Utilities',
    },
    {
        label: 'Water Supply',
        value: 'Water Supply',
    },
    {
        label: 'Wholesale and Retail Trade',
        value: 'Wholesale and Retail Trade',
    },
]);

const businessTypeSelected = ref(null);

const companyAddress = ref(null);
const postalCode = ref(null);
const companyState = ref(null);
const companyCity = ref(null);
const registrationNumber = ref(null);
const incorporationDate = ref(null);

var disabledForm = ref(false);                               //disable form

var fileUploaded = ref(null)

var submitForm = async () => {
    console.log("submit");

    const data = {
        countryOfIncorporation: countryOfIncorporationSelected.value.value,
        countryOfOperations: countryOfOperationsSelected.value.value,
        businessType: businessTypeSelected.value.value,
        companyAddress: companyAddress.value,
        postalCode: postalCode.value,
        companyState: companyState.value,
        companyCity: companyCity.value,
        registrationNumber: registrationNumber.value,
        incorporationDate: incorporationDate.value,
        companyName: companyName.value
    }
    console.log(data);

    const res = await AppApi("patch", "/wallex-business/update-company-details", localStorage.getItem("rise_token"), data)
    if (res.data) {
        console.log(res.data);
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
