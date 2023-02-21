<template>
    <div v-if="isShow">
        <div class="fixed bottom-10 left-[50%] translate-x-[-50%] z-50 rounded-lg bg-white shadow-2xl inline-block min-w-[300px] animate-fadeIn "
            :class="{ 'animate-fadeOut': !show }">
            <div class="flex items-center">
                <div class="w-4 rounded-l-lg h-[45px]" :class="bg"></div>
                <div class="flex items-center w-[90%] justify-between gap-4 p-4 text-gray-500 bg-white ">
                    <div class="ml-3 text-sm font-normal">{{ message }}</div>
                    <button type="button" @click="close"
                        class="-mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        data-dismiss-target="#toast-success" aria-label="Close">
                        <span class="sr-only">Close</span>
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onUnmounted } from "vue"
export default {
    name: "Toast",
    props: {
        isShow: {
            required: true,
        }
    },
    emits: ['setShowToast'],
    setup(_, { emit }) {
        const message = ref("")
        const status = ref("success")
        const show = ref(false)
        const id = ref(null)
        const bg = ref("bg-[#4aaa4d]")

        const setValue = (value) => {
            show.value = true
            message.value = value.message
            message.status = value.status
            if (value.status == "error") {
                bg.value = "bg-[#f74d55]"
            }
            if (value.status == "warning") {
                bg.value = "bg-[#efbd16]"
            }

            if (show) {
                id.value = setTimeout(() => {
                    show.value = false
                    emit('setShowToast')
                }, 5000)
            }

        }

        const close = () => {
            show.value = false
            emit('setShowToast')
        }

        onUnmounted(() => {
            console.log("🚀 thinhvq ~ file: Toast.vue:62 ~ onUnmounted ~ id.value:", id.value)

            clearTimeout(id.value)
        })


        return { message, status, setValue, show, close, id, bg }
    }
}
</script>