<template>
    <Modal>
        <div class="border-12 border-solid border-[#fff] border-t-12 border-t-[#3498db] rounded-[50%] w-20 h-20 animate-spin"></div>
    </Modal>
</template>
    


<script>
import Modal from "./Modal.vue"
export default {
    name: "Loading",
    components: { Modal },
    setup() {


        return {}
    }
}
</script>