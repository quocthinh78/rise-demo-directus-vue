<template v-if="loading">
    <div
        class="relative bg-[var(--background-input)] border-b border-t-0 border-x-0 border-solid p-4 text-center text-lg">
        <div class="absolute top-4 left-8 cursor-pointer" @click="backHome">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
            </svg>
        </div>
        <div>Identity Verification</div>
    </div>
    <router-view :loading="loading"></router-view>
</template>

<script>
import { ref } from "vue"
import { useRouter } from "vue-router"
// import AppApi from "./../../apiConfig.js"

export default {
    name: "ekyc",
    setup() {
        const loading = ref(false)
        const router = useRouter()

        const backHome = () => {
            router.push({ name: "homepage" })
        }
        return { backHome, loading }
    }
}
</script>