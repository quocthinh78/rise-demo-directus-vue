<template>
    <label :for="id" :class="labelClass">{{ label }}</label>
    <input type="file" ref="files" :multiple="multiple" :accept="typeAccepted"
        class="disabled:bg-[var(--background-subdued)] disabled:text-[var(--foreground-subdued)]
                    file:rounded-lg file:bg-[var(--fc-button-bg-color)] disabled:file:bg-[var(--v-button-background-color-disabled)] disabled:file:cursor-default" :id="id" :class="inputClass"
        :placeholder="placeholder" disabled @change="handleFiles" />
</template>

<style scoped></style>

<script>
export default {
    name: "UploadFileForm",
    props: {
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
            type: Object,
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        typeAccepted: {
            type: String,
            default: 'image/*,.pdf,.csv',
        }
    },
    emits: ['update:modelValue'],
    data() {
        return {
            fileInput: [],
        }
    },
    methods: {
        handleFiles() {
            if (this.$refs.files.files.length > 0) {
                this.fileInput = [];
                for (let i = 0; i < this.$refs.files.files.length; i++) {
                    this.fileInput.push(this.$refs.files.files[i])
                }
                this.$emit('update:modelValue', this.fileInput)
            }
        }
    }
}
</script>
