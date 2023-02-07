import InfomationComponent from './components/infomation/index.vue';
import InfomationlistComponent from './components/infomation/InformationList.vue';
import InformationForm from './components/infomation/InformationForm.vue';
import MemberComponent from './components/member/index.vue';
import './index.css'

export default {
	id: 'business-infomation',
	name: 'Business Information',
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
			path: '/business/members',
			component: MemberComponent,
		},
	],
};
