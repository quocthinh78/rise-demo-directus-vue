<template>
    <div class="inline-flex items-center gap-1 px-4 py-2 rounded-[30px] leading-4" :style="{ color, backgroundColor: bg }">
        <slot name="icon"></slot>
        <span class="text-[12px] ">{{ title }}</span>
    </div>
</template>

<style scoped>

</style>

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