<template>
<<<<<<< HEAD
  <section data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
    <!-- Container -->
    <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <!-- Component -->
      <div class="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2">
        <!-- Heading Div -->
        <div class="max-w-[720px]">
          <h2 class="mb-4 text-3xl font-semibold md:text-5xl">
            Send us your design
            <span
              class="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center px-4 text-white"
              >request
            </span>
          </h2>
          <p class="mb-6 max-w-[480px] text-[#636262] md:mb-10 lg:mb-12">
            you might have a specific design in mind send us your idea so we can implement
            it
          </p>
          <router-link
            to="/ContactPage"
            class="inline-block hover:scale-125 rounded-xl bg-black px-8 py-4 text-center font-semibold text-white hover:text-blue-700 [box-shadow:rgb(19,_83,_254)_6px_6px]"
          >
            Get Started
          </router-link>
        </div>
        <!-- Image Div -->
        <div
          id="floating-container"
          class="relative left-4 h-full max-h-[560px] w-[85%] overflow-visible md:left-0 md:w-[95%] lg:w-full"
          loading="lazy"
        >
          <img
            src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d1cb654acd795a72b12_magicpattern-ixxjruC7Gg4-unsplash.jpg"
            alt=""
            loading="lazy"
            class="relative mx-auto block h-full w-full max-w-[800px] -rotate-[3.5deg] rounded-2xl object-cover"
          />
          <div
            class="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"
          ></div>
        </div>
=======
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
>>>>>>> 07d60d306e16f2f212591d9cbde1b6a411cd0d5d
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
