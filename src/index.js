


import InfomationComponent from "./pages/information/index.vue";
import InfomationlistComponent from "./components/information/InformationList.vue";
import InformationCompanyForm from "./components/information/InformationCompanyForm.vue";
import InformationAdminForm from "./components/information/InformationAdminForm.vue";
import SignUpForm from "./components/information/SignUpForm.vue";
import MemberComponent from "./pages/member/index.vue";
import EkycComponent from "./pages/ekyc/index.vue";
import EkycStartComponent from "./pages/ekyc-start/index.vue";
import EkycFailComponent from "./pages/ekyc-fail/index.vue";
import EkycProcessComponent from "./pages/ekyc-process/index.vue";
import EkycSuccessComponent from "./pages/ekyc-success/index.vue";

import * as Guard from "./utils/GuardUtils";
import "./index.css";

export default {
  id: "verification",
  name: "Verification",
  icon: "box",
  routes: [
    {
      path: "",
      component: InfomationComponent,
      children: [
        {
          path: "",
          name: "homepage",
          component: InfomationlistComponent,
        },
        {
          path: "sign-up",
          name: "SignUp",
          component: SignUpForm,
        },
        {
          path: "verify-admin",
          name: "VerifyAdmin",
          component: InformationAdminForm,
          beforeEnter: [Guard.getQueryVerifyAdmin],
        },
        {
          path: "verify-company",
          name: "VerifyCompany",
          component: InformationCompanyForm,
        },
        {
          path: "ekyc",
          component: EkycComponent,
          children: [
            {
              path: "eKyc-start",
              component: EkycStartComponent,
              beforeEnter: [Guard.fetchStatusEkycStart],
            },
            {
              path: "eKyc-fail",
              component: EkycFailComponent,
              beforeEnter: [Guard.fetchStatusEkycFail],
            },
            {
              path: "eKyc-process",
              component: EkycProcessComponent,
              beforeEnter: [Guard.fetchStatusEkycProcess],
            },
            {
              path: "eKyc-success",
              component: EkycSuccessComponent,
              beforeEnter: [Guard.fetchStatusEkycSuccess],
            },
          ],
        },
      ],
    },
    {
      path: "members",
      component: MemberComponent,
    },
  ],
};
