<template>
  <div class="dark:bg-gray-800 py-8">
    <div
      class="max-w-6xl mx-auto px-4 sm:px-6 from-slate-70 to-yellow-70 rounded-lg lg:px-8"
    >
      <div class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-8 p-10">
          <div
            class="h-[460px] rounded-lg bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 dark:bg-gray-700 mb-4 flex justify-center items-center"
          >
            <img
              class="object-contain max-h-[290px] w-96 hover:scale-125"
              :src="details.url"
              alt="Product Image"
            />
          </div>
          <div class="flex -mx-2 mb-4">
            <div class="w-full md:w-1/2 px-2 mb-2 md:mb-0">
              <button
                v-on:click="goToCart"
                class="w-full hover:scale-105 bg-gradient-to-b from-gray-900 to-gray-600 dark:bg-gray-600 text-white py-2 px-4 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                View cart items
              </button>
            </div>
            <div class="w-1/2 px-2">
              <button
                v-on:click="addToCart"
                class="w-full hover:scale-105 bg-gradient-to-b from-gray-900 to-gray-600 dark:bg-gray-700 text-white dark:text-white py-2 px-4 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Add items
              </button>
            </div>
            <div class="w-1/2 px-2">
              <button
                v-on:click="removeItem"
                class="w-full hover:scale-105 bg-gradient-to-b from-gray-900 to-gray-600 dark:bg-gray-700 text-white dark:text-white py-2 px-4 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Remove Item
              </button>
            </div>
          </div>
        </div>
        <div class="md:flex-1 px-4 p-10">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            {{ details.name }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {{ details.desc }}
          </p>
          <div class="flex mb-4">
            <div class="mr-4">
              <span class="font-bold text-gray-700 dark:text-gray-300"
                >R{{ details.price }}</span
              >
            </div>
            <div>
              <span class="font-bold text-gray-700 dark:text-gray-300"
                >Availability
              </span>
              <span class="text-gray-600 dark:text-gray-300">in Stock</span>
            </div>
          </div>
          <div class="mb-4">
            <span class="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
            <div class="flex items-center mt-2">
              <button
                class="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"
              ></button>
              <button
                class="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"
              ></button>
              <button
                class="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"
              ></button>
              <button
                class="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"
              ></button>
            </div>
          </div>
          <div class="mb-4">
            <span class="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
            <div class="flex items-center mt-2">
              <button
                class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
              >
                S
              </button>
              <button
                class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
              >
                M
              </button>
              <button
                class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
              >
                L
              </button>
              <button
                class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
              >
                XL
              </button>
              <button
                class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
              >
                XXL
              </button>
            </div>
          </div>
          <div>
            <span class="font-bold text-gray-700 dark:text-gray-300"
              >Product Description:</span
            >
            <p class="text-gray-600 dark:text-gray-300 text-xs mt-2">
              Made to withstand the test of time, Skipaman T-shirts boast a superior
              craftsmanship that sets them apart from the rest. Whether you're dressing up
              for a casual outing or seeking everyday comfort, these T-shirts are the
              epitome of versatility and reliability.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemsDetails",
  components: {},
  data() {
    return {
      details: this.$route.params,
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    goToCart() {
      this.$router.push("/cart");
    },
    addToCart() {
      // this.$store.commit("addToCart");
      this.$store.dispatch("addToCart", this.details);
      console.log("this.$store", this.$store.state.cartItems);
    },
    removeItem() {
      // this.$store.commit("removeItem");
      this.$store.dispatch("removeItem", this.details);
    },
  },
  created() {
    if (this.$route.params.id !== undefined) {
      localStorage.setItem("details", JSON.stringify(this.$route.params));
    }
  },
  mounted() {
    this.details = JSON.parse(localStorage.getItem("details"));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.food-details-outer {
  flex-direction: column;
  height: 100vh;
}

.food-details {
  flex: 1;
  overflow-y: auto;
}

.fw-600 {
  font-weight: 600;
}

@media screen and (min-width: 768px) {
  .button-container {
    width: 50%;
    margin-bottom: 0;
    /* Reset margin for medium screens and above */
  }
}
</style>