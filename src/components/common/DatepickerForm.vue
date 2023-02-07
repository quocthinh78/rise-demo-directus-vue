<template>
    <label :for="id" :class="labelClass">{{ label }}</label>
    <div class="relative max-w-sm">
        <div class="absolute inset-y-0 flex items-center pointer-events-none" :class="iconSide">
            <slot name="icon"></slot>
        </div>
        <input :id="id" :ref="id" datepicker-autohide type="text" :class="inputClass" :placeholder="placeholder"
            :disabled="disabled" v-model="datePickerValue" />
    </div>
    <button @click="changeValue">hi</button>
</template>

<style scoped>

</style>

<script>
import { ref, onMounted, onUpdated ,watchEffect } from "vue";
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
    },
    setup(props) {
        const datePickerValue = ref(null)
        const datePicker = ref(null)
        onMounted(() => {
            datePicker.value = new Datepicker(document.getElementById(props.id));
        })
        onUpdated((a,b) => {
        console.log("🚀 thinhvq ~ file: DatepickerForm.vue:75 ~ onUpdated ~ a", a)

            console.log("🚀 thinhvq ~ file: DatepickerForm.vue:70 ~ onUpdated ~ b", b)
            console.log("🚀 thinhvq ~ file: DatepickerForm.vue:65 ~ setup ~ datePickerValue", datePickerValue)
            console.log("🚀 thinhvq ~ file: DatepickerForm.vue:67 ~ setup ~ datePicker", datePicker)


        })

        const changeValue = () => {
            console.log("🚀 thinhvq ~ file: DatepickerForm.vue:65 ~ setup ~ datePickerValue", datePickerValue)
            console.log("🚀 thinhvq ~ file: DatepickerForm.vue:67 ~ setup ~ datePicker", datePicker)
        }

        watchEffect(datePickerValue, () => {
            console.log(datePickerValue)
        })
        return {
            datePicker, datePickerValue, changeValue
        }
    }



}
</script>