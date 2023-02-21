<template>
    <label :for="id" :class="labelClass">{{ label }}</label>
    <input type="text" class="disabled:bg-[var(--background-subdued)] disabled:text-[var(--foreground-subdued)] rounded-md"
        :id="id" :class="inputClass" :placeholder="placeholder" :disabled="disabled" :multiple="multiple"
        :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @keypress="onlyNumber" />
</template>

<style scoped></style>

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
    emits: ['update:modelValue'],
    setup(props) {
        const onlyNumber = (evt) => {
            if (props.type === 'number') {
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if (charCode > 31 && (charCode < 48 || charCode > 57)) evt.preventDefault();
            }
        }
        return {
            onlyNumber
        }
    }
}
</script>