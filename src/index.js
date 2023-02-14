import InfomationComponent from './pages/information/index.vue';
import InfomationlistComponent from './components/information/InformationList.vue';
import InformationForm from './components/information/InformationForm.vue';
import MemberComponent from './pages/member/index.vue';
import EkycComponent from './pages/ekyc/index.vue';
import EkycFailComponent from './pages/ekyc-fail/index.vue';
import EkycProcessComponent from './pages/ekyc-process/index.vue';
import EkycSuccessComponent from './pages/ekyc-success/index.vue';

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
					component: InfomationlistComponent,
				},
				{
					path: '/members',
					component: MemberComponent,
				},
				{
					path: '/eKyc',
					component: EkycComponent,
				},
				{
					path: '/eKyc-fail',
					component: EkycFailComponent,
				},
				{
					path: '/eKyc-process',
					component: EkycProcessComponent,
				},
				{
					path: '/eKyc-success',
					component: EkycSuccessComponent,
				},
				{
					path: 'verify',
					component: InformationForm,
				}
			]
		},
	],
};
