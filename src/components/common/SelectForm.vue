<template>
    <div class="relative">
        <button :id="id" :class="inputClass" type="button" @click="openDropdownList" class="justify-between"
            :disabled="disabled">
            <template v-if="selectedValue === null && placeholder">
                <slot name="placeholder">
                    <span class="font-normal text-sm items-center text-gray-500">{{ placeholder }}</span>
                </slot>
            </template>
            <template v-else>
                <div class="m-0 p-0 flex items-center">
                    <slot name="button" v-bind:selectedValue="selectedValue">
                        <span class="font-normal text-sm items-center leading-5">{{ selectedValue.label }}</span>
                    </slot>
                </div>
            </template>
            <div class="m-0 p-0 flex items-center" v-if="dropdownIcon">
                <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
        </button>
        <!-- list container -->
        <div :class="`${listContainerClass} ${isDropdownOpen ? 'block' : 'hidden'}`">
            <!-- list -->
            <ul :class="listClass" :aria-labelledby="id">
                <!-- item -->
                <li v-for="item in listItem" :key="item.value" :class="itemClass" class="cursor-pointer flex items-center"
                    @click="itemClicked(item)">
                    <slot name="item" v-bind:item="item">
                        <span class="text-sm leading-5">{{ item.label }}</span>
                    </slot>
                </li>
            </ul>
        </div>
    </div>
</template>

<script >
import { ref } from "vue";
export default {
    name: "SelectForm",
    props: {
        id: {
            type: String,
            default: '',
        },
        inputClass: {
            type: String,
            default: '',
        },
        listContainerClass: {
            type: String,
            required: true,
            default: '',
        },
        listClass: {
            type: String,
            default: '',
        },
        itemClass: {
            type: String,
            default: '',
        },
        listItem: {
            type: Array,
            default: []
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        dropdownIcon: {
            type: Boolean,
            default: false,
        },
        selectedValue: {
            type: Object,
            default: {}
        },
        placeholder: {
            type: String,
            default: null,
        },
        method: {
            type: Function
        },
    },
    emits: ['update:selectedValue'],
    data() {
        return {
            isDropdownOpen: false,
        }
    },
    methods: {
        openDropdownList() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        itemClicked(item) {
            this.$emit('update:selectedValue', item)
            this.openDropdownList();
            // this.method(item, listItem);
        }
    }
}
</script>