<template>
  <section class="relative overflow-hidden">
    <div
      class="relative sm:flex items-center justify-center h-[600px] w-full text-center"
    >
      <video autoplay muted loop class="video-bg">
        <source :src="videoSrc" type="video/mp4" />
      </video>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        class="flex justify-center items-center p-8"
      >
        <div
          class="z-10 max-w-3xl p-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 md:p-16 opacity-80"
        >
          <div class="text-center">
            <h2
              class="mb-6 text-3xl font-medium sm:text-lg leading-10 tracking-tight text-gray-50 md:text-3xl"
            >
              Looks like you do not have <br />
              any item in your cart
            </h2>
            <p
              class="mb-6 tracking-wide text-gray-300 sm:text-sm sm:max-w-xl sm:mx-auto md:mt-5"
            >
              Subscribe to our email list to receive notifications on new arrivals
            </p>
            <div class="flex flex-wrap justify-center items-center">
              <form class="flex">
                <input
                  v-model.trim="email"
                  class="w-full md:w-60 py-3 px-4 outline-none mb-2 mr-2 text-sm border-none text-gray-900 rounded dark:placeholder-gray-300 dark:text-gray-300 dark:bg-gray-600"
                  type="text"
                  placeholder="Type your e-mail"
                  autofocus="false"
                />
                <button
                  @click="subscribe"
                  class="px-6 py-3 mb-2 mr-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <VideoThree />
  </section>
</template>

<script>
import VideoThree from "@/components/VideoThree.vue";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
export default {
  components: {
    VideoThree,
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

<style></style>
