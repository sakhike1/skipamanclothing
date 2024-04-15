<template>
  <div>
    <section class="px-4">
      <div v-if="showOverlay" class="overlay"></div>
      <div v-if="showPopup" class="promo-popup">
        <div
          class="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 p-6 sm:p-10 rounded-2xl w-[100%] text-white flex items-center justify-between max-w-2xl mx-auto mt-20"
        >
          <div class="flex flex-col gap-6">
            <div class="">
              <span class="text-gray-800">Big big sale check it out</span>
              <br />
              <span class="text-gray-200 text-4xl font-semibold"
                >20% off every Product</span
              >
            </div>

            <button
              @click="closePopup"
              target="_blank"
              rel="noreferrer"
              class="text-white bg-black hover:bg-gray-50 hover:text-black px-4 py-2 rounded-full w-fit ease duration-300 flex gap-1 items-center group"
            >
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
      showOverlay: false, // Initially do not show the overlay
      email: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.showPopup = true;
      this.showOverlay = true; // Show the overlay after 10 seconds
      document.body.style.overflow = "hidden"; // Prevent scrolling when popup is active
    }, 10000); // 10 seconds in milliseconds
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
      document.body.style.overflow = ""; // Re-enable scrolling when popup is closed
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
}

.promo-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.overlay.active {
  pointer-events: none; /* Disable pointer events on overlay when active */
}
</style>
