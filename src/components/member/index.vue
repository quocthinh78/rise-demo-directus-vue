<template>
    <private-view title="My Custom Module">
        <div>
            Member
        </div>
         <template #navigation>
            <settings-navigation />
        </template>
    </private-view>
</template>

<script setup>
import SettingsNavigation from "../navigation.vue";

</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
