import InfomationComponent from './components/infomation/index.vue';
import InfomationlistComponent from './components/infomation/InformationList.vue';
import InformationForm from './components/infomation/InformationForm.vue';
import MemberComponent from './components/member/index.vue';
import EkycComponent from './pages/ekyc/index.vue';
import EkycFailComponent from './pages/ekyc-fail/index.vue';
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
					component:InfomationlistComponent ,
				},
				{
					path: 'verify',
					component: InformationForm,
				}
			]
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
	],
};
