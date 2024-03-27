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
                @click="goToCart"
                class="w-full hover:scale-105 bg-gradient-to-b from-gray-900 to-gray-600 dark:bg-gray-600 text-white py-2 px-4 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                View cart items
              </button>
            </div>
            <div class="w-1/2 px-2">
              <button
                @click="addToCart"
                class="w-full hover:scale-105 bg-gradient-to-b from-gray-900 to-gray-600 dark:bg-gray-700 text-white dark:text-white py-2 px-4 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Add items
              </button>
            </div>
            <div class="w-1/2 px-2">
              <button
                @click="removeItem"
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
          <p class="text-gray-600 dark:text-gray-300 text-xs mb-4">
            {{ details.desc }}
          </p>
          <div class="flex mb-4">
            <div class="mr-4">
              <span class="font-bold text-gray-700 dark:text-gray-300">
                R{{ details.price }}
              </span>
            </div>
            <div>
              <span class="font-bold text-gray-700 dark:text-gray-300">
                Availability
              </span>
              <span class="text-gray-600 dark:text-gray-300">in Stock</span>
            </div>
          </div>
          <div class="mb-4">
            <span class="font-bold text-gray-700 dark:text-gray-300"> Color:</span>
            <h1>{{ details.color }}</h1>
          </div>
          <div class="relative b-5 pr-20 inline-block text-left">
            <button
              @click="toggleDropdown"
              class="inline-flex justify-center bg-gradient-to-r from-gray-700 via-gray-900 to-black items-center px-4 py-2 border border-transparent rounded-full shadow-sm text-xs font-medium text-white"
            >
              {{ selectedSize ? selectedSize : "Selected Size" }}

              <!-- Update this part to display the selected size -->
              <svg
                class="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.59l-4.95-4.95a1.4 1.4 0 00-1.98 1.98l6.36 6.36a1.4 1.4 0 002 0l6.36-6.36a1.4 1.4 0 00-1.98-1.98L10 12.59z"
                />
              </svg>
            </button>
            <div
              v-if="$store.state.isOpen"
              @click="toggleDropdown"
              class="origin-top-right p-2 absolute mr-[-15px] right-0 mt-4 w-[230px] rounded-md shadow-lg bg-gradient-to-r from-gray-700 via-gray-900 to-black ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div class="py-1" role="none">
                <a
                  href="#"
                  class="block px-4 py-2 text-xs text-gray-50 hover:text-bg-gradient-to-r from-indigo-200 via-red-100 to-yellow-100"
                  role="menuitem"
                  @click="selectSize('Small size')"
                  >Small</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-xs text-gray-50 hover:text-bg-gradient-to-r from-indigo-200 via-red-100 to-yellow-100"
                  role="menuitem"
                  @click="selectSize('Medium size')"
                  >Medium</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-xs text-gray-50 hover:text-bg-gradient-to-r from-indigo-200 via-red-100 to-yellow-100"
                  role="menuitem"
                  @click="selectSize('Large size')"
                  >Large</a
                >
              </div>
            </div>
          </div>
          <div class="pt-5">
            <span class="font-bold text-gray-700 dark:text-gray-300">
              Product Description:
            </span>
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
    <AlsoPurchased />
  </div>
</template>

<script>
import AlsoPurchased from "@/components/common/AlsoPurchased.vue";
export default {
  name: "ItemsDetails",
  components: {
    AlsoPurchased,
  },
  data() {
    return {
      details: this.$route.params,
      isOpen: false,
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    selectedSize() {
      return this.$store.state.selectedSize;
    },
    availableColors() {
      return this.$store.state.availableColors;
    },
    topRated() {
      return this.$store.state.topRated;
    },
    allCategories() {
      return this.$store.state.allCategories;
    },
    dishesNearYou() {
      return this.$store.state.dishesNearYou;
    },
    trendingItems() {
      return this.$store.state.trendingItems;
    },
  },
  methods: {
    goToCart() {
      this.$router.push("/cart");
    },
    addToCart() {
      this.$store.dispatch("addToCart", this.details);
      console.log("this.$store", this.$store.state.cartItems);
    },
    removeItem() {
      this.$store.dispatch("removeItem", this.details);
    },
    selectSize(size) {
      this.$store.dispatch("selectSize", size);
    },
    toggleDropdown(size) {
      this.$store.dispatch("toggleDropdown", size);
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

.size-button {
  background-color: #ddd;
  color: #f7eeee;
  border: none;
  padding: 8px 16px;
  margin-right: 8px;
  border-radius: 9999px;
  cursor: pointer;
}

.size-button.active {
  background-color: #007bff;
  color: #fff;
}
</style>
