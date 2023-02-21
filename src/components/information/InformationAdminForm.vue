<template>
    <div class="pt-8 px-8 container">
        <!-- Business Information -->
        <div class="mb-4">
            <div class="text-lg font-bold mb-4">Business Admin Information</div>
            <div class="mb-4">
                <InputForm type="text" v-model="title" :disabled="disabledForm" id="title-text"
                    inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium"
                    placeholder="Your title" label="Title" />
                <ErrorMessage :message="errors.title" v-if="errors.title" />
            </div>
            <div class="mb-4 box-border">
                <label for="contact-number" class="block mb-2 text-sm font-medium">Contact number</label>
                <!-- dropdown -->
                <div class="w-full bg-[var(--background-input)] flex flex-row rounded-md border border-solid"
                    :class="isPhoneFocus ? 'ring-1 ring-[#1C64F2] border-[#1C64F2]' : 'border-[#6B7280]'">
                    <SelectForm id="dropdown-country-code-button"
                        inputClass="flex items-center p-2 text-sm font-medium rounded-lg bg-transparent h-10"
                        listContainerClass="rounded-lg shadow absolute inset-y-0 left-0 w-[65px] z-10"
                        listClass="p-2 text-sm bg-[var(--background-normal)]" :disabled="disabledForm"
                        itemClass="px-1 flex flex-shrink flex-wrap text-center overflow-hidden justify-start mb-2"
                        :listItem="countryCodeList" v-model:selected-value="countryCodeSelected">
                        <template v-slot:button="{ selectedValue }">
                            <img alt="Flag" :src="selectedValue.img" class="h-3.5 w-5 mr-2">
                            <span class="text-sm leading-5" v-html="selectedValue.label"></span>
                        </template>
                        <template v-slot:item="{ item }">
                            <img alt="Flag" :src="item.img" class="h-3.5 w-5 mr-1">
                            <span class="text-sm leading-5" v-html="item.label"></span>
                        </template>
                    </SelectForm>
                    <input type="number" :disabled="disabledForm" id="contact-number" placeholder="Your phone"
                        class="bg-transparent p-2 text-sm rounded-lg h-10 outline-none border-none focus:border-transparent focus:ring-transparent
                            disabled:bg-[var(--background-subdued)] disabled:text-[var(--foreground-subdued)] contact-number" @focus="isPhoneFocus = true" @blur="isPhoneFocus = false" v-model="phoneNumber" />
                </div>
                <ErrorMessage :message="errors.mobileNumber" v-if="errors.mobileNumber" />
            </div>
            <div class="mb-4">
                <label for="dropdown-gender-button" class="block mb-2 text-sm font-medium">Gender</label>
                <SelectForm id="dropdown-gender-button" class="w-full" placeholder="Select your gender" dropdownIcon
                    inputClass="flex items-center p-2 text-sm font-medium rounded-lg bg-transparent h-10 w-full border border-solid border-gray-500"
                    listContainerClass="rounded-lg shadow absolute z-10 w-full"
                    listClass="p-2 text-sm bg-[var(--background-normal)]" :disabled="disabledForm"
                    itemClass="px-1 flex flex-shrink flex-wrap text-center overflow-hidden justify-start mb-2"
                    :listItem="genderList" v-model:selected-value="genderSelected">
                </SelectForm>
                <ErrorMessage :message="errors.gender" v-if="errors.gender" />
            </div>
            <div class="mb-4">
                <label for="dropdown-country-birth-button" class="block mb-2 text-sm font-medium">Country birth</label>
                <SelectForm id="dropdown-country-birth-button" class="w-full" placeholder="Select your country birth"
                    dropdownIcon
                    inputClass="flex items-center p-2 text-sm font-medium rounded-lg bg-transparent h-10 w-full border border-solid border-gray-500"
                    listContainerClass="rounded-lg shadow absolute z-10 w-full"
                    listClass="p-2 text-sm bg-[var(--background-normal)]" :disabled="disabledForm"
                    itemClass="px-1 flex flex-shrink flex-wrap text-center overflow-hidden justify-start mb-2"
                    :listItem="countryList" v-model:selected-value="countryBirthSelected">
                </SelectForm>
                <ErrorMessage :message="errors.countryOfBirth" v-if="errors.countryOfBirth" />
            </div>
            <div class="mb-4">
                <label for="dropdown-nationality-button" class="block mb-2 text-sm font-medium">Nationality</label>
                <SelectForm id="dropdown-country-birth-button" class="w-full" placeholder="Select your nationality"
                    dropdownIcon
                    inputClass="flex items-center p-2 text-sm font-medium rounded-lg bg-transparent h-10 w-full border border-solid border-gray-500"
                    listContainerClass="rounded-lg shadow absolute z-10 w-full"
                    listClass="p-2 text-sm bg-[var(--background-normal)]" :disabled="disabledForm"
                    itemClass="px-1 flex flex-shrink flex-wrap text-center overflow-hidden justify-start mb-2"
                    :listItem="countryList" v-model:selected-value="nationalitySelected">
                </SelectForm>
                <ErrorMessage :message="errors.nationality" v-if="errors.nationality" />
            </div>
            <div class="mb-4">
                <InputForm type="text" v-model="residentialAddress" :disabled="disabledForm" id="residential-address-text"
                    inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium"
                    placeholder="Your residential address" label="Residential Address" />
                <ErrorMessage :message="errors.residentialAddress" v-if="errors.residentialAddress" />
            </div>
            <div class="mb-4">
                <InputForm type="text" v-model="residentialState" :disabled="disabledForm" id="residential-state-text"
                    inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium"
                    placeholder="Your state or province" label="State or Province" />
                <ErrorMessage :message="errors.state" v-if="errors.state" />
            </div>
            <div class="mb-4">
                <InputForm type="text" v-model="residentialCity" :disabled="disabledForm" id="residential-city-text"
                    inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium"
                    placeholder="Your city of residence" label="City of Residence" />
                <ErrorMessage :message="errors.city" v-if="errors.city" />
            </div>
            <div class="mb-4">
                <InputForm type="number" v-model="postalCode" :disabled="disabledForm" id="postal-code-text"
                    inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium"
                    placeholder="Your postal code" label="Postal Code" />
                <ErrorMessage :message="errors.postalCode" v-if="errors.postalCode" />
            </div>
            <div class="mb-4">
                <DatepickerForm id="date-of-birth" label="Date of birth" right v-model="dateOfBirth"
                    labelClass="block mb-2 text-sm font-medium" :disabled="disabledForm"
                    inputClass="bg-transparent block w-full rounded-lg p-2.5 pr-10 h-full" placeholder="DD-MM-YYYY"
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
                <ErrorMessage :message="errors.dateOfBirth" v-if="errors.dateOfBirth" />
            </div>
            <div class="mb-4">
                <label for="dropdown-identification-type-button" class="block mb-2 text-sm font-medium">Identification
                    Type</label>
                <SelectForm id="dropdown-identification-type-button" class="w-full"
                    placeholder="Select your identification type" dropdownIcon
                    inputClass="flex items-center p-2 text-sm font-medium rounded-lg bg-transparent h-10 w-full border border-solid border-gray-500"
                    listContainerClass="rounded-lg shadow absolute z-10 w-full"
                    listClass="p-2 text-sm bg-[var(--background-normal)]" :disabled="disabledForm"
                    itemClass="px-1 flex flex-shrink flex-wrap text-center overflow-hidden justify-start mb-2"
                    :listItem="identificationTypeList" v-model:selected-value="identificationTypeSelected">
                </SelectForm>
                <ErrorMessage :message="errors.identificationType" v-if="errors.identificationType" />
            </div>
            <div class="mb-4">
                <InputForm type="number" v-model="identificationNumber" :disabled="disabledForm"
                    id="identification-number-text" inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10"
                    labelClass="block mb-2 text-sm font-medium" placeholder="Your identification number"
                    label="Identification Number" />
                <ErrorMessage :message="errors.identificationNumber" v-if="errors.identificationNumber" />
            </div>
            <div class="mb-4">
                <DatepickerForm id="issue-date" label="Issue Date" right v-model="issueDate"
                    labelClass="block mb-2 text-sm font-medium" :disabled="disabledForm"
                    inputClass="bg-transparent block w-full rounded-lg p-2.5 pr-10 h-full" placeholder="DD-MM-YYYY"
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
                <ErrorMessage :message="errors.issueDate" v-if="errors.issueDate" />
            </div>
            <div class="mb-4">
                <DatepickerForm id="expiry-date" label="Expiry Date" right v-model="expiryDate"
                    labelClass="block mb-2 text-sm font-medium" :disabled="disabledForm"
                    inputClass="bg-transparent block w-full rounded-lg p-2.5 pr-10 h-full" placeholder="DD-MM-YYYY"
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
                <ErrorMessage :message="errors.expiryDate" v-if="errors.expiryDate" />
            </div>
            <div class="mb-4">
                <InputForm type="text" v-model="occupation" :disabled="disabledForm" id="occupation-text"
                    inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium"
                    placeholder="Your occupation" label="Occupation" />
                <ErrorMessage :message="errors.occupation" v-if="errors.occupation" />
            </div>
            <div class="mb-4">
                <label for="dropdown-employment-status-button" class="block mb-2 text-sm font-medium">Employment
                    Status</label>
                <SelectForm id="dropdown-employment-status-button" class="w-full"
                    placeholder="Select your employment status" dropdownIcon
                    inputClass="flex items-center p-2 text-sm font-medium rounded-lg bg-transparent h-10 w-full border border-solid border-gray-500"
                    listContainerClass="rounded-lg shadow absolute z-10 w-full"
                    listClass="p-2 text-sm bg-[var(--background-normal)]" :disabled="disabledForm"
                    itemClass="px-1 flex flex-shrink flex-wrap text-center overflow-hidden justify-start mb-2"
                    :listItem="employmentStatusList" v-model:selected-value="employmentStatusSelected">
                </SelectForm>
                <ErrorMessage :message="errors.employmentStatus" v-if="errors.employmentStatus" />
            </div>
            <div class="mb-4">
                <label for="dropdown-employment-industry-button" class="block mb-2 text-sm font-medium">Employment
                    Industry</label>
                <SelectForm id="dropdown-employment-industry-button" class="w-full"
                    placeholder="Select your employment industry" dropdownIcon
                    inputClass="flex items-center p-2 text-sm font-medium rounded-lg bg-transparent h-10 w-full border border-solid border-gray-500"
                    listContainerClass="rounded-lg shadow absolute z-10 w-full"
                    listClass="p-2 text-sm bg-[var(--background-normal)]" :disabled="disabledForm"
                    itemClass="px-1 flex flex-shrink flex-wrap text-center overflow-hidden justify-start mb-2"
                    :listItem="employmentIndustryList" v-model:selected-value="employmentIndustrySelected">
                </SelectForm>
                <ErrorMessage :message="errors.employmentIndustry" v-if="errors.employmentIndustry" />
            </div>
            <div class="mb-4">
                <label for="dropdown-employment-position-button" class="block mb-2 text-sm font-medium">Employment
                    Position</label>
                <SelectForm id="dropdown-employment-position-button" class="w-full"
                    placeholder="Select your employment position" dropdownIcon
                    inputClass="flex items-center p-2 text-sm font-medium rounded-lg bg-transparent h-10 w-full border border-solid border-gray-500"
                    listContainerClass="rounded-lg shadow absolute z-10 w-full"
                    listClass="p-2 text-sm bg-[var(--background-normal)]" :disabled="disabledForm"
                    itemClass="px-1 flex flex-shrink flex-wrap text-center overflow-hidden justify-start mb-2"
                    :listItem="employmentPositionList" v-model:selected-value="employmentPositionSelected">
                </SelectForm>
                <ErrorMessage :message="errors.employmentPosition" v-if="errors.employmentPosition" />
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

<script>
import InputForm from '../common/InputForm.vue'
import DatepickerForm from '../common/DatepickerForm.vue'
import SelectForm from '../common/SelectForm.vue'
import AppApi from "../../apiConfig"
import { ref, onMounted } from 'vue'
import { useRouter } from "vue-router"
import ErrorMessage from "../common/ErrorMessage.vue"
import { hasKeyObject } from "./../../utils/commonUtils"

export default {
    components: {
        InputForm, DatepickerForm, SelectForm, ErrorMessage
    },
    setup() {
        var isPhoneFocus = ref(false);                              //variable to get input focus event

        var disabledForm = ref(false);                               //disable form

        const router = useRouter();

        const title = ref('');

        const errors = ref({})
        const loading = ref(false)
        const countryCodeList = ref([
            {
                img: 'https://staging.tagrise.com/static/media/singapore_flag.975f4084ca809a9eca2106dfab7caceb.svg',
                label: '+65',
                value: '+65',
            },
            {
                img: 'https://staging.tagrise.com/static/media/hongkong_flag.743d25c48b17eac6d1a966ed462bf7d0.svg',
                label: '+852',
                value: '+852',
            },
            {
                img: 'https://staging.tagrise.com/static/media/korea_flag.2b4d800b17bf5c624a185da1c2966854.svg',
                label: '+82',
            },
            {
                img: 'https://staging.tagrise.com/static/media/taiwan_flag.ac6bcad0ad5f7095204dc7fe96735c88.svg',
                label: '+886',
                value: '+886',
            },
            {
                img: 'https://staging.tagrise.com/static/media/malaysia_flag.35a24d1284212d5967522b353e15d7e3.svg',
                label: '+60',
                value: '+60',
            },
            {
                img: 'https://staging.tagrise.com/static/media/indo_flag.f624e2c8444a7794b35736c30dd82dda.svg',
                label: '+62',
                value: '+62',
            },
            {
                img: 'https://staging.tagrise.com/static/media/philipine_flag.e215bab6b405d1afeff4e809f488ec41.svg',
                label: '+63',
                value: '+63',
            },
        ]);

        const countryCodeSelected = ref({
            img: 'https://staging.tagrise.com/static/media/singapore_flag.975f4084ca809a9eca2106dfab7caceb.svg',
            label: '+65',
            value: '+65',
        });

        const phoneNumber = ref(null)
        const genderList = ref([
            {
                label: 'Male',
                value: 'male',
            },
            {
                label: 'Female',
                value: 'female',
            },
        ]);

        const genderSelected = ref(null)

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

        const countryBirthSelected = ref(null);
        const nationalitySelected = ref(null);
        const residentialAddress = ref(null);
        const residentialState = ref(null);
        const residentialCity = ref(null);
        const postalCode = ref(null);
        const dateOfBirth = ref(null);

        const identificationTypeList = ref([
            {
                label: 'National Registration Identity Card',
                value: 'nric',
            },
            {
                label: 'Passport',
                value: 'passport',
            },
        ]);

        const identificationTypeSelected = ref(null);

        const identificationNumber = ref(null);
        const issueDate = ref(null);
        const expiryDate = ref(null);
        const occupation = ref(null);

        const employmentStatusList = ref([
            {
                label: 'Employed',
                value: 'Employed',
            },
            {
                label: 'Unemployed',
                value: 'Unemployed',
            },
            {
                label: 'Student',
                value: 'Student',
            },
            {
                label: 'Self-Employed',
                value: 'Self-Employed',
            },
        ]);

        const employmentStatusSelected = ref(null);

        const employmentIndustryList = ref([
            {
                label: 'Advertising/Media/Communications',
                value: 'Advertising/Media/Communications',
            },
            {
                label: 'Administration/Clerical/Facilities Svc',
                value: 'Administration/Clerical/Facilities Svc',
            },
            {
                label: 'Agriculture/Manufacturing',
                value: 'Agriculture/Manufacturing',
            },
            {
                label: 'Banking/Finance/Insurance',
                value: 'Banking/Finance/Insurance',
            },
            {
                label: 'Construction',
                value: 'Construction',
            },
            {
                label: 'Government/Civil Servant',
                value: 'Government/Civil Servant',
            },
            {
                label: 'Personal Care Services',
                value: 'Personal Care Services',
            },
            {
                label: 'Domestic Helper/Child Care',
                value: 'Domestic Helper/Child Care',
            },
            {
                label: 'Education/Teaching',
                value: 'Education/Teaching',
            },
            {
                label: 'Hotel/Restaurant',
                value: 'Hotel/Restaurant',
            },
            {
                label: 'Information Technology',
                value: 'Information Technology',
            },
            {
                label: 'Transportation/Shipping',
                value: 'Transportation/Shipping',
            },
            {
                label: 'Military/Law Enforcement',
                value: 'Military/Law Enforcement',
            },
            {
                label: 'Automotive Repairs and Sales',
                value: 'Automotive Repairs and Sales',
            },
            {
                label: 'Medical & Health',
                value: 'Medical & Health',
            },
            {
                label: 'Real Estate/Property',
                value: 'Real Estate/Property',
            },
            {
                label: 'Retail/Sales',
                value: 'Retail/Sales',
            },
            {
                label: 'Tourism/Airlines/Maritime',
                value: 'Tourism/Airlines/Maritime',
            },
            {
                label: 'Arts/Entertainment and Recreation',
                value: 'Arts/Entertainment and Recreation',
            },
            {
                label: 'Mining/Oil and Gas/Energy',
                value: 'Mining/Oil and Gas/Energy',
            },
            {
                label: 'Water/Utilities/Waste Management',
                value: 'Water/Utilities/Waste Management',
            },
            {
                label: 'Science',
                value: 'Science',
            },
        ]);

        const employmentIndustrySelected = ref(null);

        const employmentPositionList = ref([
            {
                label: 'Entry Level',
                value: 'Entry Level',
            },
            {
                label: 'Mid-Level/Supervisory/Management',
                value: 'Mid-Level/Supervisory/Management',
            },
            {
                label: 'Senior Level/Executive',
                value: 'Senior Level/Executive',
            },
            {
                label: 'Owner',
                value: 'Owner',
            },
        ]);

        const employmentPositionSelected = ref(null);

        const signupData = ref(null);

        const ekycData = ref(null);

        onMounted(async () => {
            const data = await AppApi("get", "/business-auth/business-role");
            signupData.value = router.currentRoute.value.query;
            const resEKYC = await AppApi("get", "/wallex-business/kyc-raw-data");
            ekycData.value = resEKYC.data;
        })

        var submitForm = async () => {

            const data = {
                title: title.value,
                firstName: signupData.value.firstName,
                lastName: signupData.value.lastName,
                mobileCountryCode: countryCodeSelected.value.value,
                mobileNumber: phoneNumber.value,
                gender: genderSelected.value?.value || '',
                countryOfBirth: countryBirthSelected.value?.value || '',
                nationality: nationalitySelected.value?.value || '',
                residentialAddress: residentialAddress.value,
                state: residentialState.value,
                city: residentialCity.value,
                countryCode: signupData.value.countryCode,
                postalCode: postalCode.value,
                dateOfBirth: dateOfBirth.value,
                identificationType: identificationTypeSelected.value?.value || '',
                identificationNumber: identificationNumber?.value,
                issueDate: issueDate.value,
                expiryDate: expiryDate.value,
                occupation: occupation.value,
                employmentStatus: employmentStatusSelected.value?.value || '',
                employmentIndustry: employmentIndustrySelected.value?.value || '',
                employmentPosition: employmentPositionSelected.value?.value || '',
                kycRawData: ekycData.value,
            }
            console.log("🚀 thinhvq ~ file: InformationAdminForm.vue:506 ~ submitForm ~ data1", data)

            errors.value = {}

            if (!data.title) {
                errors.value = { ...errors.value, title: "Title is required" }
            }
            if (!data.mobileCountryCode) {
                errors.value = { ...errors.value, mobileCountryCode: "Mobile Country code is required" }
            }
            if (!data.mobileNumber) {
                errors.value = { ...errors.value, mobileNumber: "Mobile number is required" }
            }
            if (!data.gender) {
                errors.value = { ...errors.value, gender: "Gender is required" }
            }
            if (!data.countryOfBirth) {
                errors.value = { ...errors.value, countryOfBirth: "Country of birth is required" }
            }
            if (!data.nationality) {
                errors.value = { ...errors.value, nationality: "Nationality is required" }
            }
            if (!data.residentialAddress) {
                errors.value = { ...errors.value, residentialAddress: "Residential Address is required" }
            }
            if (!data.state) {
                errors.value = { ...errors.value, state: "State Address is required" }
            }
            if (!data.city) {
                errors.value = { ...errors.value, city: "City is required" }
            }
            if (!data.countryCode) {
                errors.value = { ...errors.value, countryCode: "Country code is required" }
            }
            if (!data.postalCode) {
                errors.value = { ...errors.value, postalCode: "Posta code is required" }
            }
            if (!data.dateOfBirth) {
                errors.value = { ...errors.value, dateOfBirth: "Date of birth is required" }
            }
            if (!data.identificationType) {
                errors.value = { ...errors.value, identificationType: "Identification Type is required" }
            }
            if (!data.identificationNumber) {
                errors.value = { ...errors.value, identificationNumber: "Identification Number is required" }
            }
            if (!data.issueDate) {
                errors.value = { ...errors.value, issueDate: "IssueDate is required" }
            }
            if (!data.expiryDate) {
                errors.value = { ...errors.value, expiryDate: "Expiry Date is required" }
            }
            if (!data.occupation) {
                errors.value = { ...errors.value, occupation: "Occupation Date is required" }
            }
            if (!data.employmentStatus) {
                errors.value = { ...errors.value, employmentStatus: "Employment Status Date is required" }
            }
            if (!data.employmentIndustry) {
                errors.value = { ...errors.value, employmentIndustry: "Employment Industry Date is required" }
            }
            if (!data.employmentPosition) {
                errors.value = { ...errors.value, employmentPosition: "Employment Position Date is required" }
            }
            if (!data.kycRawData) {
                errors.value = { ...errors.value, kycRawData: "KycRawData Date is required" }
            }
            console.log("🚀 thinhvq ~ file: InformationAdminForm.vue:585 ~ submitForm ~ errors", errors.value)

            if (hasKeyObject(errors.value)) {
                return false;
            }

            const res = await AppApi("patch", "/wallex-business/update-info", data)
            if (res.data) {
                router.push("/verification/verify-company");
            }
        }

        return {
            errors, isPhoneFocus, disabledForm, title, countryCodeList, countryCodeSelected, phoneNumber, genderList, genderSelected, countryList, countryBirthSelected,
            nationalitySelected, residentialAddress, residentialState, residentialCity, postalCode, dateOfBirth, identificationTypeList, identificationTypeSelected,
            identificationNumber, issueDate, expiryDate, occupation, employmentStatusList, employmentStatusSelected,
            employmentIndustryList, employmentIndustrySelected, employmentPositionList, employmentPositionSelected, submitForm
        }
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

.contact-number:focus {
    --tw-ring-color: transparent !important;
}
</style>
