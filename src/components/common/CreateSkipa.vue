<template>
  <section class="relative overflow-hidden">
    <div class="relative sm:flex items-center justify-center h-[800px] w-full text-center">
      <video autoplay muted loop class="video-bg">
        <source :src="videoSrc" type="video/mp4" />
      </video>
      <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500"
        class="content bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
        <div class="flex justify-between font-bold text-sm"></div>
        <h2 class="text-3xl font-semibold mt-4 md:mt-10">Send us your design request</h2>
        <p class="my-3 text-justify text-xs text-gray-700 leading-relaxed">
          If you have anything that you would like to have printed in your Tshirt You can
          send us an email
        </p>
        <router-link to="/ContactPage"
          class="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">
          Send request
        </router-link>
      </div>
    </div>
    <CreateOne />
  </section>
</template>

<script>
import CreateOne from "@/components/CreateOne.vue";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
export default {
  components: {
    CreateOne,
  },
  data() {
    return {
      videoSrc: require("@/assets/Noitem.mp4"),
      email: "", // Added email data property
      formIsValid: true,
    };
  },
  methods: {
    subscribe() {
      if (this.isValidEmail(this.email)) {
        // Your subscription logic goes here
        // For demonstration purposes, we'll just alert the email
        alert(`Thank you for subscribing with ${this.email}`);
        window.location.reload();
      } else {
        alert("Please enter a valid email address.");
      }
    },
    isValidEmail(email) {
      // Regular expression for email validation
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    },
  },
};
</script>

<style scope></style>
