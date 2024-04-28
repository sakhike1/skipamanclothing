<template>
  <div
    class="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-40 before:z-10">
    <video autoplay muted loop class="video-bg">
      <source :src="videoSrc" type="video/mp4" />
    </video>
    <div
      class="min-h-[400px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center text-white px-6 py-10">
      <div class="max-w-3xl mx-auto text-center">
        <h3 class="md:text-5xl text-4xl font-extrabold">Subscribe to Our Newsletter</h3>
        <p class="text-sm mt-6">
          Subscribe to our newsletter and stay up to date with the latest news, updates,
          and exclusive offers. Get valuable insights. Join our community today!
        </p>
        <div
          class="max-w-lg mx-auto bg-gray-100 flex px-2 py-1 rounded-full text-left mt-12 border focus-within:border-gray-700">
          <input type="email" placeholder="Enter your email" v-model="email" required
            class="w-full outline-none bg-transparent text-sm text-[#333] px-4 py-3" />
          <button @click="showAlert" type="button"
            class="bg-[#333] hover:bg-[#222] transition-all text-white font-semibold text-sm rounded-full px-8 py-3">
            Submit
          </button>
        </div>
      </div>
    </div>
    <PopeUpVideo />
  </div>
</template>

<script>
import PopeUpVideo from "@/components/PopeUpVideo.vue";
import Swal from "sweetalert2";
export default {
  components: {
    PopeUpVideo,
  },
  data() {
    return {
      videoSrc: require("@/assets/PopeUpVideo.mp4"),
      showPopup: true, // Initially show the popup
      email: "", // Store the email input value
    };
  },
  methods: {
    showAlert() {
      // Check if email is empty
      if (!this.email) {
        // Show error alert if email is empty
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter your email!",
        });
        return; // Exit function if email is empty
      }

      // Check if email is valid (contains @ symbol)
      if (!this.isValidEmail(this.email)) {
        // Show error alert if email is invalid
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter a valid email address!",
        });
        return; // Exit function if email is invalid
      }

      // Show success alert if email is entered and valid
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "You have subscribe successful",
      }).then(() => {
        // Refresh the page after showing the success alert
        window.location.reload();
      });
      return;
    },
    isValidEmail(email) {
      // Regular expression to check if email contains @ symbol
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    },
  },
};
</script>

<style scoped>
.signup-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner {
  background-image: linear-gradient(to right,
      rgb(249, 168, 212),
      rgb(216, 180, 254),
      rgb(129, 140, 248));
  padding: 20px;
  border-radius: 10px;
}

.custom-popup {
  background-image: linear-gradient(to right,
      rgb(249, 168, 212),
      rgb(216, 180, 254),
      rgb(129, 140, 248));
  color: white;
  border-radius: 10px;
}

.custom-title {
  font-size: 24px;
  font-weight: bold;
}

.custom-container {
  background-color: rgba(0, 0, 0, 0.5);
  /* Example background color */
  border-radius: 10px;
  /* Example border radius */
  padding: 20px;
  /* Example padding */
}
</style>
