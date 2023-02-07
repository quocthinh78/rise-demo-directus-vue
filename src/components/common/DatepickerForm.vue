<template>
    <label :for="id" :class="labelClass">{{ label }}</label>
    <div class="relative max-w-sm">
        <div class="absolute inset-y-0 flex items-center pointer-events-none" :class = "iconSide">
            <slot name="icon" ></slot>
        </div>
        <input :id="id" datepicker type="text" :class="inputClass" class="disabled:bg-gray-500" :placeholder="placeholder" :disabled="disabled" :value="modelValue" @changeDate="updateInput"/>
    </div>
</template>

<style scoped>

</style>

<script>
import { ref } from "vue";
import Datepicker from 'flowbite-datepicker/Datepicker';

export default {
    name: "DatepickerForm",
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
        iconClass: {
            type: String,
            default: '',
        },
        left: {
            type: Boolean,
            default: false,
        },
        right: {
            type: Boolean,
            default: false,
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
    emits: ['update:modelValue'],
    data() {
        return {
            datepicker: null
        }
    },
    computed: {
        iconSide() {
            if(this.left) {
                return 'left-0 pl-3'
            } 
            if(this.right) {
                return 'right-0 pr-3'
            }
            return ''
        }
    },
    mounted() {
        this.datepicker = new Datepicker(document.getElementById(this.id), {
            autohide: true,
            weekStart: 1,
            format: 'dd/mm/yyyy'
        });
    },
    methods: {
        updateInput(evt) {
            this.$emit('update:modelValue', evt.target.value)
        }
    }
}
</script>