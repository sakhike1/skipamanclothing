<template>
  <div class="banner-navigation border-b-1 border-gray-200 p-8" :style="{ backgroundImage: currentGradient }">
    <div class="banner-content text-white text-xs flex items-center">
      <p class="text-xs">{{ salesText }}</p>

      <router-link to="/AllTshirt"
        class="shopnow animate__animated animate__bounce inline-flex sm:h-8 sm:text-xs sm:mr-2 items-center justify-center mt-8 h-10 px-8 m-5 font-medium tracking-wide text-white transition duration-200 bg-gradient-to-r from-indigo-300 to-purple-400 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none">
        {{ buttonText }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      salesText: "Summer Sale! Up to 50% Off" + " shop now while stock last",
      buttonText: "Shop Now",
      gradients: [
        "linear-gradient(to right, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
        "linear-gradient(90deg, rgba(0,0,0,0.9752275910364145) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)",
        // Add more gradient color combinations as needed
      ],
      currentGradientIndex: 0,
      intervalId: null,
      intervalDuration: 7500, // Interval duration in milliseconds (10 seconds)
      saleTexts: [
        "Summer Sale! Up to 50% Off free delivery on order more than R600",
        "Winter Clearance! Don't Miss Out! get outside looking fresh",
        "Spring Fever Sale! Grab Your Favorites! style is a gift",
        // Add more sales texts as needed
      ],
      buttonTexts: [
        "Shop Now",
        "Check it Out",
        "Sale now",
        // Add more button texts as needed
      ],
    };
  },
  computed: {
    currentGradient() {
      return this.gradients[this.currentGradientIndex];
    },
  },
  methods: {
    redirectToSalesPage() {
      // Add your logic to redirect to the sales page here
      // You can use Vue Router or a simple window.location.href
      // Example with Vue Router: this.$router.push("/sales");
    },
    changeBackgroundAndText() {
      this.currentGradientIndex = (this.currentGradientIndex + 1) % this.gradients.length;
      // Randomly select a sales text and button text
      const randomIndex = Math.floor(Math.random() * this.saleTexts.length);
      this.salesText = this.saleTexts[randomIndex];
      this.buttonText = this.buttonTexts[randomIndex];
    },
    startBackgroundChangeInterval() {
      this.intervalId = setInterval(this.changeBackgroundAndText, this.intervalDuration);
    },
    stopBackgroundChangeInterval() {
      clearInterval(this.intervalId);
    },
  },
  mounted() {
    this.startBackgroundChangeInterval();
  },
  beforeDestroy() {
    this.stopBackgroundChangeInterval();
  },
};
</script>

<style>
.banner-navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: rgb(0, 0, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  height: 61px;
  font-size: 10px;
  padding-left: 100px;
  /* Use padding-left to create space instead of margin-left */
  padding-right: 100px;
  /* Use padding-right to create space instead of margin-right */
}

.banner-content {
  display: flex;
  align-items: center;
}

p {
  margin: 0;
  font-size: 18px;
  margin-right: 20px;
}

@media screen and (min-width: 381px) and (max-width: 700px) {
  .shopnow {
    font-size: 1px;
    display: flex;
  }
}
</style>
