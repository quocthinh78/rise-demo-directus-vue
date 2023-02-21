import { toRefs, ref, reactive } from 'vue';
import AppApi from "../apiConfig.js"

const dataStatusEkyc = {
  PASSED: 4,
  PROCESSING: 2,
  REJECTED: 3,
  WARNING: 3,
}

export function UseFetchEkycStatus(url, options) {
  const { method, data: optionData = null } = options
  const state = reactive({
    error: null,
    loading: false,
    status: null,
    statusString: "",
  });

  const fetchData = async () => {
    state.loading = true;
    try {
      const res = await AppApi(method, url, optionData);
      const { user_kyc_state } = res.data.data
      if (!user_kyc_state) {
        state.status = 1
      } else {
        state.status = dataStatusEkyc[user_kyc_state]
        state.statusString = user_kyc_state
      }
    } catch (e) {
      state.error = e;
      state.status = 1
    } finally {
      state.loading = false;
    }
  };

  fetchData();

  return { ...toRefs(state) };
}