<template>

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
            <div class="bg-[#fff] text-[#1e74fd] py-2 block mt-4 cursor-pointer" @click="backHome">Home</div>
        </div>
    </div>




</template>

<script>
import { useRouter } from "vue-router"
import AppApi from "./../../apiConfig.js"
export default {
    name: "page/ekyc-fail",
    setup() {
        const router = useRouter()
        const backHome = () => {
            router.push({ name: "homepage" })
        }
        return {
            backHome
        }
    }
}
</script>
