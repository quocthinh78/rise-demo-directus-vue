<template>
    <div class="flex items-center justify-between gap-4 max-w-2xl p-4 font-normal mb-6 mt-2 rounded-lg"
        :class="`${disabled ? 'cursor-default bg-blue-50 text-[#c9d1d9]' : 'text-white cursor-pointer hover:text-red bg-gray-500 shadow'}`"
        @click="redirectPage">
        <div class="flex items-center justify-between gap-4">
            <div class=" w-12 h-12 flex justify-center items-center rounded-lg bg-white">
                <!-- <img :src="require(`@/assets/icon/upload_business_blue.svg`)" alt="image" /> -->
                <slot name="icon"></slot>
            </div>
            <div class="max-w-md">
                <h5 class="mb-1 text-[16px]">{{ title }}</h5>
                <p class="text-[11px]">{{ description }}</p>
            </div>
        </div>
        <div class="rounded-lg" :style="{ backgroundColor: statusObjectRef.bg }" v-if="statusObjectRef">
            <div class="text-[10px] px-2 py-1 leading-[14px]" :style="{ color: statusObjectRef.color }">{{
                statusObjectRef.value
            }}</div>
        </div>
    </div>
</template>

<style scoped></style>

<script >
import { useRouter } from "vue-router";
import { ref, onMounted, watch } from "vue";
export default {
    name: "BusinessCard",
    props: {
        title: {
            type: String,
            required: true,
        },
        loading: {
            required: true,
            type: Boolean,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: Number,
        },
        link: {
            type: String,
            default: '#',
        },
        disabled: {
            type: Boolean,
        }
    },
    setup(props) {
        const router = useRouter()
        const redirectPage = (e) => {
            if (props.disabled) e.preventDefault()
            else router.push(props.link)
        }
        const statusRef = ref([
            { id: 1, value: "DRAFT", color: "#1E74FD", bg: "#E9F1FF" },
            { id: 2, value: "Verification in progress", color: "#1E74FD", bg: "#E9F1FF" },
            { id: 3, value: "Rejected", color: "#E1E1E1", bg: "#EC4433" },
            { id: 4, value: "Verified", color: "#E1E1E1", bg: "#34C759" },
        ]);
        const statusObjectRef = ref(null)
        onMounted(() => {
            statusObjectRef.value = statusRef.value.find((item) => item.id === props.status)
        })
        watch(props, () => {
            statusObjectRef.value = statusRef.value.find((item) => item.id === props.status)

        })
        return { statusRef, statusObjectRef, redirectPage };
    },

}
</script>