<template>
    <label :for="id" :class="labelClass">{{ label }}</label>
    <input :type="type" class="disabled:bg-[var(--background-subdued)] disabled:text-[var(--foreground-subdued)] rounded-md" :id="id" :class="inputClass" :placeholder="placeholder" :disabled="disabled" :multiple="multiple" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
</template>

<style scoped>

</style>

<script>

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
        },
        multiple: {
            type: Boolean,
            default: false,
        }
    },
    emits: ['update:modelValue']

}
</script>