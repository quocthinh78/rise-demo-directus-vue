<template>
    <div class="pt-8 px-8 container">
        <!-- Sign Up Virtual Account -->
        <div class="mb-4">
            <div class="text-lg font-bold mb-4">Sign Up Virtual Account</div>
            <div class="mb-4">
                <InputForm type="text" v-model="firstName" :disabled="disabledForm" id="first-name" inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium" placeholder="First name" label="First name" />
            </div>
            <div class="mb-4">
                <InputForm type="text" v-model="lastName" :disabled="disabledForm" id="last-name" inputClass="bg-transparent text-sm rounded-lg max-w-sm h-10" labelClass="block mb-2 text-sm font-medium" placeholder="Last name" label="Last name" />
            </div>
            <div class="mb-4 box-border relative">
                <label for="country-code" class="block mb-2 text-sm font-medium">Contact number</label>
                <!-- dropdown -->
                <SelectForm id="country-code"
                    inputClass="flex items-center px-2 py-2 text-sm font-medium rounded-lg bg-[var(--background-input)] w-full h-10 border border-solid"
                    listContainerClass="rounded-lg shadow rounded-lg shadow absolute left-0 z-99 w-full"
                    listClass="py-2 px-0 text-sm bg-black" :disabled="disabledForm"
                    itemClass="px-1 py-2 overflow-hidden justify-start" dropdownIcon
                    :listItem="countryCodeList" v-model:selected-value="countrySelected">
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
import SelectForm from '../common/SelectForm.vue'
import { ref } from 'vue'


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

var isPhoneFocus = ref(false);                              //variable to get input focus event

var disabledForm = ref(false);                               //disable form

const firstName = ref('');
const lastName = ref('asdfasfd');

var submitForm = () => {
    console.log("submit");
    console.log("firstName", firstName.value);
    console.log("lastName", lastName.value);
    console.log("countrySelected", countrySelected.value);
    window.location.href = "/admin/verification/verify";
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
