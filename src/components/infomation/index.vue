
<template>
    <private-view>
        <template #headline>
            <div class="text-lg font-bold">Verify your business</div>
        </template>
        <template #title-outer:append>
            <div class="text-xs">Verify your business to unlock all the features of Tagrise</div>
        </template>


        <div class="docs-content selectable">
            <router-view></router-view>
        </div>

        <template #navigation>
            <settings-navigation />
        </template>

    </private-view>
</template>

<script setup>
import SettingsNavigation from "../navigation.vue";

</script>
