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
                <path d="M15 23L23.5 31L37 18" stroke="black" stroke-width="4" />
                <path
                    d="M25 47.7272C37.5519 47.7272 47.7273 37.5519 47.7273 25C47.7273 12.448 37.5519 2.27271 25 2.27271"
                    stroke="#FFE70C" stroke-width="4.16667" stroke-linecap="round" />
                <path
                    d="M25 47.7272C12.4481 47.7272 2.27273 37.5519 2.27273 25C2.27273 12.448 12.4481 2.27271 25 2.27271"
                    stroke="#FFE70C" stroke-width="2.08333" stroke-linecap="round" stroke-dasharray="2.08 8.33" />
            </svg>


            <div class="font-bold text-2xl mt-8">
                Thanks, we’re verifying your identity
            </div>
            <div class="mt-4">The verification progress may takes up to 48 hours.</div>
            <div class="mt-4">We'll send you a notification via email as soon as this is done</div>
            <div class="text-[#fff] bg-[#1e74fd] rounded-md hover:bg-[#0564fd] py-2 block mt-8 cursor-pointer"
                @click="ridereactUpdateLink">Ok
            </div>
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
