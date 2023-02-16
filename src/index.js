import InfomationComponent from './pages/information/index.vue';
import InfomationlistComponent from './components/information/InformationList.vue';
import InformationForm from './components/information/InformationForm.vue';
import SignUpForm from './components/information/SignUpForm.vue';
import MemberComponent from './pages/member/index.vue';
import EkycComponent from './pages/ekyc/index.vue';
import EkycStartComponent from './pages/ekyc-start/index.vue';
import EkycFailComponent from './pages/ekyc-fail/index.vue';
import EkycProcessComponent from './pages/ekyc-process/index.vue';
import EkycSuccessComponent from './pages/ekyc-success/index.vue';

import { fetchStatusEkycStart, fetchStatusEkycFail, fetchStatusEkycSuccess, fetchStatusEkycProcess } from './utils/GuardEkyc.js'
import './index.css'

export default {
	id: 'verification',
	name: 'Verification',
	icon: 'box',
	routes: [
		{
			path: '',
			component: InfomationComponent,

			children: [
				{
					path: '',
					name: 'homepage',
					component: InfomationlistComponent,
				},
				{
					path: 'members',
					component: MemberComponent,
				},
				{
					path: 'sign-up',
					component: SignUpForm,
				},
				{
					path: 'verify',
					component: InformationForm,
				},
				{
					path: "ekyc",
					component: EkycComponent,
					children: [
						{
							path: 'eKyc-start',
							component: EkycStartComponent,
							beforeEnter: [fetchStatusEkycStart],
						},
						{
							path: 'eKyc-fail',
							component: EkycFailComponent,
							beforeEnter: [fetchStatusEkycFail],
						},
						{
							path: 'eKyc-process',
							component: EkycProcessComponent,
							beforeEnter: [fetchStatusEkycProcess],
						},
						{
							path: 'eKyc-success',
							component: EkycSuccessComponent,
							beforeEnter: [fetchStatusEkycSuccess],
						},

					]
				}
			]
		},
	],
};
