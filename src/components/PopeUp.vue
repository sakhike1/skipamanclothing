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
          class="max-w-lg mx-auto bg-gray-100 flex px-2 py-1 rounded-full text-left mt-12 border focus-within:border-gray-100">
          <input type="email" placeholder="Enter your email" v-model="email" required
            class="w-full outline-none bg-transparent text-sm text-[#fafafa] px-4 py-3" />
          <button @click="showAlert" type="button" ref="submitButton" :class="buttonClasses">
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
      showPopup: true,
      email: "",
      isButtonClicked: false,
      gradients: [
        "from-pink-500 via-red-500 to-yellow-500",
        "from-blue-500 via-green-500 to-teal-500",
        "from-yellow-500 via-green-500 to-blue-500",
      ],
      currentIndex: 0,
    };
  },
  methods: {
    showAlert() {
      if (!this.email) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter your email!",
          width: 700,
          margin: 100,
          background: "#f2f8ff",
          customClass: {
            container: "custom-container",
            popup: "custom-popup",
            title: "custom-title",
            content: "custom-content",
            confirmButton: "custom-button",
          },
        });
        return;
      }

      if (!this.isValidEmail(this.email)) {
        Swal.fire({
          icon: "error",
          position: "top-end",
          title: "Oops...",
          text: "Please enter a valid email address!",
        });
        return;
      }

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
        title: "You have subscribe successfully",
      }).then(() => {
        window.location.reload();
      });
      return;
    },
    isValidEmail(email) {
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    },
    changeBackgroundColor() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.gradients.length;
      }, 2000);
    },
  },
  computed: {
    buttonClasses() {
      return [
        "bg-gradient-to-r",
        this.gradients[this.currentIndex],
        "hover:bg-[#222]",
        "transition-all",
        "text-gray-100",
        "font-semibold",
        "text-sm",
        "rounded-full",
        "px-8",
        "py-3",
      ];
    },
  },
  mounted() {
    this.changeBackgroundColor();
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

.custom-container {
  width: 100%;
  background: rgb(233, 8, 120);
}

.custom-title {
  font-size: 24px;
  font-weight: bold;
}

.custom-container {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 20px;
}

.custom-content {
  color: #646060;
}

.custom-button {
  background-color: rgba(226, 27, 27, 0.5);
  border-radius: 10px;
  padding: 20px;
}

.custom-popup {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.custom-title {
  font-size: 24px;
  font-weight: bold;
  color: #948b8b;
}

.custom-content {
  color: #333;
}

.custom-button {
  width: 150px;
  background: red;
}
</style>
