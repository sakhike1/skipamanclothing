<template>
  <div>
    <section class="px-4">
      <div v-if="showOverlay" class="overlay" :style="{ backgroundImage: currentGradient }"></div>
      <div v-if="showPopup" class="popup-container z-20">
        <div class="promo-popup">
          <div class="p-6 sm:p-10 rounded-2xl w-full max-w-2xl mx-auto mt-20 text-white flex items-center justify-between">
            <div class="flex flex-col gap-6">
              <div>
                <span class="text-gray-700">Big big sale check it out</span>
                <br />
                <span class="text-gray-100 text-4xl font-semibold">20% off every Product</span>
              </div>

              <button @click="closePopup" class="text-white bg-black hover:bg-gray-50 hover:text-black px-4 py-2 rounded-full w-fit ease duration-300 flex gap-1 items-center group">
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    popupBackground: {
      type: String,
      default: 'linear-gradient(to right, #FF0000, #FFFF00)' // Default background gradient
    }
  },
  data() {
    return {
      showPopup: false,
      showOverlay: false, // Initially do not show the overlay
      email: "",
      gradients: [
        "linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))",
        "linear-gradient(to right, rgb(192, 132, 252), rgb(250, 204, 21))",
        // Add more gradient color combinations as needed
      ],
      currentGradientIndex: 0,
      intervalId: null,
      intervalDuration: 7500,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showPopup = true;
      this.showOverlay = true; // Show the overlay after 10 seconds
    }, 10000); // 10 seconds in milliseconds
    this.intervalId = setInterval(this.changePopupBackground, 5000);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    subscribe() {
      // Implement your subscription logic here
      console.log("Subscribed with email:", this.email);
      // Close the popup after subscription
      this.closePopup();
    },
    closePopup() {
      this.showPopup = false;
      this.showOverlay = false; // Hide the overlay when the popup is closed
    },
    changePopupBackground() {
      this.currentGradientIndex = (this.currentGradientIndex + 1) % this.gradients.length;
    },
  },
  computed: {
    currentGradient() {
      return this.gradients[this.currentGradientIndex];
    },
  },
};
</script>

<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10; /* Ensure overlay is above other content */
}

.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Prevent scrolling when popup is active */
  z-index: 20; /* Ensure popup is above overlay */
}

.promo-popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
