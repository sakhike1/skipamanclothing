<template>
    <div v-if="showScrollButton" ref="scrollTopButton" class="fixed bottom-[190px] right-10">
        <button @click="scrollToTop" class="hover:scale-125  text-white font-bold py-2 px-4  ">
            <img class="h-10 w-10" :src="require('@/assets/up-arrow.png')" />
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