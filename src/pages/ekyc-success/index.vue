<template>

    <div
        class="relative bg-[var(--background-input)] border-b border-t-0 border-x-0 border-solid p-4 text-center text-lg">
        <div class="absolute top-4 left-8">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
            </svg>
        </div>
        <div>Identity Verification</div>
    </div>
    <div class="flex justify-center w-full h-full">

        <div class="text-center max-w-[800px] mt-12  px-6">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="#FFE70C" />
                <path d="M15 23L23.5 31L37 18" stroke="black" stroke-width="4" />
            </svg>



            <div class="font-bold text-2xl mt-8">
                Verified Successfully
            </div>
            <div class="mt-4">Congratulations! You can now accept payments via your invoices.</div>
            <div class="text-[#fff] bg-[#1e74fd] rounded-md hover:bg-[#0564fd] py-2 block mt-8 cursor-pointer"
                @click="ridereactUpdateLink">Create Invoice
            </div>
            <div class="bg-[#fff] text-[#1e74fd] py-2 block mt-4 cursor-pointer">Home</div>
        </div>
    </div>




</template>

<script>
import AppApi from "./../../apiConfig.js"
import axios from "axios"
export default {
    name: "page/ekyc-fail",
    setup() {
        const ridereactUpdateLink = async () => {
            const data = await AppApi("post", "/jumio/update", localStorage.getItem("rise_token"))
            if (data.data.data) {
                window.location.href = data.data.data.web.href;
                return false;
            }
        }
        return {
            ridereactUpdateLink
        }
    }
}
</script>
