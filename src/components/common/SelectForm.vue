<template>
    <button :id="id" :class="inputClass" type="button" @click="openDropdownList" class="justify-between" :disabled="disabled">
        <div class="m-0 p-0 flex items-center">
            <slot name="button" v-bind:selectedValue="selectedValue"></slot>
        </div>
        <div class="m-0 p-0 flex items-center" v-if="dropdownIcon">
            <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
        </div>

    </button>
    <!-- list container -->
    <div :class="`${listContainerClass} ${isDropdownOpen ? 'block' : 'hidden'}`">
        <!-- list -->
        <ul :class="listClass" :aria-labelledby="id">
            <!-- item -->
            <li v-for="item in listItem" :key="item.value" :class="itemClass" class="cursor-pointer flex items-center" @click="itemClicked(item)" >
                <slot name="item" v-bind:item="item">
                    <span class="text-sm leading-5">{{ item.label }}</span>
                </slot>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>

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
            required: true,
            default: null
        }
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
        }
    }
}
</script>