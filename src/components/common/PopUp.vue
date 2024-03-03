<template>
    <div v-if="showScrollButton" ref="scrollTopButton" class="fixed bottom-5 right-5">
        <button @click="scrollToTop"
            class="bg-gradient-to-r from-slate-500 to-yellow-100 hover:bg-blue-600 text-white font-bold py-2 px-4  shadow-md">
            Scroll to top
        </button>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            showScrollButton: false
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },

    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },

    methods: {
        handleScroll() {
            if (window.scrollY > 0) {
                this.showScrollButton = true;
            } else {
                this.showScrollButton = false;
            }
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }
});
</script>

<style scoped>
/* Add any custom styles here */
</style>