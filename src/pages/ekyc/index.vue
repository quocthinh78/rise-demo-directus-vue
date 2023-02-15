<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import { ref } from "vue"
import AppApi from "./../../apiConfig.js"

export default {
    name: "ekyc",
    setup() {
        const loading = ref(true)
        // const router = useRouter()
        // onBeforeMount(async () => {
        //     try {
        //         const data = await AppApi("get", "/business-auth/kyc/jumio", localStorage.getItem("rise_token"))
        //         console.log("🚀 thinhvq ~ file: layout.vue:27 ~ onBeforeMount ~ data", data)
        //         const { user_kyc_state } = data.data.data
        //         if (user_kyc_state === "PASSED") {
        //             router.push("/ekyc/eKyc-success")
        //         } else if (user_kyc_state === "PROCESSING") {
        //             router.push("/ekyc/eKyc-process")
        //         } else if (user_kyc_state === "REJECTED" || user_kyc_state === "WARNING") {
        //             router.push("/ekyc/eKyc-fail")
        //         }
        //         else {
        //             router.push("/eKyc")
        //         }
        //         loading.value = false
        //     } catch (error) {
        //         console.log("🚀 thinhvq ~ file: layout.vue:44 ~ onBeforeMount ~ error", error)
        //         router.push("/ekyc/eKyc-start")
        //         loading.value = false
        //     }
        // })
    }
}
</script>