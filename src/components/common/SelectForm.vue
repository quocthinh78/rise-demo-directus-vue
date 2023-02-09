<template>
    <button :id="id" :class="inputClass" class="disabled:bg-[var(--background-subdued)] disabled:cursor-default" type="button" @click="openDropdownList" :disabled="disabled">
        <slot name="button" v-bind:selectedValue="selectedValue"></slot>
    </button>
    <!-- list container -->
    <div :class="`${listContainerClass} ${isDropdownOpen ? 'block' : 'hidden'}`" class="py-0 px-1 rounded">
        <!-- list -->
        <ul :class="listClass" :aria-labelledby="id">
            <!-- item -->
            <li v-for="item in listItem" :key="item.value" :class="itemClass" class="cursor-default" @click="itemClicked(item)">
                <slot name="item" v-bind:item="item">
                    <span class="text-sm leading-5" v-html="item.label"></span>
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
        selectedValue: {
            type: Object,
            required: true,
            default: {}
        },
        disabled: {
            type: Boolean,
            default: false,
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
            this.isDropdownOpen = false;
        }
    }
}
</script>
<style scoped>
.menu-content {
    max-height: 30vh;
    border: none;
    box-shadow: 0 0 6px 0 rgb(var(--card-shadow-color),.2),0 0 12px 2px rgb(var(--card-shadow-color),.05);
    transition-timing-function: var(--transition-out);
    transition-duration: var(--fast);
    transition-property: opacity,transform;
    contain: content;
}
</style>