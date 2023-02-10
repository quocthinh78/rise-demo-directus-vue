<template>
    <label :for="id" :class="labelClass">{{ label }}</label>
    <input type="file" ref="files" :multiple="multiple" class="disabled:bg-[var(--background-subdued)] disabled:text-[var(--foreground-subdued)] rounded-lg" :id="id" :class="inputClass" :placeholder="placeholder" :disabled="disabled" @change="handleFiles"/>
</template>

<style scoped>

</style>

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

        },
        multiple: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    data() {
        return {
            fileInput: [],
        }
    },
    methods: {
        handleFiles() {
            if(this.$refs.files.files.length > 0) {
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
<style scoped>
input::file-selector-button {
    background-color: var(--fc-button-bg-color) !important;
}
</style>