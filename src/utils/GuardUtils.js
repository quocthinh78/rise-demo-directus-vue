import { ref } from "vue";
import { UseFetchEkycStatus } from "../hocs/UseFetchEkycStatus";
import AppApi from "../apiConfig";
import { hasKeyObject } from "./../utils/commonUtils";
export const fetchStatusEkycStart = async (to, from, next) => {
    try {
        const data = await AppApi(
            "get",
            "/business-auth/kyc/jumio"
        );
        const { user_kyc_state } = data.data.data;
        if (user_kyc_state === "PASSED") {
            next("/verification/ekyc/eKyc-success");
        } else if (user_kyc_state === "PROCESSING") {
            next("/verification/ekyc/eKyc-process");
        } else if (user_kyc_state === "REJECTED" || user_kyc_state === "WARNING") {
            next("/verification/ekyc/eKyc-fail");
        } else next();
    } catch (error) {
        next();
    }
};

export const fetchStatusEkycFail = async (to, from, next) => {
    const data = await AppApi(
        "get",
        "/business-auth/kyc/jumio"
    );
    const { user_kyc_state } = data.data.data;
    if (user_kyc_state === "REJECTED" || user_kyc_state === "WARNING") {
        next();
    } else if (user_kyc_state === "PASSED") {
        next("/verification/ekyc/eKyc-success");
    } else if (user_kyc_state === "PROCESSING") {
        next("/verification/ekyc/eKyc-process");
    }
};

export const fetchStatusEkycSuccess = async (to, from, next) => {
    const data = await AppApi(
        "get",
        "/business-auth/kyc/jumio"
    );
    const { user_kyc_state } = data.data.data;
    if (user_kyc_state === "PASSED") {
        next();
    } else if (user_kyc_state === "PROCESSING") {
        next("/verification/ekyc/eKyc-process");
    } else if (user_kyc_state === "REJECTED" || user_kyc_state === "WARNING") {
        next("/verification/ekyc/eKyc-fail");
    }
};

export const fetchStatusEkycProcess = async (to, from, next) => {
    const data = await AppApi(
        "get",
        "/business-auth/kyc/jumio"
    );
    const { user_kyc_state } = data.data.data;
    if (user_kyc_state === "PASSED") {
        next("/verification/ekyc/eKyc-success");
    } else if (user_kyc_state === "PROCESSING") {
        next();
    } else if (user_kyc_state === "REJECTED" || user_kyc_state === "WARNING") {
        next("/verification/ekyc/eKyc-fail");
    }
};

export const getQueryVerifyAdmin = async (to, from, next) => {
    let path = "";
    if(to.href) {
        path = to.href.slice(to.href.indexOf('?') + 1).split('&');
    }else {
        path = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    }
    const querylist = []
    path.forEach(key => {
        const newKey = key.split('=')
        querylist.push(...newKey)
    })
    if (querylist[0] === "firstName" && querylist[2] === "lastName" && querylist[4] === "countryCode") {
        next()
    } else {
        next("/verification/sign-up");
    }
};
