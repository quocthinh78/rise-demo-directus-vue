<template>
    <div
        class="fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex justify-center items-center bg-modal">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Modal",
    setup() {


        return {}
    }
}
</script>