<template>
    <div class="text-red-600 text-xs mt-2"> {{ message }}</div>
</template>

<script>
import { ref } from "vue"
export default {
    name: "Error Message",
    props: {
        message: {
            type: String,
        }
    },
}
</script>