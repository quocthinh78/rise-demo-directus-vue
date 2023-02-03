<template>
    <div class="pt-6 pl-10 container">
        <!-- Business Information -->
        <div class="mb-4">
            <div class="text-lg font-bold mb-4">Business Information</div>
            <div class="mb-4">
                <label for="company-name-text" class="block mb-2 text-sm font-medium ">Company name</label>
                <input type="text" id="company-name-text" class="bg-transparent border border-gray-300 text-sm rounded-lg max-w-sm" placeholder="Name of company"/>
            </div>
            <div class="mb-4">
                <label for="business-registration-text" class="block mb-2 text-sm font-medium">Business Registration Number</label>
                <input type="text" id="business-registration-text" class="border border-gray-300 text-sm rounded-lg max-w-sm bg-transparent" placeholder="Business Registration Number"/>
            </div>
            <div class="mb-4">
                <label for="incorporation-date" class="block mb-2 text-sm font-medium">Incorporation date</label>
                <div class="relative max-w-sm">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 bg-transparent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input
                        id="incorporation-date"
                        ref="incorporation-date"
                        datepicker
                        type="text"
                        class="block w-full rounded-lg border border-gray-300 p-2.5 pl-10 sm:text-sm bg-transparent"
                        placeholder="DD/MM/YYYY" />
    
                </div>
            </div>
            <div class="mb-4">
                <label for="business-website" class="block mb-2 text-sm font-medium">Business website</label>
                <input type="text" id="business-registration-text" class="border border-gray-300 text-sm rounded-lg max-w-sm bg-transparent" placeholder="https://"/>
            </div>
        </div>

        <!-- Business Address -->
        <div class="mb-4">
            <div class="text-lg font-bold mb-4">Business Address</div>
            <div class="mb-4">
                <label for="postcode-text" class="block mb-2 text-sm font-medium ">Postcode</label>
                <input type="text" id="postcode-text" class="bg-transparent border border-gray-300 text-sm rounded-lg max-w-sm" placeholder="123456"/>
            </div>
            <div class="mb-4">
                <label for="address-line-1-text" class="block mb-2 text-sm font-medium">Address line 1</label>
                <input type="text" id="address-line-1-text" class="border border-gray-300 text-sm rounded-lg max-w-sm bg-transparent" placeholder="Business Registration Number"/>
            </div>
            <div class="mb-4">
                <label for="address-line-2" class="block mb-2 text-sm font-medium">Address line 2</label>
                <div class="relative max-w-sm">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 bg-transparent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input id="address-line-2" ref="address-line-2" datepicker type="text" class="block w-full rounded-lg border border-gray-300 p-2.5 pl-10 sm:text-sm bg-transparent" placeholder="DD/MM/YYYY" />
                </div>
            </div>
        </div>

        <!-- Business contact person -->
        <div class="mb-4">
            <div class="text-lg font-bold mb-4">Business contact person</div>
            <div class="mb-4 box-border">
                <label for="contact-number" class="block mb-2 text-sm font-medium">Contact number</label>
                <!-- dropdown -->
                <div class="select-phone-contact border border-gray-300">
                    <select class="appearance-none px-3 py-1.5 text-sm bg-transparent bg-clip-padding bg-no-repeat transition ease-in-out m-0
                    z-10 divide-y divide-gray-100 rounded-lg shadow w-44">
                        <template v-for="(item, index) in countryCodeList" :key="index">
                            <option v-if="index === 0" :value="item.value" selected>
                                <img alt="Flag" :src="item.img">
                                <span>{{ item.value }}</span>
                            </option>
                            <option v-if="index !== 0" :value="item.value">
                                <img alt="Flag" :src="item.img">
                                <span>{{ item.value }}</span>
                            </option>
                        </template>
                    </select>
                    <input type="number" id="contact-number" class="border-none text-sm rounded-lg bg-transparent"/>
                </div>
            </div>
            <div class="mb-4">
                <label for="email" class="block mb-2 text-sm font-medium">Email</label>
                <input type="email" id="email" class="bg-transparent border border-gray-300 text-sm rounded-lg" placeholder="email" required>
            </div>
        </div>
    </div>
</template>

<script setup>
import Datepicker from 'flowbite-datepicker/Datepicker';
import { onMounted, ref } from 'vue'

onMounted(() => {
    const incorporationDatePicker = new Datepicker(document.getElementById('incorporation-date'));
    const addressLine2 = new Datepicker(document.getElementById('address-line-2'));
})

const countryCodeList = ref([
    {
        img: 'https://staging.tagrise.com/static/media/singapore_flag.975f4084ca809a9eca2106dfab7caceb.svg',
        value: +65
    },
    {
        img: 'https://staging.tagrise.com/static/media/hongkong_flag.743d25c48b17eac6d1a966ed462bf7d0.svg',
        value: +852
    },
    {
        img: 'https://staging.tagrise.com/static/media/korea_flag.2b4d800b17bf5c624a185da1c2966854.svg',
        value: +82
    },
    {
        img: 'https://staging.tagrise.com/static/media/taiwan_flag.ac6bcad0ad5f7095204dc7fe96735c88.svg',
        value: +886
    },
    {
        img: 'https://staging.tagrise.com/static/media/malaysia_flag.35a24d1284212d5967522b353e15d7e3.svg',
        value: +60
    },
    {
        img: 'https://staging.tagrise.com/static/media/indo_flag.f624e2c8444a7794b35736c30dd82dda.svg',
        value: +62
    },
    {
        img: 'https://staging.tagrise.com/static/media/philipine_flag.e215bab6b405d1afeff4e809f488ec41.svg',
        value: +63
    },
]);

</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.container {
    width: 343px !important;
}

input {
    width: 100%;
}

.select-phone-contact {

}
</style>
