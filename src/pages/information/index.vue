<template>
    <private-view>
        <template #headline>
            <div class="text-lg font-bold">Verify your business</div>
        </template>
        <template #title-outer:append>
            <div class="text-xs">Verify your business to unlock all the features of Tagrise</div>
        </template>
        <template #actions>
            <button type="button" class=" bg-[var(--v-button-background-color)] hover:bg-[var(--v-button-background-color-hover)] focus:ring-2 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2">
                <svg aria-hidden="true" class="w-5 h-5 bg-transparent" fill="var(--v-button-color)" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </button>
            <button type="button" class=" bg-[var(--v-button-background-color)] hover:bg-[var(--v-button-background-color-hover)] focus:ring-2 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2">
                <svg aria-hidden="true" class="w-5 h-5 bg-transparent" fill="var(--v-button-color)" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
            </button>
        </template>


        <div>
            <router-view></router-view>
        </div>

        <template #navigation>
            <settings-navigation />
        </template>

    </private-view>
</template>

<script setup>
import SettingsNavigation from "../../components/common/navigation.vue";

</script>
