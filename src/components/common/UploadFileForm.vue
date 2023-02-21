<template>
    <label :for="id" :class="labelClass">{{ label }}</label>
    <input type="file" ref="files" :multiple="multiple" :accept="acceptType"
        class="disabled:bg-[var(--background-subdued)] disabled:text-[var(--foreground-subdued)]
                    file:rounded-lg file:bg-[var(--fc-button-bg-color)] disabled:file:bg-[var(--v-button-background-color-disabled)] disabled:file:cursor-default" :id="id" :class="inputClass"
        :placeholder="placeholder" :disabled="disabled" @change="handleFiles" />
</template>

<style scoped></style>

<script>
import { ref, computed } from 'vue';

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
            default: '',
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        var fileInput = ref([]);
        const files = ref(null);
        var handleFiles = () => {
            if (files.value.files.length > 0) {
                fileInput.value = [];
                for (let i = 0; i < files.value.files.length; i++) {
                    fileInput.value.push(files.value.files[i])
                }
                emit('update:modelValue', fileInput.value)
            }
        }

        const acceptType = computed(() => {
            return '.' + props.typeAccepted.split('/')[1];
        })

        return {
            fileInput, handleFiles, files, acceptType
        }
    },
}
</script>
