<template>
    <div class="cursor-pointer" @click="cardClicked">
        <div
            class="flex items-center justify-between gap-4 max-w-2xl p-4 font-normal mb-6 mt-2 bg-[#6C7C94]  rounded-lg shadow  text-white">
            <div class="flex items-center justify-between gap-4">
                <div class=" w-12 h-12 flex justify-center items-center rounded-lg bg-white">
                    <!-- <img :src="require(`@/assets/icon/upload_business_blue.svg`)" alt="image" /> -->
                    <slot name="icon"></slot>
                </div>
                <div class="max-w-md">
                    <h5 class="mb-1 text-[16px] hover:text-red cursor-pointer" @click="riderectPage">{{ title }}</h5>
                    <p class="text-[11px]">{{ description }}</p>
                </div>
            </div>
            <div class="rounded-lg" :style="{ backgroundColor : statusObjectRef.bg}" v-if="statusObjectRef">
                <div class="text-[10px] px-2 py-1 leading-[14px]" :style="{ color : statusObjectRef.color}" >{{ statusObjectRef.value }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>

<script >
import { ref ,onMounted } from "vue";
export default {
    name: "BusinessCard",
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: Number,
            // required: true,
        },
        link: {
            type: String,
            default: '#',
        },
    },
    methods : {
        riderectPage () {
            this.$router.push('/eKyc')
        }
    },
    setup(props) {
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
        return { statusRef ,statusObjectRef };
    },
    methods:{
        cardClicked() {
            window.location.href = this.link;
        }
    }
    
}
</script>