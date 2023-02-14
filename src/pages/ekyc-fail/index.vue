<template>
    <Layout>

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
                    <path
                        d="M1.01141 39.051L18.3293 9.60888C21.1321 4.84379 28.0486 4.78606 30.9318 9.50368L48.9251 38.9458C51.8897 43.7967 48.3713 50 42.6554 50H7.34421C1.68329 50 -1.84285 43.9035 1.01141 39.051Z"
                        fill="#FFE70C" />
                    <path
                        d="M27.7728 22L27.3296 34H23.4433L23.0001 22H27.7728ZM25.3865 41.7273C24.7274 41.7273 24.162 41.4972 23.6904 41.0369C23.2245 40.571 22.9944 40.0057 23.0001 39.3409C22.9944 38.6932 23.2245 38.1392 23.6904 37.679C24.162 37.2188 24.7274 36.9886 25.3865 36.9886C26.0115 36.9886 26.5626 37.2188 27.0399 37.679C27.5228 38.1392 27.7671 38.6932 27.7728 39.3409C27.7671 39.7841 27.6507 40.1875 27.4234 40.5511C27.2018 40.9091 26.912 41.196 26.5541 41.4119C26.1961 41.6222 25.8069 41.7273 25.3865 41.7273Z"
                        fill="black" />
                </svg>

                <div class="font-bold text-2xl mt-8">
                    Verified Failed
                </div>
                <div class="text-[#fff] bg-[#1e74fd] rounded-md hover:bg-[#0564fd] py-2 block mt-8 cursor-pointer"
                    @click="ridereactUpdateLink">Try again
                </div>
                <div class="bg-[#fff] text-[#1e74fd] py-2 block mt-4 cursor-pointer">Skip</div>
            </div>
        </div>
    </Layout>





</template>

<script>
import AppApi from "./../../apiConfig.js"
import axios from "axios"
import Layout from "./../../components/common/layout.vue"

export default {
    name: "page/ekyc-fail",
    components: {
        Layout,
    },
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
