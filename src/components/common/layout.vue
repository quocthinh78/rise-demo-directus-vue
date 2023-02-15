<!-- <template>
    <div v-if="loading"
        class="relative bg-[var(--background-input)] border-b border-t-0 border-x-0 border-solid p-4 text-center text-lg">
        <div class="absolute top-4 left-8">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
            </svg>
        </div>
        <div>Identity Verification</div>
        <slot></slot>
    </div>
</template>

<script>
import { ref, onBeforeMount } from "vue"
import { useRouter } from "vue-router"
import AppApi from "./../../apiConfig.js"

export default {
    name: "Layout",
    setup() {
        const loading = ref(true)
        const router = useRouter()
        onBeforeMount(async () => {
            try {
                const data = await AppApi("get", "/business-auth/kyc/jumio", localStorage.getItem("rise_token"))
                console.log("🚀 thinhvq ~ file: layout.vue:27 ~ onBeforeMount ~ data", data)
                const { user_kyc_state } = data.data.data
                if (user_kyc_state === "PASSED") {
                    router.push("/ekyc/eKyc-success")
                } else if (user_kyc_state === "PROCESSING") {
                    router.push("/ekyc/eKyc-process")
                } else if (user_kyc_state === "REJECTED" || user_kyc_state === "WARNING") {
                    router.push("/ekyc/eKyc-fail")
                }
                else {
                    router.push("/ekyc/eKyc")
                }
                loading.value = false
            } catch (error) {
                console.log("🚀 thinhvq ~ file: layout.vue:44 ~ onBeforeMount ~ error", error)
                router.push("/ekyc/eKyc-start")
                loading.value = false
            }
        })
    }
}
</script> -->