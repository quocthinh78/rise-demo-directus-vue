
import { ref } from "vue"
import { useRouter } from "vue-router"
import AppApi from "../apiConfig"
export const fetchStatusEkycStart = async (to, from, next) => {
    const router = useRouter()
    try {
        const data = await AppApi("get", "/business-auth/kyc/jumio", localStorage.getItem("rise_token"))
        const { user_kyc_state } = data.data.data
        if (user_kyc_state === "PASSED") {
            next("/verification/ekyc/eKyc-success")
        } else if (user_kyc_state === "PROCESSING") {
            next("/verification/ekyc/eKyc-process")
        } else if (user_kyc_state === "REJECTED" || user_kyc_state === "WARNING") {
            next("/verification/ekyc/eKyc-fail")
        }
        else next()
    } catch (error) {
        next()
    }
}

export const fetchStatusEkycFail = async (to, from, next) => {
    const router = useRouter()
    const data = await AppApi("get", "/business-auth/kyc/jumio", localStorage.getItem("rise_token"))
    const { user_kyc_state } = data.data.data
    if (user_kyc_state === "REJECTED" || user_kyc_state === "WARNING") {
        next()
    } else if (user_kyc_state === "PASSED") {
        next("/verification/ekyc/eKyc-success")
    } else if (user_kyc_state === "PROCESSING") {
        next("/verification/ekyc/eKyc-process")
    }
}

export const fetchStatusEkycSuccess = async (to, from, next) => {
    const router = useRouter()
    const data = await AppApi("get", "/business-auth/kyc/jumio", localStorage.getItem("rise_token"))
    const { user_kyc_state } = data.data.data
    if (user_kyc_state === "PASSED") {
        next()
    } else if (user_kyc_state === "PROCESSING") {
        next("/verification/ekyc/eKyc-process")
    } else if (user_kyc_state === "REJECTED" || user_kyc_state === "WARNING") {
        next("/verification/ekyc/eKyc-fail")
    }
}

export const fetchStatusEkycProcess = async (to, from, next) => {
    const router = useRouter()
    const data = await AppApi("get", "/business-auth/kyc/jumio", localStorage.getItem("rise_token"))
    const { user_kyc_state } = data.data.data
    if (user_kyc_state === "PASSED") {
        next("/verification/ekyc/eKyc-success")
    } else if (user_kyc_state === "PROCESSING") {
        next()
    } else if (user_kyc_state === "REJECTED" || user_kyc_state === "WARNING") {
        next("/verification/ekyc/eKyc-fail")
    }
}
