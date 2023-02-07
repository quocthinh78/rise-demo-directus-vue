<template>
    <label :for="id" :class="labelClass">{{ label }}</label>
    <input :type="type" class="disabled:bg-gray-500" :id="id" :class="inputClass" :placeholder="placeholder" :disabled="disabled" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
</template>

<style scoped>

</style>

<script>
import { ref } from "vue";
export default {
    name: "InputForm",
    props: {
        type: {
            type: String,
            required: true,
            default: 'text',
        },
        id: {
            type: String,
            default: '',

        },
        label: {
            type: String,
            required: true,
            default: '',
        },
        placeholder: {
            type: String,
            required: true,
            default: '',
        },
        inputClass: {
            type: String,
            default: '',
        },
        labelClass: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        modelValue: {
            type: String || Number,
            default: null
        }
    },
    emits: ['update:modelValue']

}
</script>