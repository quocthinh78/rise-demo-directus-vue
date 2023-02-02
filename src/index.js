import InfomationComponent from './information.vue';
import MemberComponent from './member.vue';
import HomeComponent from './home.vue';

export default {
	id: 'flowbite-test',
	name: 'Flowbite Test',
	icon: 'warning',
	routes: [
		{
			path: '',
			component: HomeComponent,
		},
		{
			path: '/business/infomation',
			component: InfomationComponent,
		},
		{
			path: '/business/members',
			component: MemberComponent,
		},
	],
};
