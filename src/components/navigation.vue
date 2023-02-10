<template>
	<v-list nav>
		<v-list-item v-for="item in navItems" :key="item.to" :to="item.to">
			<v-list-item-content>
				<v-text-overflow :text="item.name" />
			</v-list-item-content>
		</v-list-item>

	</v-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	setup() {

		const navItems = [
			{
				icon: 'badge',
				name: "Business",
				to: `/verification`,
			},
			{
				icon: 'list_alt',
				name: "Business members",
				to: `/members`,
			},
		];


		return { navItems };
	},
});
</script>

<style scoped>
.version .v-icon {
	color: var(--foreground-subdued);
	transition: color var(--fast) var(--transition);
}

.version :deep(.v-text-overflow) {
	color: var(--foreground-subdued);
	transition: color var(--fast) var(--transition);
}

.version:hover .v-icon {
	color: var(--foreground-normal-alt);
}

.version:hover :deep(.v-text-overflow) {
	color: var(--foreground-normal-alt);
}
</style>
