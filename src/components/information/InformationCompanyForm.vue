<template>
    <div class="pt-8 px-8 container">
        <!-- Business Information -->
        <div class="mb-4">
            <div class="text-lg font-bold mb-4">Business Company Information</div>
            <div class="mb-4">
                <InputForm type="text" v-model="companyName" :disabled="disabledForm" id="company-name-text"
                    inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium"
                    placeholder="Your company name" label="Company Name" />
                <ErrorMessage :message="errors.companyName" v-if="errors.companyName" />
            </div>
            <div class="mb-4">
                <label for="dropdown-country-of-incorporation-button" class="block mb-2 text-sm font-medium">Country of
                    Incorporation</label>
                <SelectForm id="dropdown-country-of-incorporation-button" class="w-full"
                    placeholder="Select country of incorporation" dropdownIcon
                    inputClass="flex items-center p-2 text-sm font-medium rounded-lg bg-transparent h-10 w-full border border-solid border-gray-500"
                    listContainerClass="rounded-lg shadow absolute z-10 w-full"
                    listClass="p-2 text-sm bg-[var(--background-normal)]" :disabled="disabledForm"
                    itemClass="px-1 flex flex-shrink flex-wrap text-center overflow-hidden justify-start my-1"
                    :listItem="countryList" v-model:selected-value="countryOfIncorporationSelected">
                </SelectForm>
                <ErrorMessage :message="errors.countryOfIncorporation" v-if="errors.countryOfIncorporation" />
            </div>
            <div class="mb-4">
                <label for="dropdown-country-of-operations-button" class="block mb-2 text-sm font-medium">Country of
                    Operations</label>
                <SelectForm id="dropdown-country-of-operations-button" class="w-full"
                    placeholder="Select country of operations" dropdownIcon
                    inputClass="flex items-center p-2 text-sm font-medium rounded-lg bg-transparent h-10 w-full border border-solid border-gray-500"
                    listContainerClass="rounded-lg shadow absolute z-10 w-full"
                    listClass="p-2 text-sm bg-[var(--background-normal)]" :disabled="disabledForm"
                    itemClass="px-1 flex flex-shrink flex-wrap text-center overflow-hidden justify-start my-1"
                    :listItem="countryList" v-model:selected-value="countryOfOperationsSelected">
                </SelectForm>
                <ErrorMessage :message="errors.countryOfOperations" v-if="errors.countryOfOperations" />
            </div>
            <div class="mb-4">
                <label for="dropdown-business-type-button" class="block mb-2 text-sm font-medium">Business Type</label>
                <SelectForm id="dropdown-business-type-button" class="w-full" placeholder="Select business type"
                    dropdownIcon
                    inputClass="flex items-center p-2 text-sm font-medium rounded-lg bg-transparent h-10 w-full border border-solid border-gray-500"
                    listContainerClass="rounded-lg shadow absolute z-10 w-full h-[110px] overflow-y-scroll"
                    listClass="p-2 text-sm bg-[var(--background-normal)]" :disabled="disabledForm"
                    itemClass="px-1 flex flex-shrink flex-wrap text-center overflow-hidden justify-start my-1"
                    :listItem="businessTypeList" v-model:selected-value="businessTypeSelected">
                </SelectForm>
                <ErrorMessage :message="errors.businessType" v-if="errors.businessType" />
            </div>
            <div class="mb-4">
                <InputForm type="text" v-model="companyAddress" :disabled="disabledForm" id="company-address-text"
                    inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium"
                    placeholder="Your company address" label="Company Address" />
                <ErrorMessage :message="errors.companyAddress" v-if="errors.companyAddress" />
            </div>

            <div class="mb-4">
                <InputForm type="number" v-model="postalCode" :disabled="disabledForm" id="postal-code-text"
                    inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium"
                    placeholder="Company's postal code" label="Postal Code" />
                <ErrorMessage :message="errors.postalCode" v-if="errors.postalCode" />
            </div>
            <div class="mb-4">
                <InputForm type="text" v-model="companyState" :disabled="disabledForm" id="company-state-text"
                    inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium"
                    placeholder="Company state" label="Company State" />
                <ErrorMessage :message="errors.state" v-if="errors.state" />
            </div>
            <div class="mb-4">
                <InputForm type="text" v-model="companyCity" :disabled="disabledForm" id="company-city-text"
                    inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium"
                    placeholder="Company city" label="Company City" />
                <ErrorMessage :message="errors.city" v-if="errors.city" />
            </div>
            <div class="mb-4">
                <InputForm type="number" v-model="registrationNumber" :disabled="disabledForm" id="registration-number-text"
                    inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium"
                    placeholder="Company registration number" label="Company Registration Number" />
                <ErrorMessage :message="errors.registrationNumber" v-if="errors.registrationNumber" />
            </div>
            <div class="mb-4">
                <DatepickerForm id="incorporation-date" label="Incorporation date" right v-model="incorporationDate"
                    labelClass="block mb-2 text-sm font-medium" :disabled="disabledForm"
                    inputClass="bg-transparent block w-full rounded-lg p-2.5 pr-10 sm:text-sm h-10" placeholder="DD-MM-YYYY"
                    formatDate="dd-mm-yyyy">
                    <template #icon>
                        <svg aria-hidden="true" class="w-5 h-5 bg-transparent" fill="var(--v-icon-color)"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </template>
                </DatepickerForm>
                <ErrorMessage :message="errors.incorporationDate" v-if="errors.incorporationDate" />
            </div>
            <!-- <div class="mb-4">
                <label for="dropdown-document-type-button" class="block mb-2 text-sm font-medium">Document Type</label>
                <SelectForm id="dropdown-document-type-button" class="w-full" placeholder="Select document type"
                    dropdownIcon
                    inputClass="flex items-center p-2 text-sm font-medium rounded-lg bg-transparent h-10 w-full border border-solid border-gray-500"
                    listContainerClass="rounded-lg shadow absolute z-10 w-full h-[110px] overflow-y-scroll"
                    listClass="p-2 text-sm bg-[var(--background-normal)]" :disabled="disabledForm"
                    itemClass="px-1 flex flex-shrink flex-wrap text-center overflow-hidden justify-start my-1"
                    :listItem="documentTypeList" v-model:selected-value="documentTypeSelected">
                </SelectForm>
                <ErrorMessage :message="errors.documentType" v-if="errors.documentType" />
            </div> -->
            <div class="mb-4">
                <label for="dropdown-content-type-button" class="block mb-2 text-sm font-medium">Content Type</label>
                <SelectForm id="dropdown-content-type-button" class="w-full" placeholder="Select content type" dropdownIcon
                    inputClass="flex items-center p-2 text-sm font-medium rounded-lg bg-transparent h-10 w-full border border-solid border-gray-500"
                    listContainerClass="rounded-lg shadow absolute z-10 w-full"
                    listClass="p-2 text-sm bg-[var(--background-normal)]" :disabled="disabledForm"
                    itemClass="px-1 flex flex-shrink flex-wrap text-center overflow-hidden justify-start my-1"
                    :listItem="contentTypeList" v-model:selected-value="contentTypeSelected">
                </SelectForm>
                <ErrorMessage :message="errors.contentType" v-if="errors.contentType" />
            </div>
            <div class="mb-4">
                <UploadFileForm v-model="fileUploaded" multiple
                    :disabled="!documentTypeSelected?.value || !contentTypeSelected?.value" id="documents-upload"
                    inputClass="bg-transparent text-sm border rounded-lg max-w-sm h-10"
                    labelClass="block mb-2 text-sm font-medium" placeholder="Upload files" label="Documents"
                    :typeAccepted="contentTypeSelected?.value" />
                <ErrorMessage :message="errors.fileUploaded" v-if="errors.fileUploaded" />
            </div>
        </div>

        <!-- Submit Button -->
        <div class="py-4">
            <button type="button"
                class="bg-[#1e74fd] focus:outline-none focus:ring-1 focus:ring-[#1e74fd] focus:border-[#1e74fd] text-[var(--v-button-color)]
                                font-medium rounded-lg text-sm px-5 py-2.5 w-full items-center text-center 
                                disabled:bg-[var(--v-button-background-color-disabled)] disabled:cursor-default disabled:text-[var(--foreground-subdued)]"
                :disabled="disabledForm" @click="submitForm">
                Submit
            </button>
        </div>
        <Loading v-if="loading" />

    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from "vue-router"
import axios from 'axios'
import AppApi from "../../apiConfig"
import { hasKeyObject } from "./../../utils/commonUtils"
import InputForm from '../common/InputForm.vue'
import UploadFileForm from '../common/UploadFileForm.vue'
import DatepickerForm from '../common/DatepickerForm.vue'
import SelectForm from '../common/SelectForm.vue'
import ErrorMessage from "../common/ErrorMessage.vue"
import Loading from "../common/Loading.vue"

const router = useRouter();

const companyName = ref(null);
const errors = ref({})
const loading = ref(false)
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

const documentTypeList = ref([
    {
        label: 'National Identity',
        value: 'national_identity'
    },
    {
        label: 'Company Proof',
        value: 'company_proof'
    },
    {
        label: 'Company Address Proof',
        value: 'company_address_proof'
    },
    {
        label: 'National Registration Identity Card',
        value: 'nric'
    },
    {
        label: 'Passport',
        value: 'passport'
    },
    {
        label: 'KTP',
        value: 'ktp'
    },
    {
        label: 'Employment Pass',
        value: 'employment_pass'
    },
    {
        label: 'S-Pass',
        value: 's_pass'
    },
    {
        label: 'Work Permit',
        value: 'work_permit'
    },
    {
        label: 'Photo',
        value: 'photo'
    },
    {
        label: 'Bank Statement',
        value: 'bank_statement'
    },
    {
        label: 'Utility Bill',
        value: 'utility_bill'
    },
    {
        label: 'Phone Bill',
        value: 'phone_bill'
    },
    {
        label: 'Tax Bill',
        value: 'tax_bill'
    },
    {
        label: 'Family Card',
        value: 'family_card'
    },
    {
        label: 'Identity Report',
        value: 'identity_report'
    },
    {
        label: 'FDW',
        value: 'fdw'
    },
]);

const documentTypeSelected = ref({
    label: 'Photo',
    value: 'photo'
});

const contentTypeList = ref([
    {
        label: 'Image (JPG)',
        value: 'image/jpg'
    },
    {
        label: 'Image (JPEG)',
        value: 'image/jpeg'
    },
    {
        label: 'Image (PNG)',
        value: 'image/png'
    },
    {
        label: 'Image (SVG)',
        value: 'image/svg'
    },
    {
        label: 'Application (PDF)',
        value: 'application/pdf'
    },

]);

const contentTypeSelected = ref(null);

var disabledForm = ref(false);                               //disable form

var fileUploaded = ref(null)

watch(registrationNumber, async (newQuestion) => {
    registrationNumber.value = newQuestion.toString().replace(/[^0-9]/g, '');
})

watch(postalCode, async (newQuestion) => {
    postalCode.value = newQuestion.toString().replace(/[^0-9]/g, '');
})


const get_file_array = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            resolve(event.target.result);
        };
        reader.onerror = (err) => {
            reject(err);
        };
        reader.readAsArrayBuffer(file);
    });
};

var submitForm = async () => {
    var fileFlag = false;
    var dataFlag = false;
    errors.value = {}
    loading.value = true;

    try {
        if (fileUploaded.value) {
            for (let i = 0; i < fileUploaded.value.length; i++) {
                const imageData = {
                    documentType: documentTypeSelected.value.value,
                    documentName: fileUploaded.value[i].name,
                    contentType: contentTypeSelected.value.value,
                    contentLength: fileUploaded.value[i].size
                }
                const res = await AppApi("post", "/wallex-business/generate-upload-url", imageData)
                if (res.data) {
                    const fileBuffer = get_file_array(fileUploaded.value[i]);
                    const resUploaded = await axios.put(res.data.uploadURL, fileBuffer, {
                        headers: {
                            "x-amz-storage-class": "STANDARD",
                            "Content-Type": imageData.contentType,
                        },
                    });
                    if (resUploaded.statusText === 'OK') {
                        console.log(`File "${imageData.documentName}" uploaded successfully`);
                        fileFlag = true;
                    } else {

                        console.log(`File "${imageData.documentName}" uploaded failed`);
                        fileFlag = false;
                    }
                }
            }
        }
    } catch (error) {
        loading.value = false;
    }



    const data = {
        countryOfIncorporation: countryOfIncorporationSelected.value?.value || "",
        countryOfOperations: countryOfOperationsSelected.value?.value || "",
        businessType: businessTypeSelected.value?.value || "",
        companyAddress: companyAddress.value,
        postalCode: postalCode.value,
        state: companyState.value,
        city: companyCity.value,
        registrationNumber: registrationNumber.value,
        incorporationDate: incorporationDate.value,
        companyName: companyName.value
    }


    if (!data.countryOfIncorporation) {
        errors.value = { ...errors.value, countryOfIncorporation: "Country of Incorporation is required" }
    }
    if (!data.countryOfOperations) {
        errors.value = { ...errors.value, countryOfOperations: "Country of Operations is required" }
    }
    if (!data.businessType) {
        errors.value = { ...errors.value, businessType: "Business is required" }
    }
    if (!data.companyAddress) {
        errors.value = { ...errors.value, companyAddress: "Company address is required" }
    }
    if (!data.postalCode) {
        errors.value = { ...errors.value, postalCode: "Postal code is required" }
    }
    if (!data.state) {
        errors.value = { ...errors.value, state: "Company State is required" }
    }
    if (!data.city) {
        errors.value = { ...errors.value, city: "Company City is required" }
    }
    if (!data.registrationNumber) {
        errors.value = { ...errors.value, registrationNumber: "Company Registration Number is required" }
    }
    if (!data.incorporationDate) {
        errors.value = { ...errors.value, incorporationDate: "Incorporation date is required" }
    }
    if (!data.companyName) {
        errors.value = { ...errors.value, companyName: "Company name is required" }
    }

    if (hasKeyObject(errors.value)) {
        return false;
    }



    try {
        const resCompanyDetails = await AppApi("patch", "/wallex-business/update-company-details", data)
        if (resCompanyDetails.data.status.value === 'completed') {
            dataFlag = true;

            if (fileFlag && dataFlag) {
                const res = await AppApi("post", "/wallex-business/submit-doc")
                if (res.data) {
                    console.log(res.data);
                    router.push("/verification");
                } else {
                    console.log(res.msg.message);
                }
            }
            loading.value = false;


        } else {
            console.log(resCompanyDetails.data.status);
            dataFlag = false;
            loading.value = false;

        }
    } catch (error) {
        loading.value = false;
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
