<template>
    <div class="flex items-center rounded-lg gap-2 bg-blue-50 mt-8">
        <div class="w-[4px] h-[48px] rounded-l-lg" :style="{ backgroundColor: bg }"></div>
        <slot></slot>
        <div class="ml-3 text-sm font-medium text-[#4f5464]">
            {{ title }}
        </div>

    </div>
</template>

<style scoped></style>

<script >
import { ref } from "vue";
export default {
    name: "Badge",
    props: {
        title: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        bg: {
            type: String,
            required: true,
        }
    },

}
</script>